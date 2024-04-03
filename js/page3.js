const memewrap = document.querySelector("#memeswrap");
const memes = document.querySelectorAll("#memeswrap img");
const title = document.querySelector(".title");
const body = document.querySelector("body");

const hideMarkers = () => {
    const markers = document.querySelectorAll(".box");
    markers.forEach(b => b.style.display = "none !important");
}

const showMarkers = () => {
    const markers = document.querySelectorAll(".box");
    markers.forEach(b => b.style.display = "none !important");
}



const names = [
    "POPCATTUBE",
    "PEPETUBE",
    "DOGTIF",
    "SLERF",
    "TREMP"
]


function shake() {
    body.classList.add("shake");
    setTimeout(() => body.classList.remove("shake"), 1000)
}


function showmeme(index) {
    hideMarkers();
    title.innerText = names[index];
    title.style.opacity = "1";
    memewrap.classList.remove("no-display");
    setTimeout(() => {
        memes[index].classList.add("animate");
    }, 500)
}

memewrap.addEventListener("click", () => {
    title.innerText = "";
    title.style.opacity = "0";
    memes.forEach(m => m.classList.remove("animate"));
    memewrap.classList.add("no-display");
    showMarkers();
})