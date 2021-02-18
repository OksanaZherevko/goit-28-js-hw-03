// Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {
  const {
    today: {
      low: todayLow,
      high: todayHigh,
    },
    
    tomorrow: {
    low: tomorrowLow,
    high: tomorrowHigh,
    },
 }
 = forecast;
  
  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));


// Задание
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

// // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const todayLow = forecast.today.low;
//   const todayHigh = forecast.today.high;
//   const tomorrowLow = forecast.tomorrow.low;
//   const tomorrowHigh = forecast.tomorrow.high;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// Тесты
// Объявлена функция calculateMeanTemperature(forecast).
// В теле функции используется деструктуризация объекта.
// В теле функции объявлена переменная todayHigh с помощью деструктуризации.
// В теле функции объявлена переменная todayLow с помощью деструктуризации.
// В теле функции объявлена переменная tomorrowLow с помощью деструктуризации.
// В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации.
// Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5.
// Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37.

// Результаты
// Объявлена функция calculateMeanTemperature(forecast)
// Вызов 'calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })' возвращает 28.5
// Вызов 'calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} })' возвращает 37
// В теле функции используется деструктуризация объекта
// В теле функции объявлена переменная `todayHigh` с помощью деструктуризации
// В теле функции объявлена переменная `todayLow` с помощью деструктуризации
// В теле функции объявлена переменная `tomorrowHigh` с помощью деструктуризации
// В теле функции объявлена переменная `tomorrowLow` с помощью деструктуризации