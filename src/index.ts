import cheerio from 'cheerio'
import { htmlBody } from './correction'

const answerRegex = /[0-9]+([A-Z])/
const mailRegex = /^(-?[0-9]+[,\n])+/gm
const mailLineRegex = /((?<id>[0-9]+),)(?<values>(-?[01],?)+)/

interface MailLine {
    id: number
    values: number[]
}

async function getAnswers(htmlBody: string) {
    const $ = cheerio.load(await htmlBody)

    const answers: { id: number, value: number }[] = []
    $('[typeof="schema:Answer"]').each((i, el) => {
        const question = $(el)
        const id = question.attr('id')

        if (id === undefined) throw new Error(`Missing "id" attribute in HTML element nb ${i}`)

        let value: string
        try {
            value = question.find('input[type="radio"][checked]')[0].attribs.value
        } catch {
            throw new Error(`No answer selected for question "${id}"`)
        }

        const match = value.match(answerRegex)
        if (match === null) throw new Error('Missing answer')

        const valueNumber = (() => {
            if (match[1] === 'Y') return 1
            if (match[1] === 'N') return -1
            return 0
        })()

        answers.push({ id: parseInt(id), value: valueNumber })
    })

    return answers.sort((a, b) => a.id - b.id).map(a => a.value)
}

async function getStudentAnswers(mail: string) {
    const match = mail.match(mailRegex)
    if (match === null) throw new Error('Pattern not found in mail')

    const spacesRegex = /\s+/g
    const parseLine = (line: string): MailLine | undefined => {
        const match = line.replace(spacesRegex, '').match(mailLineRegex)
        if (
            match === null ||
            match.groups === undefined ||
            match.groups.values === undefined ||
            match.groups.id === undefined
        ) return undefined

        return { id: parseInt(match.groups.id), values: match.groups.values.split(',').map(v => parseInt(v)) }
    }

    const lines = match[0].split('\n')
    const parsed = lines.map(line => parseLine(line)).filter(v => v !== undefined) as MailLine[]
    return parsed.map(v => v.values).flat()
}

async function getScores(mail: string, htmlBody: string) {
    const answers = await getAnswers(htmlBody)
    const studentAnswers = await getStudentAnswers(mail)

    let nbCorrect = 0
    let nbIncorrect = 0
    let nbMissing = 0

    studentAnswers.forEach((studentAnswer, i) => {
        if (studentAnswer === 0) nbMissing++
        else if (studentAnswer === answers[i]) nbCorrect++
        else nbIncorrect++
    })

    return {
        nbCorrect,
        nbIncorrect,
        nbMissing,
    }
}

function main() {
    const button = document.getElementById('evaluate') as HTMLButtonElement
    const mail = document.getElementById('mail') as HTMLInputElement
    const result = document.getElementById('result') as HTMLDivElement

    button?.addEventListener('click', () => {
        getScores(mail!.value + '\n\n', htmlBody)
        .then(scores => {
            const x = scores.nbCorrect - scores.nbIncorrect;
            const total = scores.nbCorrect + scores.nbIncorrect + scores.nbMissing

            result!.innerHTML = `
                <br>
                <p>Correct answers: ${scores.nbCorrect}</p>
                <p>Incorrect answers: ${scores.nbIncorrect}</p>
                <p>Missing answers: ${scores.nbMissing}</p>
                <br>
                <p>Score: ${((x / total) * 20).toFixed(2)} / 20</p>
                <br>
                <p>Score details:</p>
                <ul>
                    <li>A good answer weights 1</li>
                    <li>A bad answer weights -1</li>
                    <li>A missing answer weights 0</li>
                </ul>
            `
        })
        .catch(console.error)
    })
}

main()
