function typetitle(
  emt,
  typertext,
  aftertext,
  id,
  total,
  speed = 50,
  charPos = 0
) {
  console.log(id)
  if (!emt.attr("style")) {
    emt.attr("style", "");
  }
  emt.html(" ");
  let stylesheet = "font-size:18px;font-family:monospace;color:gray !important;transition: 1s ease;"
  emt.attr("style", emt.attr("style") + stylesheet);
  i = setInterval(function() {
    if (charPos >= typertext.length) {
      if (aftertext === null) {
        aftertext = typertext;
      }
      //setTimeout(() => {
      emt.html(aftertext);
      emt.attr(
        "style",
        emt.attr("style").substring(0, emt.attr("style").length - stylesheet.length)
      );
      //}, 500);
      clearInterval(id);
      if (id === 0) {
        clearInterval(1);
      }
      //clearInterval(dict[typertext])
      return 0;
    }
    emt.append(typertext[charPos]);
    charPos++;
  }, parseInt($("#typewriterDuration").val()) / typertext.length);
}
async function init() {
  $("#main").css("opacity", "1")
	if (anime){
		for (let x = 0; x < $("#main *").length; x++) {
			el = $($("#main *")[x]);
			if (el.data("code") !== undefined) {
				counter += 1;
				console.log(counter)
				typetitle(
					el,
					el.data("code"),
					el.html(),
					counter,
					$("#main > section > *").length
				);
			}
		}
	}
}

function cursormove() {
	if (anime){
		counter = 5
		setTimeout(() => {
			$("#cursor").attr("src", "/images/cursor_pointer.png")
			$("#cursor").attr("width", "22px")
			setTimeout(() => {
				$("#runcode").css("filter", "brightness(0.8)")
				setTimeout(() => {
					$("#runcode").css("filter", "")
					setTimeout(() => {
						$("#cursor").remove()
						$("#navfiles").trigger("click")
					}, 500);
					init()
				}, 200);
			}, 500);
		}, 1500);
	}else{
		counter = 0
		$("#cursor").remove()
	}
}

async function o(filename) {
  //$("main").html("<h1 style='text-align:center'>Loading data, please wait</h1>")
	window.location.hash = filename
  $(".file.active").removeClass("active")

  document.querySelectorAll(".file").forEach(e => {
    if ($($(e).children()[1]).html() === filename) {
      $(e).addClass("active")
    }
  })

  let d = await fetch("pages/" + filename)
  d = await d.text()
  let hcode = /<main>(.*)<\/main>/ims
  let style = /<style>(.*)<\/style>/ims
  let script = /<script>(.*)<\/script>/ims

  hcode = hcode.exec(d)[1]

  if (style.exec(d) !== null) {
    style = style.exec(d)[1]
  } else {
    style = ""
  }

  if (script.exec(d) !== null) {
    script = script.exec(d)[1]
  } else {
    script = ""
  }

  $("main").html(hcode)
  $("#ccss").html(style)
  $("#ccss").html(style)

  if (notfirst) {
    init()
  } else {
    notfirst = true
  }
}

let notfirst = false
let anime = true
if (getCookie("__animation") === ""){
	document.cookie = "__animation=true; expires=31 Dec 3000 12:00:00 UTC; path=/";
}
if (getCookie("__animation") === "true"){
	anime = true
}if (getCookie("__animation") === "false"){
	$("#main").css("opacity", "1")
	$("#navfiles").trigger("click")
	anime = false
}
$("#animationChoice").prop("checked", anime)
changedp()

cursormove()
if (location.hash === ""){
  location.hash = "homepage.html"
}
o(location.hash.substring(1))

$(".file").click(e => {
  x = $(e.target)
  if (!x.hasClass("file")) {
    x = $(x.parent())
  }
  o($(x.children()[1]).html())
})

function opennav(id, item){
	$(".navbarbutton").removeClass("active")
	$(item).addClass("active")
	$("nav > div > div").css("display", "none")
	$("#"+id).css("display", "block")
}
// w3schools is awesome
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function changedp(){
	if ($("#animationChoice").prop("checked")){
		anime = true
		$("#runlog > div").css("opacity", "1")
		$("#runlog > div").css("pointer-events", "auto")
		document.cookie = "__animation=true; expires=31 Dec 3000 12:00:00 UTC; path=/";
	}else{
		anime = false
		$("#runlog > div").css("opacity", "0.3")
		$("#runlog > div").css("pointer-events", "none")
		document.cookie = "__animation=false; expires=31 Dec 3000 12:00:00 UTC; path=/";
	}
}