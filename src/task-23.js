const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);

// Задание
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Тесты
// Объявлена переменная highTemperatures.
// Значение переменной highTemperatures это объект.
// Объявлена переменная highYesterday.
// Значение переменной highYesterday это число 28.
// Объявлена переменная highToday.
// Значение переменной highToday это число 26.
// Объявлена переменная highTomorrow.
// Значение переменной highTomorrow это число 33.
// Объявлена переменная highIcon.
// Значение переменной highIcon это строка 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// Используется деструктуризация объекта.


//  Результаты
// Объявлена переменная 'highTemperatures'
// Значение переменной 'highTemperatures' это объект
// Объявлена переменная 'meanTemperature'
// Значение переменной 'meanTemperature' это число 29
// Объявлена переменная 'highYesterday' с помощью деструктуризации
// Значение переменной 'highYesterday' это число 28
// Объявлена переменная 'highIcon' с помощью деструктуризации
// Значение переменной 'highIcon' это строка 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
// Объявлена переменная 'highToday' с помощью деструктуризации
// Значение переменной 'highToday' это число 26
// Объявлена переменная 'highTomorrow' с помощью деструктуризации
// Значение переменной 'highTomorrow' это число 33
// Используется синтаксис деструктуризации объекта highTemperatures