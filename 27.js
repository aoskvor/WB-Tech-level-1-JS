//Вот пример функции, которая добавляет анимацию изменения размера элемента:


function animateElement(element, targetWidth, targetHeight, duration) {
  // Получаем текущую ширину и высоту элемента
  var startWidth = element.offsetWidth;
  var startHeight = element.offsetHeight;

  // Вычисляем разницу между текущими значениями и целевыми значениями
  var widthChange = targetWidth - startWidth;
  var heightChange = targetHeight - startHeight;

  // Вычисляем время, через которое анимация будет завершена, инициируем анимацию
  var startTime = performance.now();
  requestAnimationFrame(function animate(currentTime) {
    var elapsedTime = currentTime - startTime;
    var progress = Math.min(elapsedTime / duration, 1); // Прогресс анимации от 0 до 1

    // Вычисляем текущие значения ширины и высоты элемента на основе прогресса
    var currentWidth = startWidth + widthChange * progress;
    var currentHeight = startHeight + heightChange * progress;

    // Применяем текущие значения ширины и высоты к элементу
    element.style.width = currentWidth + 'px';
    element.style.height = currentHeight + 'px';

    // Проверяем, завершена ли анимация
    if (progress < 1) {
      // Если нет, продолжаем анимацию
      requestAnimationFrame(animate);
    }
  });
}


//Вы можете использовать эту функцию, чтобы добавить анимацию изменения размера элемента на вашей веб-странице. Например, чтобы добавить анимацию по нажатию на кнопку:


var button = document.querySelector('.animate-button');
var box = document.querySelector('.animate-box');

button.addEventListener('click', function() {
  animateElement(box, 300, 200, 1000); // Изменение ширины элемента на 300px и высоты на 200px за 1 секунду
});


//В этом примере мы добавляем слушатель события `click` к кнопке с классом `animate-button`. При каждом клике на кнопку вызывается функция `animateElement`, которая запускает анимацию изменения размера элемента с классом `animate-box`. 

//Вы можете изменить функцию `animateElement` и аргументы при вызове, чтобы настроить анимацию под ваши нужды. Замените `targetWidth` и `targetHeight` на целевые значения ширины и высоты, а `duration` - на время, в течение которого должна происходить анимация.

