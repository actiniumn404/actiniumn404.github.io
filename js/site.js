navbar = `
<nav id="navbar">
	<a href="/" style="color:rgb(235, 199, 0);">Actinium404</a>
	<a href="/about.html">About Me</a>
	<a href="/projects.html">Projects</a>
	<a href="/blog.html">Blog</a>
	<a href="/contact.html">Contact</a>
</nav>
`
document.body.innerHTML += navbar

projects = {
	"Annoyingly Uncodeable Language":{
		"img":"https://raw.githubusercontent.com/actiniumn404/Annoyingly-Uncodeable-Language/main/assets/aul_logo.jpg",
		"about":"The Annoyingly Uncodeable Language Project (AUL or TAULP) is a programming language that prioritizes annoying people over efficiency.",
		"url":"javascript:void(0)",
		"source":"https://github.com/actiniumn404/Annoyingly-Uncodeable-Language"
	},
	"Among You.py":{
		"img":"assets/Among_you.png",
		"about":`Bored at home? What would you do? Me with my friend <a href="https://github.com/wwwthew" target="_blank">wwwthew</a> created a full up python version of Among Us (developed by InnerSloth.)`,
		"url":"javascript:void(0)",
		"source":"https://github.com/actiniumn404/Among-you"
	},
	"Rickroll.html":{
		"img":"assets/Rickroll_html.png",
		"about":`Looking for a good April Fools Prank? Then Rickroll.html is for you. Rickroll.html is a html program that rickrolls you in a suprising way.`,
		"url":"https://rickrollhtml.andrewchen51.repl.co/",
		"source":"https://github.com/actiniumn404/Rickroll"
	},
	"Happy Birthday.html":{
		"img":"assets/Happy_bday.jpeg",
		"about":`Happy Birthday.html is the perfect way to celebrate a birthday of a friend online. With confetti and a message in a gift you open, it is undoubtedly awesome.`,
		"url":"https://happy-birthday.andrewchen51.repl.co/",
		"source":"https://github.com/actiniumn404/Happy-Birthday"
	},
	"Jeopardy Multiplayer":{
		"img":"assets/Jeopardy.jpeg",
		"about":`Jeopardy Multiplayer is a way to play a game of jeopardy without having to get into a meeting and screen sharing. This was a colab with by friend wwwthew.`,
		"url":"https://jeopardy.andrewchen51.repl.co/",
		"source":"https://github.com/actiniumn404/Jeopardy"
	},
	"AMC8 Problem Generator":{
		"img":"assets/AMC8.png",
		"about":`The AMC8 Problem Generator is a colaboration between four people. It automaticly generates past AMC8 problems and gives you two tries to try and find the answer.`,
		"url":"https://amc8.toad39.dev/",
		"source":"https://replit.com/@cubingsoda/AMC-8-Problem-Generator"
	},
	"Todo List":{
		"img":"https://todolist.andrewchen51.repl.co/assets/512.png",
		"about":`A clean, easy to use online todo list and planner`,
		"url":"https://todolist.andrewchen51.repl.co/",
		"source":"https://github.com/DevNotHackerCorporations/Todo-List"
	},
	"Scibowlbot":{
		"img":"assets/sbb.png",
		"about":`The best way to simulate a Science Bowl round on Discord.`,
		"url":"javascript:void(0)",
		"source":"https://github.com/DevNotHackerCorporations/scibowlbot"
	},
	"Gamebot":{
		"img":"https://cdn.discordapp.com/embed/avatars/3.png",
		"about":`The best way to simulate a Science Bowl round on Discord.`,
		"url":"javascript:void(0)",
		"source":"https://github.com/DevNotHackerCorporations/scibowlbot"
	},
	"Atomic Number Cipher & Translator":{
		"img":"assets/sbb.png",
		"about":`A discord bot that plays games with you!`,
		"url":"javascript:void(0)",
		"source":"https://github.com/actiniumn404/Gamebot"
	},
}

function create_project_html(name){
	return `
<div class="project">
	<img src="${projects[name]["img"]}">
	<a href="${projects[name]["url"]}"><h1>${name} (<a href="${projects[name]["source"]}">Source code</a>)</h1></a>
	<p>${projects[name]["about"]}</p>
</div>
	`
}