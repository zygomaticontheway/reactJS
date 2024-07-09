// пример сложных типов данных

// массив
// let arr = [1,2,3,4]

// объект DOM

// let dom = {html: {
//   head: {},
//   body: {

//   }
// }}

// // пример описание тега в виде объекта
// // аттрибуты тега будут его ключами

// let img = {
//   src: '',
//   id: '',
//   class: ''
// }

// const book ={
//   title: 'Lord of the rings',
//   author: 'Tolkien',
//   isForKids: false,
//   characters: ['Aragorn', 'Legolas', 'Ghimli', 'Frodo']
// }

// console.log(book.characters);
//задача: получить данные из объекта по ключам и сложить их в переменные  для дальнейшего использования

// const title = book.title
// const author = book.author
// const isForKids = book.isForKids
// const characters = book.characters

// console.log(title, author, isForKids, characters);

// деструктуризация объектов решает ту же задачу, но в одну строку:
// const {title: newTitle, author, isForKids, characters} = book; //переименованный ключ из title в newTitle
// console.log('title: ', newTitle);
// console.log('author: ', author);
// console.log('isForKids: ', isForKids);
// console.log('characters: ', characters);


//map
let arr = [1,2,3,4]

arr.map(elem => {
  console.log(elem);
})

let jedi =[
  {name: 'Luke', age: 35},
  {name: 'Anakin', age: 50},
  {name: 'Obi Wan', age: 60}
]

jedi.map( el => {
  console.log(el.name);
})

