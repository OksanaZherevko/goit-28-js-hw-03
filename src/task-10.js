//one way

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = ['descr', 'rating', 'price'];
// const values = ['Просторная квартира в центре', 4, 2153];
// // Пиши код ниже этой строки
// for (key in apartment) {

// }

//second way
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Пиши код ниже этой строки
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
// console.log(keys);
// console.log(values);


// Задание
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ['descr', 'rating', 'price'].
// Объявлена переменная values.
// Значение переменной values это массив ['Просторная квартира в центре', 4, 2153]