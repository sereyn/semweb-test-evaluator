
export const htmlBody = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Semantic Web: Exam</title>
		<base href="https://www.emse.fr/~zimmermann/Teaching/SemWeb/" />
		<link href="prism/prism.css" rel="stylesheet" />
		<script src="prism/prism.js"></script>		<script>
			function validate(form) {
				var fullname;
				window.onbeforeunload = null;
				fullname = document.getElementById("fullname").value;
				confirmFullname = document.getElementById("confirmfullname").value;
				if(fullname == "") {
					alert("You must choose your name from the list at the beginning of the form.");
					return false;
				}
				if(fullname != confirmFullname) {
					alert("You must enter the same name in the confirmation box.");
					return false;
				}
				if(confirm('Do you really want to submit the form?')) {
					return true;
				}
				else {
					window.onbeforeunload = function(){
    					return "Are you sure you want to leave this page? If yes, all data will be lost.";
					};
					return false;
				}
			}
			/*document.getElementById("form").submit(function () {
			    window.onbeforeunload = null;
			});*/
			window.onbeforeunload = function(){
    			return "Are you sure you want to leave this page? If yes, all data will be lost.";
			};
		</script>
		<style type="text/css">
			@font-face {
				font-family: cmss8;
				src: url("../../fonts/ufonts.com_cmss8.ttf");
			}
			body {
				max-width: 950px;
				margin: auto;
				border: solid 1px black;
				font-size: 110%;
				padding: 5px;
				box-shadow: 0px 10px 100px 10px rgba(0,0,0,0.5);
				counter-reset: figures;
			}
			code {
				font-size: 120%;
			}
			form {
				margin: 10px;
			}
			div[id] {
				border: 1px solid #CCC;
				margin: 3px;
				padding: 3px;
			}
			div[id] p {
				margin: 2px;
			}
			#name {
				border: solid blue;
				font-weight: bold;
				margin-bottom: 20px;
			}
			#warning {
				font-size: 300%;
				display: none;
				color: red;
				position: fixed;
				left: 5px;
				top: 5px;
				border: solid red;
			}
			div.q {
				margin-bottom: 20px;
				border: 2px dashed darkred;
			}
			a.a-def {
				text-decoration: underline dashed lightblue;
				color: darkred;
			}
			div.answer label {
				vertical-align: middle;
			}
			figcaption {
				counter-increment: figures;
			}
			figcaption::before {
				content: "Figure " counter(figures) ": ";
				font-weight: bold;
				text-align: center;
			}
			/*
			input[type=checkbox]:checked {
				border: 1px solid green;
				background-color: #8e8;
			}
			input[type=checkbox]:checked + label {
				background-color: #efe;
			}
			input[type=checkbox] {
			    -webkit-appearance: none;
			    -moz-appearance: none;
			    -ms-appearance: none;
			    -border-radius: 4px;
			    height: 1em;
			    width: 1em;
			    background: #fff;
			    border: 1px solid #888;
			    margin-right: 10px;
			    margin-bottom: -1px;
			}*/
			input[type=radio]:checked {
				border: 1px solid green;
				background-color: #8e8;
			}
			input[type=radio]:checked + label {
				background-color: #fee;
			}
			input[type=radio]:checked + em + input + label {
				background-color: #efe;
			}
			input[type=radio].nochoice {
				-webkit-appearance: none;
			    -moz-appearance: none;
			    -ms-appearance: none;
			    border-radius: 4px;
			    height: 1em;
			    width: 1em;
			    background: #fff;
			    border: 1px solid #888;
			    margin-right: 10px;
			    margin-bottom: -1px;
			}
			input[type=radio].nochoice:checked {
				border: 1px solid green;
				background-color: #88e;
			}
			.remark {
				color: #800;
			}
			label {
				padding: 4px;
				margin-left: 1em;
				display: inline-block;
				position: relative;
				width: 720px;
			}
			/*div.answer em {
				font-family: sans-serif;
				font-style: normal;
				font-size: 80%;
				color: grey;
			}*/
		</style>
	</head>
	<body>
		<h1>Semantic Web: Exam</h1>
		<form name="myform" id="form" method="post" action="" onsubmit="return validate(this);">
			<p>For questions containing Turtle or SPARQL code, we will assume that these prefixes are defined at the beginning of the file or query:</p>
			<pre data-src="prefixes.ttl" class="language-turtle">
			</pre>
			<div id="e705647473dec3260139b82d03924dbe73e45b8d" about="q3:e705647473dec3260139b82d03924dbe73e45b8d" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>1.</strong> In RDF, blank nodes are:</p>
				<div class="answer" id="8" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:8">? <input class="nochoice" type="radio" name="a8" value="8X" /> <em>Yes:</em><input type="radio" name="a8" value="8Y" /> <em>No:</em><input type="radio" checked="checked" name="a8" value="8N" /> <label for="8" property="schema:text">Relative IRIs.</label></div>
				<div class="answer" id="5" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:5">? <input class="nochoice" type="radio" name="a5" value="5X" /> <em>Yes:</em><input type="radio" name="a5" value="5Y" /> <em>No:</em><input type="radio" checked="checked" name="a5" value="5N" /> <label for="5" property="schema:text">The same as the special value <code>NULL</code> in SQL.</label></div>
				<div class="answer" id="7" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:7">? <input class="nochoice" type="radio" name="a7" value="7X" /> <em>Yes:</em><input type="radio" name="a7" value="7Y" /> <em>No:</em><input type="radio" checked="checked" name="a7" value="7N" /> <label for="7" property="schema:text">Resource identifiers that are not uniform.</label></div>
				<div class="answer" id="9" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:9">? <input class="nochoice" type="radio" name="a9" value="9X" /> <em>Yes:</em><input type="radio" name="a9" value="9Y" /> <em>No:</em><input type="radio" checked="checked" name="a9" value="9N" /> <label for="9" property="schema:text">Ignored by RDF parsers.</label></div>
				<div class="answer" id="6" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:6">? <input class="nochoice" type="radio" name="a6" value="6X" /> <em>Yes:</em><input type="radio" checked="checked" name="a6" value="6Y" /> <em>No:</em><input type="radio" name="a6" value="6N" /> <label for="6" property="schema:text">Indicating the existence of a thing.</label></div>
			</div>
			<div id="bba14123c8df18dd04e7b8cee96d22c8ba38015b" about="q3:bba14123c8df18dd04e7b8cee96d22c8ba38015b" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>2.</strong> In RDF, a literal:</p>
				<div class="answer" id="18" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:18">? <input class="nochoice" type="radio" name="a18" value="18X" /> <em>Yes:</em><input type="radio" name="a18" value="18Y" /> <em>No:</em><input type="radio" checked="checked" name="a18" value="18N" /> <label for="18" property="schema:text">Is a variable.</label></div>
				<div class="answer" id="15" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:15">? <input class="nochoice" type="radio" name="a15" value="15X" /> <em>Yes:</em><input type="radio" checked="checked" name="a15" value="15Y" /> <em>No:</em><input type="radio" name="a15" value="15N" /> <label for="15" property="schema:text">Consists of a character string and a datatype IRI (and optionally a language tag)</label></div>
				<div class="answer" id="16" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:16">? <input class="nochoice" type="radio" name="a16" value="16X" /> <em>Yes:</em><input type="radio" name="a16" value="16Y" /> <em>No:</em><input type="radio" checked="checked" name="a16" value="16N" /> <label for="16" property="schema:text">Is an XML Schema Datatype.</label></div>
				<div class="answer" id="17" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:17">? <input class="nochoice" type="radio" name="a17" value="17X" /> <em>Yes:</em><input type="radio" name="a17" value="17Y" /> <em>No:</em><input type="radio" checked="checked" name="a17" value="17N" /> <label for="17" property="schema:text">Has a lexical space, a value space, and a lexical to value mapping.</label></div>
				<div class="answer" id="19" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:19">? <input class="nochoice" type="radio" name="a19" value="19X" /> <em>Yes:</em><input type="radio" name="a19" value="19Y" /> <em>No:</em><input type="radio" checked="checked" name="a19" value="19N" /> <label for="19" property="schema:text">Is a special form of IRIs.</label></div>
			</div>
			<div id="599a7139aaaccc64b6cc7e108014f19f5349c537" about="q3:599a7139aaaccc64b6cc7e108014f19f5349c537" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>3.</strong> An RDF graph:</p>
				<div class="answer" id="13" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:13">? <input class="nochoice" type="radio" name="a13" value="13X" /> <em>Yes:</em><input type="radio" name="a13" value="13Y" /> <em>No:</em><input type="radio" checked="checked" name="a13" value="13N" /> <label for="13" property="schema:text">Has three elements called the subject, the predicate and the object.</label></div>
				<div class="answer" id="11" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:11">? <input class="nochoice" type="radio" name="a11" value="11X" /> <em>Yes:</em><input type="radio" name="a11" value="11Y" /> <em>No:</em><input type="radio" checked="checked" name="a11" value="11N" /> <label for="11" property="schema:text">Is contained in an XML element.</label></div>
				<div class="answer" id="14" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:14">? <input class="nochoice" type="radio" name="a14" value="14X" /> <em>Yes:</em><input type="radio" name="a14" value="14Y" /> <em>No:</em><input type="radio" checked="checked" name="a14" value="14N" /> <label for="14" property="schema:text">Is an acyclic directed graph.</label></div>
				<div class="answer" id="10" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:10">? <input class="nochoice" type="radio" name="a10" value="10X" /> <em>Yes:</em><input type="radio" name="a10" value="10Y" /> <em>No:</em><input type="radio" checked="checked" name="a10" value="10N" /> <label for="10" property="schema:text">Has three elements called the IRI, the blank node, and the literal.</label></div>
				<div class="answer" id="12" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:12">? <input class="nochoice" type="radio" name="a12" value="12X" /> <em>Yes:</em><input type="radio" name="a12" value="12Y" /> <em>No:</em><input type="radio" checked="checked" name="a12" value="12N" /> <label for="12" property="schema:text">Is a part of a Web page.</label></div>
			</div>
			<div id="8982eb3c41cdbddefbb2b560ebdc3d22f394bba9" about="q3:8982eb3c41cdbddefbb2b560ebdc3d22f394bba9" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>4.</strong> Which of the following statements about identifiers is correct?</p>
				<div class="answer" id="3" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:3">? <input class="nochoice" type="radio" name="a3" value="3X" /> <em>Yes:</em><input type="radio" checked="checked" name="a3" value="3Y" /> <em>No:</em><input type="radio" name="a3" value="3N" /> <label for="3" property="schema:text">All URLs are URIs.</label></div>
				<div class="answer" id="2" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:2">? <input class="nochoice" type="radio" name="a2" value="2X" /> <em>Yes:</em><input type="radio" checked="checked" name="a2" value="2Y" /> <em>No:</em><input type="radio" name="a2" value="2N" /> <label for="2" property="schema:text">All URIs are IRIs.</label></div>
				<div class="answer" id="1" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:1">? <input class="nochoice" type="radio" name="a1" value="1X" /> <em>Yes:</em><input type="radio" name="a1" value="1Y" /> <em>No:</em><input type="radio" checked="checked" name="a1" value="1N" /> <label for="1" property="schema:text">IRI is a synonym of URI.</label></div>
				<div class="answer" id="0" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:0">? <input class="nochoice" type="radio" name="a0" value="0X" /> <em>Yes:</em><input type="radio" checked="checked" name="a0" value="0Y" /> <em>No:</em><input type="radio" name="a0" value="0N" /> <label for="0" property="schema:text">Unicode characters can be used in IRIs.</label></div>
				<div class="answer" id="4" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:4">? <input class="nochoice" type="radio" name="a4" value="4X" /> <em>Yes:</em><input type="radio" name="a4" value="4Y" /> <em>No:</em><input type="radio" checked="checked" name="a4" value="4N" /> <label for="4" property="schema:text">Only HTTP URIs can be used in RDF.</label></div>
			</div>
			<div id="45af568a9849bb557d2a7a03daa798ec5651ef2d" about="q3:45af568a9849bb557d2a7a03daa798ec5651ef2d" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>5.</strong> In Turtle, assuming the prefixes at the beginning of this page are defined, the term <code class="language-turtle">"abrzk"^^xsd:integer</code>:</p>
				<div class="answer" id="29" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:29">? <input class="nochoice" type="radio" name="a29" value="29X" /> <em>Yes:</em><input type="radio" checked="checked" name="a29" value="29Y" /> <em>No:</em><input type="radio" name="a29" value="29N" /> <label for="29" property="schema:text">Can be the object of a triple</label></div>
				<div class="answer" id="32" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:32">? <input class="nochoice" type="radio" name="a32" value="32X" /> <em>Yes:</em><input type="radio" name="a32" value="32Y" /> <em>No:</em><input type="radio" checked="checked" name="a32" value="32N" /> <label for="32" property="schema:text">Can be the predicate of a triple.</label></div>
				<div class="answer" id="33" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:33">? <input class="nochoice" type="radio" name="a33" value="33X" /> <em>Yes:</em><input type="radio" checked="checked" name="a33" value="33Y" /> <em>No:</em><input type="radio" name="a33" value="33N" /> <label for="33" property="schema:text">Is an ill-typed literal.</label></div>
				<div class="answer" id="34" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:34">? <input class="nochoice" type="radio" name="a34" value="34X" /> <em>Yes:</em><input type="radio" name="a34" value="34Y" /> <em>No:</em><input type="radio" checked="checked" name="a34" value="34N" /> <label for="34" property="schema:text">Can be the subject of a triple.</label></div>
				<div class="answer" id="30" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:30">? <input class="nochoice" type="radio" name="a30" value="30X" /> <em>Yes:</em><input type="radio" name="a30" value="30Y" /> <em>No:</em><input type="radio" checked="checked" name="a30" value="30N" /> <label for="30" property="schema:text">Is a character string.</label></div>
				<div class="answer" id="31" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:31">? <input class="nochoice" type="radio" name="a31" value="31X" /> <em>Yes:</em><input type="radio" name="a31" value="31Y" /> <em>No:</em><input type="radio" checked="checked" name="a31" value="31N" /> <label for="31" property="schema:text">Denotes a number.</label></div>
			</div>
			<div id="e900490db01bf8eae548d1cad0f4bc70d82742cc" about="q3:e900490db01bf8eae548d1cad0f4bc70d82742cc" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>6.</strong> Assuming the prefixes at the beginning of this page are defined, which of the following RDF graphs model the sentence “On the 17<sup>th</sup> of December 2021 at 2 pm, Emmanuel sang the song <em>La Marseillaise</em>”? <strong>In the original quiz, the dates where unintentionally set to <code>2020-12-17</code> instead of <code>2021-12-17</code>. This was a typo, not a trick.</strong></p>
				<div class="answer" id="50" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:50">? <input class="nochoice" type="radio" name="a50" value="50X" /> <em>Yes:</em><input type="radio" checked="checked" name="a50" value="50Y" /> <em>No:</em><input type="radio" name="a50" value="50N" /> <label for="50" property="schema:text"><pre><code class="language-turtle">[] ex:performer ex:Emmanuel;
	ex:performedSong ex:LaMarseillaise;
	ex:performanceTime "2021-12-17T14:00:00"^^xsd:dateTime .</code></pre></label></div>
				<div class="answer" id="48" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:48">? <input class="nochoice" type="radio" name="a48" value="48X" /> <em>Yes:</em><input type="radio" name="a48" value="48Y" /> <em>No:</em><input type="radio" checked="checked" name="a48" value="48N" /> <label for="48" property="schema:text"><pre><code class="language-turtle">ex:Emmanuel ex:sang ex:LaMarseillaise .
ex:LaMarseillaise ex:songTime "2021-12-17T14:00:00"^^xsd:dateTime .</code></pre></label></div>
				<div class="answer" id="47" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:47">? <input class="nochoice" type="radio" name="a47" value="47X" /> <em>Yes:</em><input type="radio" name="a47" value="47Y" /> <em>No:</em><input type="radio" checked="checked" name="a47" value="47N" /> <label for="47" property="schema:text"><pre><code class="language-turtle">ex:Emmanuel ex:sang ex:LaMarseillaise;
	ex:atTime "2021-12-17T14:00:00"^^xsd:dateTime .</code></pre></label></div>
				<div class="answer" id="49" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:49">? <input class="nochoice" type="radio" name="a49" value="49X" /> <em>Yes:</em><input type="radio" name="a49" value="49Y" /> <em>No:</em><input type="radio" checked="checked" name="a49" value="49N" /> <label for="49" property="schema:text"><pre><code class="language-turtle">ex:LaMarseillaise ex:singer ex:Emmanuel;
	ex:atTime "2021-12-17T14:00:00"^^xsd:dateTime .</code></pre></label></div>
				<div class="answer" id="51" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:51">? <input class="nochoice" type="radio" name="a51" value="51X" /> <em>Yes:</em><input type="radio" checked="checked" name="a51" value="51Y" /> <em>No:</em><input type="radio" name="a51" value="51N" /> <label for="51" property="schema:text"><pre><code class="language-turtle">ex:Emmanuel ex:performed [
	ex:song ex:LaMarseillaise;
	ex:atTime "2021-12-17T14:00:00"^^xsd:dateTime
] .</code></pre></label></div>
			</div>
			<div id="1638c214a2e031b7723c36712f4eb457c36eeb2c" about="q3:1638c214a2e031b7723c36712f4eb457c36eeb2c" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>7.</strong> Assuming the prefixes at the beginning of this page are defined, which of the following are valid IRIs if written in Turtle in the predicate position of an RDF triple?</p>
				<div class="answer" id="20" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:20">? <input class="nochoice" type="radio" name="a20" value="20X" /> <em>Yes:</em><input type="radio" name="a20" value="20Y" /> <em>No:</em><input type="radio" checked="checked" name="a20" value="20N" /> <label for="20" property="schema:text"><code class="language-turtle">_:paris</code></label></div>
				<div class="answer" id="23" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:23">? <input class="nochoice" type="radio" name="a23" value="23X" /> <em>Yes:</em><input type="radio" checked="checked" name="a23" value="23Y" /> <em>No:</em><input type="radio" name="a23" value="23N" /> <label for="23" property="schema:text"><code class="language-turtle">&lt;ssh://secured.host.com/here#test&gt;</code></label></div>
				<div class="answer" id="25" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:25">? <input class="nochoice" type="radio" name="a25" value="25X" /> <em>Yes:</em><input type="radio" checked="checked" name="a25" value="25Y" /> <em>No:</em><input type="radio" name="a25" value="25N" /> <label for="25" property="schema:text"><code class="language-turtle">&lt;uri&gt;</code></label></div>
				<div class="answer" id="24" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:24">? <input class="nochoice" type="radio" name="a24" value="24X" /> <em>Yes:</em><input type="radio" name="a24" value="24Y" /> <em>No:</em><input type="radio" checked="checked" name="a24" value="24N" /> <label for="24" property="schema:text"><code class="language-turtle">"foaf:Paris"^^xsd:anyURI</code></label></div>
				<div class="answer" id="27" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:27">? <input class="nochoice" type="radio" name="a27" value="27X" /> <em>Yes:</em><input type="radio" checked="checked" name="a27" value="27Y" /> <em>No:</em><input type="radio" name="a27" value="27N" /> <label for="27" property="schema:text"><code class="language-turtle">a</code></label></div>
				<div class="answer" id="28" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:28">? <input class="nochoice" type="radio" name="a28" value="28X" /> <em>Yes:</em><input type="radio" name="a28" value="28Y" /> <em>No:</em><input type="radio" checked="checked" name="a28" value="28N" /> <label for="28" property="schema:text"><code class="language-turtle">"http://data.google.com/"</code></label></div>
				<div class="answer" id="21" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:21">? <input class="nochoice" type="radio" name="a21" value="21X" /> <em>Yes:</em><input type="radio" checked="checked" name="a21" value="21Y" /> <em>No:</em><input type="radio" name="a21" value="21N" /> <label for="21" property="schema:text"><code class="language-turtle">&lt;http://my.server.net/data/Paris&gt;</code></label></div>
				<div class="answer" id="22" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:22">? <input class="nochoice" type="radio" name="a22" value="22X" /> <em>Yes:</em><input type="radio" checked="checked" name="a22" value="22Y" /> <em>No:</em><input type="radio" name="a22" value="22N" /> <label for="22" property="schema:text"><code class="language-turtle">ex:Paris</code></label></div>
				<div class="answer" id="26" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:26">? <input class="nochoice" type="radio" name="a26" value="26X" /> <em>Yes:</em><input type="radio" checked="checked" name="a26" value="26Y" /> <em>No:</em><input type="radio" name="a26" value="26N" /> <label for="26" property="schema:text"><code class="language-turtle">&lt;&gt;</code></label></div>
			</div>
			<div id="aca3d5191d8b2384bf1d9135409dc3b805262939" about="q3:aca3d5191d8b2384bf1d9135409dc3b805262939" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>8.</strong> Assuming the prefixes at the beginning of this page are defined, <strong>and none others</strong>, which of the following are valid RDF triples in Turtle?</p>
				<div class="answer" id="43" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:43">? <input class="nochoice" type="radio" name="a43" value="43X" /> <em>Yes:</em><input type="radio" checked="checked" name="a43" value="43Y" /> <em>No:</em><input type="radio" name="a43" value="43N" /> <label for="43" property="schema:text"><code class="language-turtle">_:paris  a  ex:City .</code></label></div>
				<div class="answer" id="46" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:46">? <input class="nochoice" type="radio" name="a46" value="46X" /> <em>Yes:</em><input type="radio" checked="checked" name="a46" value="46Y" /> <em>No:</em><input type="radio" name="a46" value="46N" /> <label for="46" property="schema:text"><code class="language-turtle">[]  rdf:type  "Something" .</code></label></div>
				<div class="answer" id="42" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:42">? <input class="nochoice" type="radio" name="a42" value="42X" /> <em>Yes:</em><input type="radio" checked="checked" name="a42" value="42Y" /> <em>No:</em><input type="radio" name="a42" value="42N" /> <label for="42" property="schema:text"><code class="language-turtle">rdf:type  rdf:type  rdf:Property .</code></label></div>
				<div class="answer" id="45" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:45">? <input class="nochoice" type="radio" name="a45" value="45X" /> <em>Yes:</em><input type="radio" name="a45" value="45Y" /> <em>No:</em><input type="radio" checked="checked" name="a45" value="45N" /> <label for="45" property="schema:text"><code class="language-turtle">x:Paris  y:CapitalOf  z:France .</code></label></div>
				<div class="answer" id="41" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:41">? <input class="nochoice" type="radio" name="a41" value="41X" /> <em>Yes:</em><input type="radio" name="a41" value="41Y" /> <em>No:</em><input type="radio" checked="checked" name="a41" value="41N" /> <label for="41" property="schema:text"><code class="language-turtle">"Paris"  "capital of"  "France" .</code></label></div>
				<div class="answer" id="44" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:44">? <input class="nochoice" type="radio" name="a44" value="44X" /> <em>Yes:</em><input type="radio" checked="checked" name="a44" value="44Y" /> <em>No:</em><input type="radio" name="a44" value="44N" /> <label for="44" property="schema:text"><code class="language-turtle">ex:Paris  ex:CapitalOf  [ rdf:type ex:Country ] .</code></label></div>
			</div>
			<div id="6486bb0be9d6ff9b34b385ae0bea6256038ceca3" about="q3:6486bb0be9d6ff9b34b385ae0bea6256038ceca3" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>9.</strong> In Turtle, which of these can be used as a blank node?</p>
				<div class="answer" id="38" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:38">? <input class="nochoice" type="radio" name="a38" value="38X" /> <em>Yes:</em><input type="radio" name="a38" value="38Y" /> <em>No:</em><input type="radio" checked="checked" name="a38" value="38N" /> <label for="38" property="schema:text"><code class="language-turtle">"_:bnode123"</code></label></div>
				<div class="answer" id="35" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:35">? <input class="nochoice" type="radio" name="a35" value="35X" /> <em>Yes:</em><input type="radio" checked="checked" name="a35" value="35Y" /> <em>No:</em><input type="radio" name="a35" value="35N" /> <label for="35" property="schema:text"><code class="language-turtle">[]</code></label></div>
				<div class="answer" id="37" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:37">? <input class="nochoice" type="radio" name="a37" value="37X" /> <em>Yes:</em><input type="radio" name="a37" value="37Y" /> <em>No:</em><input type="radio" checked="checked" name="a37" value="37N" /> <label for="37" property="schema:text"><code class="language-turtle">ex:_blank</code></label></div>
				<div class="answer" id="40" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:40">? <input class="nochoice" type="radio" name="a40" value="40X" /> <em>Yes:</em><input type="radio" checked="checked" name="a40" value="40Y" /> <em>No:</em><input type="radio" name="a40" value="40N" /> <label for="40" property="schema:text"><code class="language-turtle">[ rdf:type foaf:Person ]</code></label></div>
				<div class="answer" id="39" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:39">? <input class="nochoice" type="radio" name="a39" value="39X" /> <em>Yes:</em><input type="radio" name="a39" value="39Y" /> <em>No:</em><input type="radio" checked="checked" name="a39" value="39N" /> <label for="39" property="schema:text"><code class="language-turtle">&lt;_:bnode&gt;</code></label></div>
				<div class="answer" id="36" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:36">? <input class="nochoice" type="radio" name="a36" value="36X" /> <em>Yes:</em><input type="radio" checked="checked" name="a36" value="36Y" /> <em>No:</em><input type="radio" name="a36" value="36N" /> <label for="36" property="schema:text"><code class="language-turtle">_:huhuh</code></label></div>
			</div>
			<div id="1af61d7d170a929a48a8c139e7151fadcd1c6164" about="q3:1af61d7d170a929a48a8c139e7151fadcd1c6164" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>10.</strong> Which of the following are valid SPARQL queries, assuming the prefixes at the top of this page are declared?</p>
				<div class="answer" id="63" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:63">? <input class="nochoice" type="radio" name="a63" value="63X" /> <em>Yes:</em><input type="radio" checked="checked" name="a63" value="63Y" /> <em>No:</em><input type="radio" name="a63" value="63N" /> <label for="63" property="schema:text"><code class="language-sparql">SELECT ?x ?y WHERE { ?x  ?y  ?z } ORDER BY DESC(?z)</code></label></div>
				<div class="answer" id="61" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:61">? <input class="nochoice" type="radio" name="a61" value="61X" /> <em>Yes:</em><input type="radio" name="a61" value="61Y" /> <em>No:</em><input type="radio" checked="checked" name="a61" value="61N" /> <label for="61" property="schema:text"><code class="language-sparql">SELECT ?p.name WHERE { ?p  a  ex:Person; ex:name ?name }</code></label></div>
				<div class="answer" id="60" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:60">? <input class="nochoice" type="radio" name="a60" value="60X" /> <em>Yes:</em><input type="radio" name="a60" value="60Y" /> <em>No:</em><input type="radio" checked="checked" name="a60" value="60N" /> <label for="60" property="schema:text"><code class="language-sparql">SELECT ?id FROM ex:person WHERE ex:person.?id = 1</code></label></div>
				<div class="answer" id="64" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:64">? <input class="nochoice" type="radio" name="a64" value="64X" /> <em>Yes:</em><input type="radio" checked="checked" name="a64" value="64Y" /> <em>No:</em><input type="radio" name="a64" value="64N" /> <label for="64" property="schema:text"><code class="language-sparql">SELECT (COUNT(*) AS ?nb) WHERE { ?x  ?y  ?z } GROUP BY ?x LIMIT 10</code></label></div>
				<div class="answer" id="62" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:62">? <input class="nochoice" type="radio" name="a62" value="62X" /> <em>Yes:</em><input type="radio" checked="checked" name="a62" value="62Y" /> <em>No:</em><input type="radio" name="a62" value="62N" /> <label for="62" property="schema:text"><code class="language-sparql">SELECT ?x WHERE { ?x  ?y  [] }</code></label></div>
			</div>
			<div id="f5a9d1950565291922e76d2ee3ba41bfa7353fe8" about="q3:f5a9d1950565291922e76d2ee3ba41bfa7353fe8" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>11.</strong> Which of the following SPARQL queries return the list of names of people born in France, without duplicates?</p>
				<div class="answer" id="81" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:81">? <input class="nochoice" type="radio" name="a81" value="81X" /> <em>Yes:</em><input type="radio" checked="checked" name="a81" value="81Y" /> <em>No:</em><input type="radio" name="a81" value="81N" /> <label for="81" property="schema:text"><pre><code class="language-sparql">SELECT ?name WHERE {
	?person  a  ex:Person;
		ex:bornIn  ex:France;
		ex:name  ?name .
}
GROUP BY ?name</code></pre></label></div>
				<div class="answer" id="79" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:79">? <input class="nochoice" type="radio" name="a79" value="79X" /> <em>Yes:</em><input type="radio" checked="checked" name="a79" value="79Y" /> <em>No:</em><input type="radio" name="a79" value="79N" /> <label for="79" property="schema:text"><pre><code class="language-sparql">SELECT DISTINCT ?name WHERE {
	?person  a  ex:Person;
		ex:bornIn  ex:France;
		ex:name  ?name .
}</code></pre></label></div>
				<div class="answer" id="80" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:80">? <input class="nochoice" type="radio" name="a80" value="80X" /> <em>Yes:</em><input type="radio" name="a80" value="80Y" /> <em>No:</em><input type="radio" checked="checked" name="a80" value="80N" /> <label for="80" property="schema:text"><pre><code class="language-sparql">SELECT ?name WHERE {
	?person  a  ex:Person;
		ex:bornIn  ex:France;
		ex:name  ?name .
}
HAVING DISTINCT(?name)</code></pre></label></div>
				<div class="answer" id="78" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:78">? <input class="nochoice" type="radio" name="a78" value="78X" /> <em>Yes:</em><input type="radio" name="a78" value="78Y" /> <em>No:</em><input type="radio" checked="checked" name="a78" value="78N" /> <label for="78" property="schema:text"><pre><code class="language-sparql">SELECT ?name WHERE {
	?person  a  ex:Person;
		ex:bornIn  ex:France;
		ex:name  ?name .
}</code></pre></label></div>
			</div>
			<div id="2a1415eeeaaf0844925b0c7908937aa16577b8b8" about="q3:2a1415eeeaaf0844925b0c7908937aa16577b8b8" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>12.</strong> Which of the following SPARQL queries return the country with the highest population?</p>
				<div class="answer" id="74" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:74">? <input class="nochoice" type="radio" name="a74" value="74X" /> <em>Yes:</em><input type="radio" name="a74" value="74Y" /> <em>No:</em><input type="radio" checked="checked" name="a74" value="74N" /> <label for="74" property="schema:text"><pre><code class="language-sparql">SELECT ?country ?population WHERE {
	?country  a  ex:Country;
		ex:population  ?population .
	FILTER ( MAX(?n) )
}</code></pre></label></div>
				<div class="answer" id="77" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:77">? <input class="nochoice" type="radio" name="a77" value="77X" /> <em>Yes:</em><input type="radio" checked="checked" name="a77" value="77Y" /> <em>No:</em><input type="radio" name="a77" value="77N" /> <label for="77" property="schema:text"><pre><code class="language-sparql">SELECT ?country ?population WHERE {
	?country  a  ex:Country;
		ex:population  ?population .
	{
		SELECT (MAX(?p) AS ?population) {
			?c  a  ex:Country;
				ex:population  ?p .
		}
	}
}</code></pre></label></div>
				<div class="answer" id="76" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:76">? <input class="nochoice" type="radio" name="a76" value="76X" /> <em>Yes:</em><input type="radio" name="a76" value="76Y" /> <em>No:</em><input type="radio" checked="checked" name="a76" value="76N" /> <label for="76" property="schema:text"><pre><code class="language-sparql">SELECT ?country (MAX(?n) AS ?population) WHERE {
	?country  a  ex:Country;
		ex:population  ?n .
}
GROUP BY ?country</code></pre></label></div>
				<div class="answer" id="75" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:75">? <input class="nochoice" type="radio" name="a75" value="75X" /> <em>Yes:</em><input type="radio" name="a75" value="75Y" /> <em>No:</em><input type="radio" checked="checked" name="a75" value="75N" /> <label for="75" property="schema:text"><pre><code class="language-sparql">SELECT ?country (MAX(?p) AS ?population) WHERE {
	?country  a  ex:Country;
		ex:population  ?p .
}</code></pre></label></div>
				<div class="answer" id="73" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:73">? <input class="nochoice" type="radio" name="a73" value="73X" /> <em>Yes:</em><input type="radio" checked="checked" name="a73" value="73Y" /> <em>No:</em><input type="radio" name="a73" value="73N" /> <label for="73" property="schema:text"><pre><code class="language-sparql">SELECT ?country ?population WHERE {
	?country  a  ex:Country;
		ex:population  ?population .
}
ORDER BY DESC(?population) LIMIT 1</code></pre></label></div>
			</div>
			<div id="414b18de0ce65d9445e8d462cc4b4d7209d2a837" about="q3:414b18de0ce65d9445e8d462cc4b4d7209d2a837" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>13.</strong> Which of the following SPARQL queries return countries that are either in Europe or America?</p>
				<div class="answer" id="65" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:65">? <input class="nochoice" type="radio" name="a65" value="65X" /> <em>Yes:</em><input type="radio" name="a65" value="65Y" /> <em>No:</em><input type="radio" checked="checked" name="a65" value="65N" /> <label for="65" property="schema:text"><pre><code class="language-sparql">SELECT ?country WHERE {
	?country  a  ex:Country;
		ex:continent  ex:Europe,  ex:America .
}</code></pre></label></div>
				<div class="answer" id="67" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:67">? <input class="nochoice" type="radio" name="a67" value="67X" /> <em>Yes:</em><input type="radio" checked="checked" name="a67" value="67Y" /> <em>No:</em><input type="radio" name="a67" value="67N" /> <label for="67" property="schema:text"><pre><code class="language-sparql">SELECT ?country WHERE {
	{ ?country  a  ex:Country;  ex:continent  ex:Europe . }
	UNION
	{ ?country  a  ex:Country;  ex:continent  ex:America . }
}</code></pre></label></div>
				<div class="answer" id="66" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:66">? <input class="nochoice" type="radio" name="a66" value="66X" /> <em>Yes:</em><input type="radio" name="a66" value="66Y" /> <em>No:</em><input type="radio" checked="checked" name="a66" value="66N" /> <label for="66" property="schema:text"><pre><code class="language-sparql">SELECT ?country WHERE {
	?country  a  ex:Country .
	OPTIONAL { ?country  ex:continent  ex:Europe . }
	OPTIONAL { ?country  ex:continent  ex:America . }
}</code></pre></label></div>
				<div class="answer" id="68" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:68">? <input class="nochoice" type="radio" name="a68" value="68X" /> <em>Yes:</em><input type="radio" checked="checked" name="a68" value="68Y" /> <em>No:</em><input type="radio" name="a68" value="68N" /> <label for="68" property="schema:text"><pre><code class="language-sparql">SELECT ?country WHERE {
	?country  rdf:type  ex:Country;
		ex:continent  ?continent .
	FILTER (?continent = ex:Europe || ?continent = ex:America)
}</code></pre></label></div>
			</div>
			<div id="62b9d3e0832e6cfd833686df1c63b1f4aaab4525" about="q3:62b9d3e0832e6cfd833686df1c63b1f4aaab4525" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>14.</strong> Which of the following can appear in the <code>WHERE</code> clause of a SPARQL query?</p>
				<div class="answer" id="56" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:56">? <input class="nochoice" type="radio" name="a56" value="56X" /> <em>Yes:</em><input type="radio" checked="checked" name="a56" value="56Y" /> <em>No:</em><input type="radio" name="a56" value="56N" /> <label for="56" property="schema:text"><code class="language-sparql">[]  ?x  ?y .</code></label></div>
				<div class="answer" id="53" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:53">? <input class="nochoice" type="radio" name="a53" value="53X" /> <em>Yes:</em><input type="radio" checked="checked" name="a53" value="53Y" /> <em>No:</em><input type="radio" name="a53" value="53N" /> <label for="53" property="schema:text"><code class="language-sparql">ex:Platypus  ?x  ex:Mammal .</code></label></div>
				<div class="answer" id="52" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:52">? <input class="nochoice" type="radio" name="a52" value="52X" /> <em>Yes:</em><input type="radio" checked="checked" name="a52" value="52Y" /> <em>No:</em><input type="radio" name="a52" value="52N" /> <label for="52" property="schema:text"><code class="language-sparql">?x  ex:typeOfAnimal  ex:Mammal .</code></label></div>
				<div class="answer" id="59" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:59">? <input class="nochoice" type="radio" name="a59" value="59X" /> <em>Yes:</em><input type="radio" name="a59" value="59Y" /> <em>No:</em><input type="radio" checked="checked" name="a59" value="59N" /> <label for="59" property="schema:text"><code class="language-sparql">"Platypus"  "typeOfAnimal"  "Mammal"^^xsd:string .</code></label></div>
				<div class="answer" id="58" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:58">? <input class="nochoice" type="radio" name="a58" value="58X" /> <em>Yes:</em><input type="radio" checked="checked" name="a58" value="58Y" /> <em>No:</em><input type="radio" name="a58" value="58N" /> <label for="58" property="schema:text"><code class="language-sparql">?x  ?y  "Mammal"@en .</code></label></div>
				<div class="answer" id="55" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:55">? <input class="nochoice" type="radio" name="a55" value="55X" /> <em>Yes:</em><input type="radio" checked="checked" name="a55" value="55Y" /> <em>No:</em><input type="radio" name="a55" value="55N" /> <label for="55" property="schema:text"><code class="language-sparql">?x  ?y  ?z .</code></label></div>
				<div class="answer" id="57" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:57">? <input class="nochoice" type="radio" name="a57" value="57X" /> <em>Yes:</em><input type="radio" name="a57" value="57Y" /> <em>No:</em><input type="radio" checked="checked" name="a57" value="57N" /> <label for="57" property="schema:text"><code class="language-sparql">?x  "typeOfAnimal"@en  ?y .</code></label></div>
				<div class="answer" id="54" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:54">? <input class="nochoice" type="radio" name="a54" value="54X" /> <em>Yes:</em><input type="radio" checked="checked" name="a54" value="54Y" /> <em>No:</em><input type="radio" name="a54" value="54N" /> <label for="54" property="schema:text"><code class="language-sparql">ex:Platypus  ex:typeOfAnimal  ?x .</code></label></div>
			</div>
			<div id="a0def6143e2c3abad7924381b0d461464d958ba0" about="q3:a0def6143e2c3abad7924381b0d461464d958ba0" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>15.</strong> What does the following query retrieve? (assume age is given in number of years)</p>
			        	<pre><code class="language-sparql">SELECT ?familyName WHERE {
	?x  foaf:lastName  ?familyName;
		foaf:age  ?age .
	FILTER(?age >= 18)
}
GROUP BY ?familyName
HAVING(COUNT(?x) >= 5)</code></pre><p></p>
				<div class="answer" id="69" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:69">? <input class="nochoice" type="radio" name="a69" value="69X" /> <em>Yes:</em><input type="radio" name="a69" value="69Y" /> <em>No:</em><input type="radio" checked="checked" name="a69" value="69N" /> <label for="69" property="schema:text">Family names of adults when family has at least 5 members.</label></div>
				<div class="answer" id="72" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:72">? <input class="nochoice" type="radio" name="a72" value="72X" /> <em>Yes:</em><input type="radio" checked="checked" name="a72" value="72Y" /> <em>No:</em><input type="radio" name="a72" value="72N" /> <label for="72" property="schema:text">Family names borne by at least 5 adult people.</label></div>
				<div class="answer" id="71" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:71">? <input class="nochoice" type="radio" name="a71" value="71X" /> <em>Yes:</em><input type="radio" name="a71" value="71Y" /> <em>No:</em><input type="radio" checked="checked" name="a71" value="71N" /> <label for="71" property="schema:text">Family names borne by at least 5 people, among which there is an adult member.</label></div>
				<div class="answer" id="70" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:70">? <input class="nochoice" type="radio" name="a70" value="70X" /> <em>Yes:</em><input type="radio" name="a70" value="70Y" /> <em>No:</em><input type="radio" checked="checked" name="a70" value="70N" /> <label for="70" property="schema:text">Family names borne by at least 5 people.</label></div>
			</div>
			<div id="97659365bcc4d0cf3c6fc3b5e8a747efd494368b" about="q3:97659365bcc4d0cf3c6fc3b5e8a747efd494368b" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>16.</strong> Which of the following standard properties should be used to provide a human readable name for a resource?</p>
				<div class="answer" id="90" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:90">? <input class="nochoice" type="radio" name="a90" value="90X" /> <em>Yes:</em><input type="radio" name="a90" value="90Y" /> <em>No:</em><input type="radio" checked="checked" name="a90" value="90N" /> <label for="90" property="schema:text"><code class="language-turtle">rdfs:seeAlso</code></label></div>
				<div class="answer" id="87" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:87">? <input class="nochoice" type="radio" name="a87" value="87X" /> <em>Yes:</em><input type="radio" name="a87" value="87Y" /> <em>No:</em><input type="radio" checked="checked" name="a87" value="87N" /> <label for="87" property="schema:text"><code class="language-turtle">rdf:type</code></label></div>
				<div class="answer" id="89" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:89">? <input class="nochoice" type="radio" name="a89" value="89X" /> <em>Yes:</em><input type="radio" name="a89" value="89Y" /> <em>No:</em><input type="radio" checked="checked" name="a89" value="89N" /> <label for="89" property="schema:text"><code class="language-turtle">rdfs:comment</code></label></div>
				<div class="answer" id="91" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:91">? <input class="nochoice" type="radio" name="a91" value="91X" /> <em>Yes:</em><input type="radio" name="a91" value="91Y" /> <em>No:</em><input type="radio" checked="checked" name="a91" value="91N" /> <label for="91" property="schema:text"><code class="language-turtle">rdf:value</code></label></div>
				<div class="answer" id="88" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:88">? <input class="nochoice" type="radio" name="a88" value="88X" /> <em>Yes:</em><input type="radio" checked="checked" name="a88" value="88Y" /> <em>No:</em><input type="radio" name="a88" value="88N" /> <label for="88" property="schema:text"><code class="language-turtle">rdfs:label</code></label></div>
			</div>
			<div id="854a3194101d8959ce3082cf64b564827c656f0c" about="q3:854a3194101d8959ce3082cf64b564827c656f0c" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>17.</strong> Which of the following statements about SPARQL are true?</p>
				<div class="answer" id="86" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:86">? <input class="nochoice" type="radio" name="a86" value="86X" /> <em>Yes:</em><input type="radio" checked="checked" name="a86" value="86Y" /> <em>No:</em><input type="radio" name="a86" value="86N" /> <label for="86" property="schema:text">You can query several RDF databases at the same time with a single SPARQL query.</label></div>
				<div class="answer" id="84" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:84">? <input class="nochoice" type="radio" name="a84" value="84X" /> <em>Yes:</em><input type="radio" checked="checked" name="a84" value="84Y" /> <em>No:</em><input type="radio" name="a84" value="84N" /> <label for="84" property="schema:text"><code class="language-sparql">CONSTRUCT</code> queries return RDF graphs.</label></div>
				<div class="answer" id="85" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:85">? <input class="nochoice" type="radio" name="a85" value="85X" /> <em>Yes:</em><input type="radio" name="a85" value="85Y" /> <em>No:</em><input type="radio" checked="checked" name="a85" value="85N" /> <label for="85" property="schema:text">SPARQL extends SQL with the ability to query RDF.</label></div>
				<div class="answer" id="83" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:83">? <input class="nochoice" type="radio" name="a83" value="83X" /> <em>Yes:</em><input type="radio" checked="checked" name="a83" value="83Y" /> <em>No:</em><input type="radio" name="a83" value="83N" /> <label for="83" property="schema:text"><code class="language-sparql">SELECT</code> queries return a list of partial mappings from variable names to RDF terms.</label></div>
				<div class="answer" id="82" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:82">? <input class="nochoice" type="radio" name="a82" value="82X" /> <em>Yes:</em><input type="radio" name="a82" value="82Y" /> <em>No:</em><input type="radio" checked="checked" name="a82" value="82N" /> <label for="82" property="schema:text"><code class="language-sparql">SELECT</code> queries return RDF graphs.</label></div>
			</div>
			<div id="6d75e60f70df952bb107684b2f0460dde719b70c" about="q3:6d75e60f70df952bb107684b2f0460dde719b70c" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>18.</strong> Which of the following statements about Schema.org is true?</p>
				<div class="answer" id="95" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:95">? <input class="nochoice" type="radio" name="a95" value="95X" /> <em>Yes:</em><input type="radio" checked="checked" name="a95" value="95Y" /> <em>No:</em><input type="radio" name="a95" value="95N" /> <label for="95" property="schema:text">Schema.org terms are identified by IRIs.</label></div>
				<div class="answer" id="94" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:94">? <input class="nochoice" type="radio" name="a94" value="94X" /> <em>Yes:</em><input type="radio" name="a94" value="94Y" /> <em>No:</em><input type="radio" checked="checked" name="a94" value="94N" /> <label for="94" property="schema:text">Schema.org must be used with either JSON-LD or RDFa.</label></div>
				<div class="answer" id="93" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:93">? <input class="nochoice" type="radio" name="a93" value="93X" /> <em>Yes:</em><input type="radio" name="a93" value="93Y" /> <em>No:</em><input type="radio" checked="checked" name="a93" value="93N" /> <label for="93" property="schema:text">Schema.org is a tool for optimising Web search results.</label></div>
				<div class="answer" id="92" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:92">? <input class="nochoice" type="radio" name="a92" value="92X" /> <em>Yes:</em><input type="radio" name="a92" value="92Y" /> <em>No:</em><input type="radio" checked="checked" name="a92" value="92N" /> <label for="92" property="schema:text">Schema.org is an RDF vocabulary for e-commerce on the Web.</label></div>
			</div>
			<div id="d880202143f7dcdcb9ddff8c684ad4bf50e6e3ef" about="q3:d880202143f7dcdcb9ddff8c684ad4bf50e6e3ef" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>19.</strong> Which of the following terms are likely to be used as properties of an instance of <code class="language-turtle">schema:Person</code> (i.e. <a href="http://schema.org/Person" target="_blank"><code>http://schema.org/Person</code></a>)?</p>
				<div class="answer" id="111" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:111">? <input class="nochoice" type="radio" name="a111" value="111X" /> <em>Yes:</em><input type="radio" name="a111" value="111Y" /> <em>No:</em><input type="radio" checked="checked" name="a111" value="111N" /> <label for="111" property="schema:text"><code class="language-turtle">foaf:knows</code></label></div>
				<div class="answer" id="110" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:110">? <input class="nochoice" type="radio" name="a110" value="110X" /> <em>Yes:</em><input type="radio" name="a110" value="110Y" /> <em>No:</em><input type="radio" checked="checked" name="a110" value="110N" /> <label for="110" property="schema:text"><code class="language-turtle">schema:countryOfOrigin</code></label></div>
				<div class="answer" id="109" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:109">? <input class="nochoice" type="radio" name="a109" value="109X" /> <em>Yes:</em><input type="radio" name="a109" value="109Y" /> <em>No:</em><input type="radio" checked="checked" name="a109" value="109N" /> <label for="109" property="schema:text"><code class="language-turtle">schema:GenderType</code></label></div>
				<div class="answer" id="108" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:108">? <input class="nochoice" type="radio" name="a108" value="108X" /> <em>Yes:</em><input type="radio" checked="checked" name="a108" value="108Y" /> <em>No:</em><input type="radio" name="a108" value="108N" /> <label for="108" property="schema:text"><code class="language-turtle">schema:birthDate</code></label></div>
				<div class="answer" id="107" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:107">? <input class="nochoice" type="radio" name="a107" value="107X" /> <em>Yes:</em><input type="radio" checked="checked" name="a107" value="107Y" /> <em>No:</em><input type="radio" name="a107" value="107N" /> <label for="107" property="schema:text"><code class="language-turtle">schema:name</code></label></div>
			</div>
			<div id="37624f8aeb0023a523f9060423c0a38aabed5cf3" about="q3:37624f8aeb0023a523f9060423c0a38aabed5cf3" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>20.</strong> Which of the following JSON-LD contexts should be used to turn this JSON object (you can use the <a href="https://json-ld.org/playground/" target="_blank">JSON-LD playground</a>):</p>
			        	<pre><code class="language-json">{
  "@id": "#me",
  "occupation": [ "computer scientist", "inventor", "programmer" ]
}</code></pre>
						<p>into this RDF graph:</p>
						<pre><code class="language-turtle">&lt;#me&gt; wdt:P106 wd:Q82594, wd:Q205375, wd:Q5482740 .</code></pre>
      					<p>after JSON-LD expansion?</p>
				<div class="answer" id="99" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:99">? <input class="nochoice" type="radio" name="a99" value="99X" /> <em>Yes:</em><input type="radio" name="a99" value="99Y" /> <em>No:</em><input type="radio" checked="checked" name="a99" value="99N" /> <label for="99" property="schema:text"><pre><code class="language-json">{
  "wd": "http://www.wikidata.org/entity/",
  "wdt": "http://www.wikidata.org/prop/direct/",
  "occupation": "wdt:P106",
  "computer scientist": { "@id": "wd:Q82594" },
  "inventor": { "@id": "wd:Q205375" },
  "programmer": { "@id": "wd:Q5482740" }
}</code></pre></label></div>
				<div class="answer" id="100" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:100">? <input class="nochoice" type="radio" name="a100" value="100X" /> <em>Yes:</em><input type="radio" checked="checked" name="a100" value="100Y" /> <em>No:</em><input type="radio" name="a100" value="100N" /> <label for="100" property="schema:text"><pre><code class="language-json">{
  "wd": "http://www.wikidata.org/entity/",
  "wdt": "http://www.wikidata.org/prop/direct/",
  "occupation": { "@id": "wdt:P106", "@type": "@vocab" },
  "computer scientist": "wd:Q82594",
  "inventor": "wd:Q205375",
  "programmer": "wd:Q5482740"
}</code></pre></label></div>
				<div class="answer" id="101" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:101">? <input class="nochoice" type="radio" name="a101" value="101X" /> <em>Yes:</em><input type="radio" name="a101" value="101Y" /> <em>No:</em><input type="radio" checked="checked" name="a101" value="101N" /> <label for="101" property="schema:text"><pre><code class="language-json">{
  "wd": "http://www.wikidata.org/entity/",
  "wdt": "http://www.wikidata.org/prop/direct/",
  "occupation": { "@id": "wdt:P106", "@container": "@list" },
  "computer scientist": { "@id": "wd:Q82594" },
  "inventor": { "@id": "wd:Q205375" },
  "programmer": { "@id": "wd:Q5482740" }
}</code></pre></label></div>
			</div>
			<div id="0db3f75ff6aeff1dcc66bbdae9b63346176aedc8" about="q3:0db3f75ff6aeff1dcc66bbdae9b63346176aedc8" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>21.</strong> Which of the following HTML pages are annotated with machine-readable statements?</p>
				<div class="answer" id="102" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:102">? <input class="nochoice" type="radio" name="a102" value="102X" /> <em>Yes:</em><input type="radio" checked="checked" name="a102" value="102Y" /> <em>No:</em><input type="radio" name="a102" value="102N" /> <label for="102" property="schema:text">A <a href="https://www.lefigaro.fr/langue-francaise/actu-des-mots/2018/07/14/37002-20180714ARTFIG00013-la-surprenante-histoire-de-la-marseillaise.php" target="_blank">news article published in 2018 in Le Figaro</a> about La Marseillaise.</label></div>
				<div class="answer" id="103" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:103">? <input class="nochoice" type="radio" name="a103" value="103X" /> <em>Yes:</em><input type="radio" checked="checked" name="a103" value="103Y" /> <em>No:</em><input type="radio" name="a103" value="103N" /> <label for="103" property="schema:text">A <a href="https://www.rottentomatoes.com/m/la_marseillaise" target="_blank">Rotten Tomatoes page</a> about the 1938 movie La Marseillaise.</label></div>
				<div class="answer" id="106" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:106">? <input class="nochoice" type="radio" name="a106" value="106X" /> <em>Yes:</em><input type="radio" name="a106" value="106Y" /> <em>No:</em><input type="radio" checked="checked" name="a106" value="106N" /> <label for="106" property="schema:text">A <a href="https://www2.assemblee-nationale.fr/decouvrir-l-assemblee/histoire/dossier-historique-la-marseillaise/les-paroles-de-la-marseillaise" target="_blank">page on the French house of representatives' website</a> with a transcript of La Marseillaise.</label></div>
				<div class="answer" id="104" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:104">? <input class="nochoice" type="radio" name="a104" value="104X" /> <em>Yes:</em><input type="radio" checked="checked" name="a104" value="104Y" /> <em>No:</em><input type="radio" name="a104" value="104N" /> <label for="104" property="schema:text">A <a href="https://www.youtube.com/watch?v=pe9_ue_amUg" target="_blank">YouTube video posted by Chorale de Saint-Cyr</a> featuring a recording of the French national anthem.</label></div>
				<div class="answer" id="105" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:105">? <input class="nochoice" type="radio" name="a105" value="105X" /> <em>Yes:</em><input type="radio" checked="checked" name="a105" value="105Y" /> <em>No:</em><input type="radio" name="a105" value="105N" /> <label for="105" property="schema:text">An <a href="https://www.ebay.fr/itm/304090094620?hash=item46cd2e9c1c:g:PvkAAOSwOydhB~co" target="_blank">Ebay offer</a> for an old transcript of the French national anthem.</label></div>
			</div>
			<div id="179e21d49e25021cbe3e91c26f398ecdb665b07c" about="q3:179e21d49e25021cbe3e91c26f398ecdb665b07c" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>22.</strong> Which of the following JSON-LD contexts should be used to turn this JSON object (you can use the <a href="https://json-ld.org/playground/" target="_blank">JSON-LD playground</a>):</p>
			        	<pre><code class="language-json">{
  "@id": "#me",
  "@type": "Person",
  "name": "Tim Berners-Lee",
  "birthDate": "1955-06-08"
}</code></pre>
						<p>into this RDF graph:</p>
						<pre><code class="language-turtle">&lt;#me&gt; a schema:Person;
      schema:name "Tim Berners-Lee";
      schema:birthDate "1955-06-08"^^xsd:date .</code></pre>
      					<p>after JSON-LD expansion?</p>
				<div class="answer" id="98" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:98">? <input class="nochoice" type="radio" name="a98" value="98X" /> <em>Yes:</em><input type="radio" name="a98" value="98Y" /> <em>No:</em><input type="radio" checked="checked" name="a98" value="98N" /> <label for="98" property="schema:text"><pre><code class="language-json">{
  "@vocab": "http://schema.org/",
  "xsd": "http://www.w3.org/2001/XMLSchema#",
  "name": { "@type": "@id" },
  "birthDate": { "@type": "@id" }
}</code></pre></label></div>
				<div class="answer" id="97" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:97">? <input class="nochoice" type="radio" name="a97" value="97X" /> <em>Yes:</em><input type="radio" name="a97" value="97Y" /> <em>No:</em><input type="radio" checked="checked" name="a97" value="97N" /> <label for="97" property="schema:text"><pre><code class="language-json">{
  "schema": "http://schema.org/",
  "xsd": "http://www.w3.org/2001/XMLSchema#",
  "name": { "@id": "schema:name" },
  "birthDate": { "@id": "schema:birthDate" }
}</code></pre></label></div>
				<div class="answer" id="96" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:96">? <input class="nochoice" type="radio" name="a96" value="96X" /> <em>Yes:</em><input type="radio" checked="checked" name="a96" value="96Y" /> <em>No:</em><input type="radio" name="a96" value="96N" /> <label for="96" property="schema:text"><pre><code class="language-json">{
  "@vocab": "http://schema.org/",
  "xsd": "http://www.w3.org/2001/XMLSchema#",
  "birthDate": { "@type": "xsd:date" }
}</code></pre></label></div>
			</div>
			<div id="05dec949a9a86031525204ccf0e483829147666a" about="q3:05dec949a9a86031525204ccf0e483829147666a" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>23.</strong> Which of the following statements are true about OWL reasoners?</p>
				<div class="answer" id="120" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:120">? <input class="nochoice" type="radio" name="a120" value="120X" /> <em>Yes:</em><input type="radio" name="a120" value="120Y" /> <em>No:</em><input type="radio" checked="checked" name="a120" value="120N" /> <label for="120" property="schema:text">An OWL reasoner selects the axioms of an ontology that better model the domain.</label></div>
				<div class="answer" id="121" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:121">? <input class="nochoice" type="radio" name="a121" value="121X" /> <em>Yes:</em><input type="radio" name="a121" value="121Y" /> <em>No:</em><input type="radio" checked="checked" name="a121" value="121N" /> <label for="121" property="schema:text">An OWL reasoner cannot do anything if the ontology is inconsistent.</label></div>
				<div class="answer" id="118" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:118">? <input class="nochoice" type="radio" name="a118" value="118X" /> <em>Yes:</em><input type="radio" name="a118" value="118Y" /> <em>No:</em><input type="radio" checked="checked" name="a118" value="118N" /> <label for="118" property="schema:text">An OWL reasoner can extend the vocabulary of an ontology.</label></div>
				<div class="answer" id="117" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:117">? <input class="nochoice" type="radio" name="a117" value="117X" /> <em>Yes:</em><input type="radio" checked="checked" name="a117" value="117Y" /> <em>No:</em><input type="radio" name="a117" value="117N" /> <label for="117" property="schema:text">An OWL reasoner can check the consistency of an ontology</label></div>
				<div class="answer" id="119" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:119">? <input class="nochoice" type="radio" name="a119" value="119X" /> <em>Yes:</em><input type="radio" checked="checked" name="a119" value="119Y" /> <em>No:</em><input type="radio" name="a119" value="119N" /> <label for="119" property="schema:text">An OWL reasoner uses the axioms of an ontology to deduce other OWL axioms.</label></div>
			</div>
			<div id="17678034b870f27f7f49d9673c1c6d0d1ac0a933" about="q3:17678034b870f27f7f49d9673c1c6d0d1ac0a933" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>24.</strong> Which of the following statements about the triple <code style="display:inline-block" class="language-turtle">ex:Earth ex:hasSatelite ex:Moon</code> is/are true?</p>
				<div class="answer" id="128" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:128">? <input class="nochoice" type="radio" name="a128" value="128X" /> <em>Yes:</em><input type="radio" name="a128" value="128Y" /> <em>No:</em><input type="radio" checked="checked" name="a128" value="128N" /> <label for="128" property="schema:text"><code class="language-turtle">ex:hasSatelite</code> should be a <code>DatatypeProperty</code>.</label></div>
				<div class="answer" id="130" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:130">? <input class="nochoice" type="radio" name="a130" value="130X" /> <em>Yes:</em><input type="radio" name="a130" value="130Y" /> <em>No:</em><input type="radio" checked="checked" name="a130" value="130N" /> <label for="130" property="schema:text">If <code class="language-turtle">ex:hasSatelite</code> is defined as a <code>FunctionalProperty</code>, then we can deduce <code style="display:inline-block" class="language-turtle">ex:Moon ex:sateliteOf ex:Earth</code>.</label></div>
				<div class="answer" id="129" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:129">? <input class="nochoice" type="radio" name="a129" value="129X" /> <em>Yes:</em><input type="radio" checked="checked" name="a129" value="129Y" /> <em>No:</em><input type="radio" name="a129" value="129N" /> <label for="129" property="schema:text">If <code class="language-turtle">ex:sateliteOf</code> is defined as the inverse of the property <code class="language-turtle">ex:hasSatelite</code>, then we can deduce <code style="display:inline-block" class="language-turtle">ex:Moon ex:sateliteOf ex:Earth</code>.</label></div>
				<div class="answer" id="127" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:127">? <input class="nochoice" type="radio" name="a127" value="127X" /> <em>Yes:</em><input type="radio" checked="checked" name="a127" value="127Y" /> <em>No:</em><input type="radio" name="a127" value="127N" /> <label for="127" property="schema:text"><code class="language-turtle">ex:hasSatelite</code> should be an <code>ObjectProperty</code>.</label></div>
				<div class="answer" id="131" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:131">? <input class="nochoice" type="radio" name="a131" value="131X" /> <em>Yes:</em><input type="radio" name="a131" value="131Y" /> <em>No:</em><input type="radio" checked="checked" name="a131" value="131N" /> <label for="131" property="schema:text">If <code class="language-turtle">ex:hasSatelite</code> is defined as a <code>ReflexiveProperty</code>, then the statement is logically inconsistent.</label></div>
			</div>
			<div id="e44469e8b6ebc8f6487f6ce377cf35f02af24e43" about="q3:e44469e8b6ebc8f6487f6ce377cf35f02af24e43" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>25.</strong> How can we express that all Yellow Suns are Stars when developing an ontology in OWL?</p>
				<div class="answer" id="126" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:126">? <input class="nochoice" type="radio" name="a126" value="126X" /> <em>Yes:</em><input type="radio" name="a126" value="126Y" /> <em>No:</em><input type="radio" checked="checked" name="a126" value="126N" /> <label for="126" property="schema:text">Using disjoint classes.</label></div>
				<div class="answer" id="124" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:124">? <input class="nochoice" type="radio" name="a124" value="124X" /> <em>Yes:</em><input type="radio" name="a124" value="124Y" /> <em>No:</em><input type="radio" checked="checked" name="a124" value="124N" /> <label for="124" property="schema:text">It cannot be expressed in OWL.</label></div>
				<div class="answer" id="123" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:123">? <input class="nochoice" type="radio" name="a123" value="123X" /> <em>Yes:</em><input type="radio" name="a123" value="123Y" /> <em>No:</em><input type="radio" checked="checked" name="a123" value="123N" /> <label for="123" property="schema:text">Using properties and a subproperty relation.</label></div>
				<div class="answer" id="125" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:125">? <input class="nochoice" type="radio" name="a125" value="125X" /> <em>Yes:</em><input type="radio" name="a125" value="125Y" /> <em>No:</em><input type="radio" checked="checked" name="a125" value="125N" /> <label for="125" property="schema:text">Using an instance and a class related with <code class="language-turtle">rdf:type</code>.</label></div>
				<div class="answer" id="122" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:122">? <input class="nochoice" type="radio" name="a122" value="122X" /> <em>Yes:</em><input type="radio" checked="checked" name="a122" value="122Y" /> <em>No:</em><input type="radio" name="a122" value="122N" /> <label for="122" property="schema:text">Using classes and a subclass relation.</label></div>
			</div>
			<div id="92ab6b469826d3db36f371f581ecf9ef90646c0d" about="q3:92ab6b469826d3db36f371f581ecf9ef90646c0d" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>26.</strong> Which of the following statements about the triple <code style="display:inline-block" class="language-turtle">ex:Planet ex:mass "5.97237E24"^^xsd:float</code> is/are true?</p>
				<div class="answer" id="133" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:133">? <input class="nochoice" type="radio" name="a133" value="133X" /> <em>Yes:</em><input type="radio" checked="checked" name="a133" value="133Y" /> <em>No:</em><input type="radio" name="a133" value="133N" /> <label for="133" property="schema:text"><code class="language-turtle">ex:mass</code> should be a <code>DatatypeProperty </code>.</label></div>
				<div class="answer" id="132" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:132">? <input class="nochoice" type="radio" name="a132" value="132X" /> <em>Yes:</em><input type="radio" name="a132" value="132Y" /> <em>No:</em><input type="radio" checked="checked" name="a132" value="132N" /> <label for="132" property="schema:text"><code class="language-turtle">ex:mass</code> should be an <code>ObjectProperty</code>.</label></div>
				<div class="answer" id="134" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:134">? <input class="nochoice" type="radio" name="a134" value="134X" /> <em>Yes:</em><input type="radio" checked="checked" name="a134" value="134Y" /> <em>No:</em><input type="radio" name="a134" value="134N" /> <label for="134" property="schema:text">If <code class="language-turtle">ex:mass</code> is defined as equivalent to <code class="language-turtle">ex:weight</code>, then <code style="display:inline-block" class="language-turtle">ex:Earth ex:weight "5.97237E24"^^xsd:float</code> can be deduced.</label></div>
				<div class="answer" id="135" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:135">? <input class="nochoice" type="radio" name="a135" value="135X" /> <em>Yes:</em><input type="radio" checked="checked" name="a135" value="135Y" /> <em>No:</em><input type="radio" name="a135" value="135N" /> <label for="135" property="schema:text">If, in addition to the triple in the question, we have <code style="display:inline-block" class="language-turtle">ex:Planet ex:mass "5.9E24"^^xsd:float</code> and <code class="language-turtle">ex:mass</code> is defined as a <code>FunctionalProperty</code>, then there is a contradiction.</label></div>
			</div>
			<div id="cb7aa2d99e13ac2f526a10ea8937ac6d0d15f838" about="q3:cb7aa2d99e13ac2f526a10ea8937ac6d0d15f838" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>27.</strong> Which of the following statements about OWL is correct?</p>
				<div class="answer" id="113" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:113">? <input class="nochoice" type="radio" name="a113" value="113X" /> <em>Yes:</em><input type="radio" name="a113" value="113Y" /> <em>No:</em><input type="radio" checked="checked" name="a113" value="113N" /> <label for="113" property="schema:text"><code class="language-turtle">owl:Nothing</code> represents the set of all individuals.</label></div>
				<div class="answer" id="115" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:115">? <input class="nochoice" type="radio" name="a115" value="115X" /> <em>Yes:</em><input type="radio" checked="checked" name="a115" value="115Y" /> <em>No:</em><input type="radio" name="a115" value="115N" /> <label for="115" property="schema:text">An individual that is an instance of a class is also an instance of its superclasses.</label></div>
				<div class="answer" id="116" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:116">? <input class="nochoice" type="radio" name="a116" value="116X" /> <em>Yes:</em><input type="radio" name="a116" value="116Y" /> <em>No:</em><input type="radio" checked="checked" name="a116" value="116N" /> <label for="116" property="schema:text">If two classes are disjoint, then all individuals must belong to either one, or the other class.</label></div>
				<div class="answer" id="112" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:112">? <input class="nochoice" type="radio" name="a112" value="112X" /> <em>Yes:</em><input type="radio" checked="checked" name="a112" value="112Y" /> <em>No:</em><input type="radio" name="a112" value="112N" /> <label for="112" property="schema:text"><code class="language-turtle">owl:Thing</code> represents the set of all individuals.</label></div>
				<div class="answer" id="114" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:114">? <input class="nochoice" type="radio" name="a114" value="114X" /> <em>Yes:</em><input type="radio" checked="checked" name="a114" value="114Y" /> <em>No:</em><input type="radio" name="a114" value="114N" /> <label for="114" property="schema:text"><code class="language-turtle">owl:Nothing</code> is subclass of <code>owl:Thing</code>.</label></div>
			</div>
			<div id="35640906cca5c0180032082c46d677d6cd1dec3a" about="q3:35640906cca5c0180032082c46d677d6cd1dec3a" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>28.</strong> In Protégé, we can say that the class <code class="language-turtle">ex:Superhero</code> is equivalent to the <b>existential</b> restriction <code style="display:inline-block">ex:secretIdentity some ex:Person</code>. In this case, which of the following statement(s) is/are correct?</p>
				<div class="answer" id="137" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:137">? <input class="nochoice" type="radio" name="a137" value="137X" /> <em>Yes:</em><input type="radio" checked="checked" name="a137" value="137Y" /> <em>No:</em><input type="radio" name="a137" value="137N" /> <label for="137" property="schema:text">Every superhero has at least one secret identity.</label></div>
				<div class="answer" id="139" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:139">? <input class="nochoice" type="radio" name="a139" value="139X" /> <em>Yes:</em><input type="radio" name="a139" value="139Y" /> <em>No:</em><input type="radio" checked="checked" name="a139" value="139N" /> <label for="139" property="schema:text">It is not mandatory that a superhero has a secret identity, but if it has one, it needs to be a person.</label></div>
				<div class="answer" id="136" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:136">? <input class="nochoice" type="radio" name="a136" value="136X" /> <em>Yes:</em><input type="radio" name="a136" value="136Y" /> <em>No:</em><input type="radio" checked="checked" name="a136" value="136N" /> <label for="136" property="schema:text">Every superhero has exactly one secret identity.</label></div>
				<div class="answer" id="138" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:138">? <input class="nochoice" type="radio" name="a138" value="138X" /> <em>Yes:</em><input type="radio" name="a138" value="138Y" /> <em>No:</em><input type="radio" checked="checked" name="a138" value="138N" /> <label for="138" property="schema:text">If someone has a secret identity, they are a superhero.</label></div>
			</div>
			<div id="f4154d6031f7139f30a12168c2dd1e0b75eb867c" about="q3:f4154d6031f7139f30a12168c2dd1e0b75eb867c" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>29.</strong> In Protégé, we can say that the class <code class="language-turtle">ex:Superhero</code> is equivalent to the <b>universal</b> restriction <code style="display:inline-block">ex:secretIdentity only ex:Person</code>. Which of the following statements is/are correct?</p>
				<div class="answer" id="143" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:143">? <input class="nochoice" type="radio" name="a143" value="143X" /> <em>Yes:</em><input type="radio" checked="checked" name="a143" value="143Y" /> <em>No:</em><input type="radio" name="a143" value="143N" /> <label for="143" property="schema:text">It is not mandatory that a superhero has a secret identity, but if it has one, it needs to be a person.</label></div>
				<div class="answer" id="141" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:141">? <input class="nochoice" type="radio" name="a141" value="141X" /> <em>Yes:</em><input type="radio" name="a141" value="141Y" /> <em>No:</em><input type="radio" checked="checked" name="a141" value="141N" /> <label for="141" property="schema:text">Every superhero has at least one secret identity.</label></div>
				<div class="answer" id="140" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:140">? <input class="nochoice" type="radio" name="a140" value="140X" /> <em>Yes:</em><input type="radio" name="a140" value="140Y" /> <em>No:</em><input type="radio" checked="checked" name="a140" value="140N" /> <label for="140" property="schema:text">Every superhero has exactly one secret identity.</label></div>
				<div class="answer" id="142" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:142">? <input class="nochoice" type="radio" name="a142" value="142X" /> <em>Yes:</em><input type="radio" name="a142" value="142Y" /> <em>No:</em><input type="radio" checked="checked" name="a142" value="142N" /> <label for="142" property="schema:text">If someone has a secret identity, they are a superhero.</label></div>
			</div>
			<div id="ee7b7ea18b1434c87bde2c59eca99a35e5fce517" about="q3:ee7b7ea18b1434c87bde2c59eca99a35e5fce517" typeof="schema:Question" class="q">
				<p property="schema:text"><strong>30.</strong> In Protégé, we can say that the class <code class="language-turtle">ex:Superhero</code> is equivalent to the <b>cardinality</b> restriction <code style="display:inline-block">ex:secretIdentity min 1 ex:Person</code>. What of the following statements is/are correct?</p>
				<div class="answer" id="146" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:146">? <input class="nochoice" type="radio" name="a146" value="146X" /> <em>Yes:</em><input type="radio" name="a146" value="146Y" /> <em>No:</em><input type="radio" checked="checked" name="a146" value="146N" /> <label for="146" property="schema:text">If someone has a secret identity, they are a superhero.</label></div>
				<div class="answer" id="145" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:145">? <input class="nochoice" type="radio" name="a145" value="145X" /> <em>Yes:</em><input type="radio" checked="checked" name="a145" value="145Y" /> <em>No:</em><input type="radio" name="a145" value="145N" /> <label for="145" property="schema:text">Every superhero has at least one secret identity.</label></div>
				<div class="answer" id="147" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:147">? <input class="nochoice" type="radio" name="a147" value="147X" /> <em>Yes:</em><input type="radio" name="a147" value="147Y" /> <em>No:</em><input type="radio" checked="checked" name="a147" value="147N" /> <label for="147" property="schema:text">It is not mandatory that a superhero has a secret identity, but if it has one, it needs to be a person.</label></div>
				<div class="answer" id="144" typeof="schema:Answer" rel="schema:suggestedAnswer" resource="q3:144">? <input class="nochoice" type="radio" name="a144" value="144X" /> <em>Yes:</em><input type="radio" name="a144" value="144Y" /> <em>No:</em><input type="radio" checked="checked" name="a144" value="144N" /> <label for="144" property="schema:text">Every superhero has exactly one secret identity.</label></div>
			</div>
		</form>
		</body>
</html>
`
