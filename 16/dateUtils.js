const moment = require('moment');

// Функция для форматирования даты
function formatDate(date, format) {
  return moment(date).format(format);
}

// Функция для получения разницы между двумя датами в днях
function getDateDifference(date1, date2) {
  const mDate1 = moment(date1);
  const mDate2 = moment(date2);
  return mDate2.diff(mDate1, 'days');
}

// Экспорт функций
module.exports = {
  formatDate,
  getDateDifference
};
