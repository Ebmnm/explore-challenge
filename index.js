const span = document.querySelector("span")
const popup = document.querySelector("section")
const exit = document.querySelector("h3")

span.addEventListener("click", () => {
    popup.classList.remove("close")
    popup.classList.add("active")
    popup.classList.remove("hide")
})

exit.addEventListener("click", () => {
    popup.classList.remove("active")
    popup.classList.add("close")
    setTimeout(() => {popup.classList.add("hide") }, 1000)
})