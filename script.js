let ourForm = document.getElementById("ourForm")
let ourInput = document.getElementById("ourInput")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    CreateItem(ourInput.value)
})

function CreateItem(params) {
    let template = `<li>${params} <button onclick="deleteItem(this)">Delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", template)
    ourInput.value = ""
    ourInput.focus()

}
function deleteItem(params) {
    params.parentElement.remove()
}