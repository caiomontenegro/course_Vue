const button = document.querySelector('button')
const input = document.querySelector('input')
const list = document.querySelector('ul')

button.addEventListener('click', addGoal)

function addGoal() {
    const newGoal = input.value
    const listItem = document.createElement('li')
    listItem.textContent = newGoal
    list.appendChild(listItem)
    input.value = ''
}