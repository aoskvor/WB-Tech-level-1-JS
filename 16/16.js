const dateUtils = require('./dateUtils');

const formattedDate = dateUtils.formatDate(new Date(), 'DD.MM.YYYY');
console.log(formattedDate); // Пример вывода: '01.01.2022'

const daysDifference = dateUtils.getDateDifference('2022-01-01', '2022-01-10');
console.log(daysDifference); // Пример вывода: 9


// В этом примере мы использовали функции `formatDate()` для форматирования переданной даты и `getDateDifference()` для получения разницы в днях между двумя датами. Обе функции используют Moment.js для удобной работы с датами.
