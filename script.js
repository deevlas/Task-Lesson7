// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let textId = document.getElementById('myId')

// textId.onclick = () => {
//     textId.style.display = "none"
// }


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.getElementById("myButton")

// button.onclick = () => {
//     button.style.display = "none"
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let buttonInp = document.querySelectorAll(`input`)[0]
// let butOk = document.querySelectorAll(`input`)[1]

// butOk.onclick = () => {
//     let input = +(buttonInp.value);
//     let object = {
//         textInput: input
//     }
//     console.log(object)
//     if (buttonInp.value < 18) {
//         alert("go at home")
//     } else {
//         console.log("U a Nomber 1")
//     }
//     buttonInp.value = ""
// }

// // - Создайте меню, которое раскрывается/сворачивается при клике


// let mainMenuElement = document.querySelector('.main-menu');
// let menuElement = mainMenuElement.querySelector('.menu');


// mainMenuElement.onclick = function () {
//     menuElement.classList.toggle("item")

// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.


let lists = [{
    titleOne: "Это название страницы",
    body: "Это тело страницы"
}, {
    titleTwo: "Это название страницы",
    body: "Это тело страницы"
}, {
    titleThree: "Это название страницы",
    body: "Это тело страницы"
}, {
    titleFour: "Это название страницы",
    body: "Это тело страницы"
}]

let blockDiv = document.createElement('div')
document.body.appendChild(blockDiv)
blockDiv.setAttribute('id', 'titles')

for (const list of lists) {
    let blockList = document.createElement('div')
    let listH2 = document.createElement('h2')
    let secondListDiv = document.createElement('div')
    let button = document.createElement('button')

    listH2.innerHTML = `${Object.keys(list)[0]}`
    secondListDiv.innerHTML = `${list.body}`
    button.classList.add('btn')
    button.innerHTML = "Click me"

    blockDiv.appendChild(blockList)
    blockList.appendChild(listH2)
    blockList.appendChild(secondListDiv)
    blockList.appendChild(button)

    button.addEventListener("click", function () {
        listH2.classList.toggle('item')
        secondListDiv.classList.toggle('item')
    })
}

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let oneForma = document.forms.oneForm
let twoForma = document.forms.twoForm
// добавляю имена двум импутам
let firstInputOneForm = oneForma.firstInputForm
let secondInputOneForm = oneForma.secondInputForm



let button = document.querySelector('button')

button.addEventListener("click", function () {
    for (const input of oneForm) {
        console.log(input.value)
    }
})
//функция для очистки поля
firstInputOneForm.addEventListener("click", function () {
    firstInputOneForm.value = ""
})
secondInputOneForm.addEventListener("click", function () {
    secondInputOneForm.value = ""
})

// тоже самое для второй формы
let firstInputTwoForm = twoForma.inputTwoForm
let secondInputTwoForm = twoForma.inputSecondTwoForm

button.addEventListener("click", function () {
    for (const input of twoForm) {
        console.log(input.value)
    }
})

firstInputTwoForm.addEventListener("click", function () {
    firstInputTwoForm.value = ""
})

secondInputTwoForm.addEventListener("click", function () {
    secondInputTwoForm.value = ""
})


// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let ourTable = document.querySelector('#ourTable')
let tableForm = document.forms.tableForm
console.log(tableForm)

function createTable(colums, rows, elementDiv, text = "text") {
    let table = document.createElement('table')

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < colums; j++) {
            let td = document.createElement('td')
            td.innerText = text
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    elementDiv.appendChild(table)

}
console.log(ourTable)
// createTable(tableForm.colsTable.value, tableForm.rowsTable.value, ourForm, tableForm.textInRows.value)

let buttonTable = document.querySelector("#buttonTable")


buttonTable.addEventListener("click", function () {
    createTable(tableForm.colsTable.value, tableForm.rowsTable.value, ourTable, tableForm.textInRows.value)
})

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let btnBack = document.querySelector('#carusel .buttons .buttonOne')
let btnForward = document.querySelector('#carusel .buttons .buttonTwo')
let pictures = document.querySelectorAll('#carusel .pictures img')

let i = 0
btnBack.onclick = function () {
    pictures[i].style.display = "none"
    i--;
    if (i < 0) {
        i = pictures.length - 1
    }
    pictures[i].style.display = "block"
}

btnForward.onclick = function () {
    pictures[i].style.display = "none"
    i++;
    if (i >= pictures.length) {
        i = 0
    }
    pictures[i].style.display = "block"
}

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку


let arrBadWords = ["fuck", "stupit", "bullshit", "fuckYou"]

let badWords = document.querySelector(".checkWords input")
let btnCheck = document.querySelector('.checkWords .btnCheck')

btnCheck.addEventListener('click', function () {

    for (const word of arrBadWords) {
        if (word === badWords.value.toLowerCase()) {
            alert("Вы использовали плохое слово")
        }
    }
})

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let secondArrayBadWords = ["fuck", "stupit", "bullshit", "fuckYou"]

let badWordsInSentence = document.querySelector(".checkWordsSentence input")
let btnCheckInSentence = document.querySelector('.checkWordsSentence .btnCheck')

btnCheckInSentence.addEventListener('click', function () {
    for (const word of secondArrayBadWords) {
        let newArr = badWordsInSentence.value.split(" ")
        for (const val of newArr) {
            if (word === val) {
                alert("Its bed word!!!")
            }
        }
    }
})


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте





// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ