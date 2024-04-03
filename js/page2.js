const bookwrap = document.querySelector("#bookwrap");
const book = document.querySelector("#book");

const hideMarkers = () => {
    const markers = document.querySelectorAll(".box");
    markers.forEach(b => b.style.display = "none !important");
}

const showMarkers = () => {
    const markers = document.querySelectorAll(".box");
    markers.forEach(b => b.style.display = "none !important");
}

function showbook() {
    hideMarkers();
    bookwrap.classList.remove("no-display");
    setTimeout(() => {
        book.classList.add("animate");
    }, 500)
}

bookwrap.addEventListener("click", () => {
    showMarkers();
    book.classList.remove("animate");
    bookwrap.classList.add("no-display");
})