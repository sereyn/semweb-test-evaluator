import got from 'got'
import fs from 'fs'

const url = 'https://www.emse.fr/~zimmermann/Teaching/SemWeb/Tests/SemanticWebQuiz/correction.php'

got.stream(url)
.pipe(fs.createWriteStream('./correction.html'))
