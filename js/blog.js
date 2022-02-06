const get_posts = async () =>{
	posts = []
	let post_addresses = await fetch("blog/posts.json")
	post_addresses = await post_addresses.json()
	for (let i = 0;i < post_addresses.length; i++){
		let address = post_addresses[i]
		content = await fetch("blog/"+address)
		content = await content.text()
		content = content.split("\n")
		metadata = content[0].split("||")
		content = marked.parse(content.slice(1).join("\n"))
		posts.push([metadata, content])
		if (i === post_addresses.length - 1){
			write_content()
		}
	}
}

const write_content = () => {
	for (post of posts){
		metadata = post[0]
		content = post[1]
		console.log(content)
		t = new Date(Number(metadata[2]))
		time = (t.getMonth()+1).toString()+"/"+t.getDate()+"/"+t.getFullYear()+" "+t.getHours()+":"+(t.getMinutes() < 10 ? "0" : "")+t.getMinutes()
		document.getElementById("blog_cont").innerHTML += `
<div class="blog_post">
	<h1 class="bold">${metadata[0]}</h1>
	<h2>By ${metadata[1]}, at ${time}</h2>
	<div class="blog_post_content">
		${content}
	</div>
</div>
		`
	}
	document.querySelector(".spinnercont").remove()
}

get_posts()