const nav = document.getElementById("nav");
nav.addEventListener("click", function(evt) {
    if (evt.target.tagName == "DIV" || evt.target.tagName == "A") {
        nav.setAttribute("data-nav", (nav.getAttribute("data-nav") === "true") ? false : true)
    }
})


window.addEventListener("scroll", function(evt) {
    nav.setAttribute("data-bg-visible", (window.scrollY || window.pageYOffset) ? true : false)
})

document.querySelector("#menu-overlay > button").addEventListener("click", function() {
    window.open("corsaro menu summer 2025 MASTER.pdf")
})

document.querySelector("#menu-overlay-2 > button").addEventListener("click", function() {
    window.open("menu2.jpg")
})
