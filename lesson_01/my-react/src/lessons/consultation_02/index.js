//Необходимо вывести в консоль true, если заданная строка присутствует в массиве 
//и false, если нет

// const arrayExample= ['1e4e2e4c-056e-4f1d-9463-7b8b19a8cf33' , 'c0e1f8b2-1d0f-4f5b-86e5-bc4e5f8c8b7e','9b7e4f3e-bd7f-4c6c-8f69-3c63b013faba', '9b7e4f3e-bd7f-4c6c-8f69-3c63b013faba'];
// const arrayExample= ['1e4e2e4c-056e-4f1d-9463-7b8b19a8cf33' , 'c0e1f8b2-1d0f-4f5b-86e5-bc4e5f8c8b7e'];

// const data = '9b7e4f3e-bd7f-4c6c-8f69-3c63b013faba';

// // императивный подход для решения задачи:
// for (let i = 0; i < arrayExample.length; i++) {
//     const element = arrayExample[i];
//     if (element === data){
//         return console.log(true);
//     } else {
//         return console.log(false);
//     }
// }

//декларативный подход

// console.log(arrayExample.find(data)); //возвращает элемент, если он найден
// console.log(arrayExample.includes(data));

// console.log(arrayExample.find(elt => elt === data));

// Задача 2. Создайте новый массив, в который будут входить только значения имен

// const persons = [
//   { name: "John", age: 20 },
//   { name: "Tom", age: 22 },
//   { name: "Bob", age: 21 },
// ];


// let personsNames = [];

// for (let index = 0; index < persons.length; index++) {
//     personsNames[index] = persons[index].name;
// }

// console.log(personsNames);

// //декларативный подход

// let personsNames2 = persons.map(element => element.name);
// console.log(personsNames2);

//Необходимо получить новый массив, в котором будет отсутствовать выбранный элемент

const arrayExample = [
    '1e4e2e4c-056e-4f1d-9463-7b8b19a8cf33',
    '9b7e4f3e-bd7f-4c6c-8f69-3c63b013faba',
    'c0e1f8b2-1d0f-4f5b-86e5-bc4e5f8c8b7e',
    'd1f6c0a3-8b9e-4c5a-9147-b6f7d9f6a5d4',
    'e3a9b7d1-4f8b-41a9-a3f1-1e6a9d1c3b2e',
    'f4b1c8d2-5c7a-42e9-9d7b-4c6a5f8e9b7c'
  ];

  const element = 'd1f6c0a3-8b9e-4c5a-9147-b6f7d9f6a5d4'

  //1. 
  let arrayExampleNew1 = [];

  for (let i = 0; i < arrayExample.length; i++) {
    if (arrayExample[i] !== element) {
        arrayExampleNew1.push(arrayExample[i]);
    }
  }
  console.log(arrayExampleNew1);


  2. 
  let arrayExampleNew2 = arrayExample.filter(elt => elt !== element);
  console.log(arrayExampleNew2);
