dict = {};
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
    emt.attr("style", emt.attr("style") + "font-size:18px;color:#CCC;");
    i = setInterval(function () {
        dict[typertext] = i;
        if (charPos >= typertext.length) {
            if (aftertext === null) {
                aftertext = typertext;
            }
            //setTimeout(() => {
                emt.html(aftertext);
                emt.attr(
                    "style",
                    emt.attr("style").substring(0, emt.attr("style").length - 26)
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
    }, speed);
}
counter = 4;
async function init() {
    $("#main").css("opacity", "1")
    for (let x = 0; x < $("#main > section *").length; x++) {
        el = $($("#main > section *")[x]);
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

setTimeout(() => {
    $("#cursor").attr("src", "https://lmddgtfy.net/img/cursor-pointer.png")
    setTimeout(() => {
        $("#cursor").css("top", "13px")
        $("#cursor").css("left", "calc(100vw - 92px)")
        setTimeout(() => {
            $("#cursor").css("top", "10px")
            $("#cursor").css("left", "calc(100vw - 95px)")
            setTimeout(() => {
                $("#cursor").remove()
            }, 200);
            init()
        }, 100);
    }, 500);
}, 1500);

async function o(filename){
    data = await fetch(filename)
    data = data.text()
    //$("main").html(mainpage[0])
    //$("main").append(`<style>${mainpage[1]}</style>`)
    console.log(data)
}

const mainpage = [
    `			<section style="text-align: center">
    <h1
        style="margin-top: 17vh;"
        data-code="webpage.print('{Hi, I'm Andrew!}', template=big_h1)"
    >
        {Hi, I'm Andrew!}
    </h1>
    <hr style="width: 200px;" />
    <h2 data-code="webpage.print('Self-learning coder', template=h2)">
        Self-learning coder
    </h2>

    <section>
        <a
            href="https://artofproblemsolving.com/community/user/andrewc10"
            target="_blank"
            data-code="webpage.linkto('My AoPS Profile')"
        >
            <img
                class="icon"
                onmouseover="findmeon('AoPS', '@AndrewC10')"
                src="https://artofproblemsolving.com/online-favicon.ico"
                alt="AoPS icon"
            />
        </a>
        <a
            href="https://replit.com/@AndrewChen51/"
            target="_blank"
            data-code="webpage.linkto('My Replit Profile')"
        >
            <img
                class="icon"
                onmouseover="findmeon('Replit', '@AndrewChen51')"
                src="https://replit.com/public/icons/favicon-196.png"
                alt="replit icon"
            />
        </a>
        <a
            href="https://github.com/actiniumn404/"
            target="_blank"
            data-code="webpage.linkto('My Github Profile')"
        >
            <img
                class="icon"
                style="filter: invert(1)"
                onmouseover="findmeon('Github', '@actiniumn404')"
                src="https://github.githubassets.com/favicons/favicon.svg"
                alt="github icon"
            />
        </a>
        <a
            href="https://discordapp.com/users/728297793646624819"
            target="_blank"
            data-code="webpage.linkto('My Discord Profile')"
        >
            <img
                class="icon"
                onmouseover="findmeon('Discord', '#728297793646624819')"
                src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
                alt="discord icon"
                height="32px"
            />
        </a>
        <a
            href="https://stackoverflow.com/users/15947148/actinium404"
            target="_blank"
            data-code="webpage.linkto('My stackoverflow Profile')"
        >
            <img
                class="icon"
                onmouseover="findmeon('Stack Overflow', '@actinium404')"
                src="https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196"
                alt="Stack Overflow icon"
            />
        </a>
        <div id="findmeon">
            <span
                style="font-size: 18px;"
                data-code="webpage.print('Find me on % {}', white, yellow)"
                >Find me on
                <span id="sitename" style="color: yellow;"
                    >{Hover over one of the above!}</span
                >:</span
            >
            <h2
                id="username"
                style="
                    color: yellow;
                    font-size: 24px;
                    overflow: auto;
                    overflow-y: hidden;
                "
                data-code="webpage.print('', template=uname, id=uname)"
            ></h2>
        </div>
    </section>
</section>`,
`			
#main h1 {
    color: #04a0ae;
    font-size: 72px;
}
#main h2 {
    color: orange;
    font-size: 36px;
}
#main * {
    transition: 1s font-size ease, 1s color ease;
}

.icon {
    width: 32px;
    height: 32px;
}
.icon:hover {
    opacity: 0.8;
}`
]

switch (location.pathname){
    case "/":
        $("main").html(mainpage[0])
        $("main").append(`<style>${mainpage[1]}</style>`)
        break

}