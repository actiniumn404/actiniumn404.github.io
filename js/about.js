skillset = [
	{
		"name":"Python",
		"image_url":"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/python.svg",
		"description":"Since Python was the first programming language I have ever learned, I am very good at it. I use python to make games, to process data, and to code programs for programming problems.",
	},
	{
		"name":"JavaScript",
		"image_url":"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/javascript.svg",
		"description":"",
	},
	{
		"name":"HTML",
		"image_url":"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/html.svg",
		"description":"",
	},
	{
		"name":"CSS",
		"image_url":"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/css.svg",
		"description":"",
	},
	{
		"name":"LaTeX",
		"image_url":"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/tex.svg",
		"description":"",
	},
	{
		"name":"NodeJS",
		"image_url":"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/nodejs.svg",
		"description":"",
	},
	{
		"name":"Socket.io",
		"image_url":"https://socket.io/images/logo-dark.svg",
		"description":"",
	},
	{
		"name":"jQuery",
		"image_url":"https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg",
		"description":"",
	},
	{
		"name":"Flask",
		"image_url":"https://replit.com/cdn-cgi/image/width=2048,quality=80/https://storage.googleapis.com/replit/images/1638396182851_ab511d3ca9a79d5a9cb9a2b620c24841.png",
		"description":"",
		"invert":"yes"
	},
	{
		"name":"ExpressJS",
		"image_url":"https://expressjs.com/images/express-facebook-share.png",
		"description":""
	},
	{
		"name":"Git",
		"image_url":"https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/git.svg",
		"description":""
	},
]

for (skill of skillset){
	document.getElementById("myskills").innerHTML += `
<div class="skill">
	<img width=75 ${skill.invert ? `style="filter: invert(1)"` : ""} src="${skill.image_url}">
	<div>
		<span style="font-size:24px;">${skill.name}</span>
		<br>
		<span>${skill.description}</span>
	</div>
</div>
	`
}