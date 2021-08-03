const navbar = `<nav>
<span><a href="/">{Hi I'm Andrew}</a></span>
<div>
    <a class="navbarlink" href="/about" style="left:0;">About</a>
    <a class="navbarlink" href="/portfolio" style="left:25%;">Portfolio</a>
    <a class="navbarlink" href="/contact" style="left:50%;">Contact</a>
    <a class="navbarlink" href="/other" style="left:75%;">Other</a>
</div>
</nav>`

document.body.innerHTML = (navbar + document.body.innerHTML)