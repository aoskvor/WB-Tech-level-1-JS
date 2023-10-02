function geocodeInput(inputField, geoServiceType) {
    let timerId;
    let lastInputValue;
    // ...
 }
 function geocodeInput(inputField, geoServiceType) {
    let timerId;
    let lastInputValue;
 
    function handleInput() {
       clearTimeout(timerId);
 
       const inputValue = inputField.value;
       lastInputValue = inputValue;
 
       timerId = setTimeout(() => {
          geocode(inputValue, geoServiceType);
       }, 300); // Задержка перед выполнением функции geocode (время дебоунсинга)
    }
 
    // Назначить обработчик события input на поле ввода адреса
    inputField.addEventListener('input', handleInput);
 }
 
 const yandexInput = document.getElementById('yandex-input');
geocodeInput(yandexInput, 'yandex');

const daDataInput = document.getElementById('daData-input');
geocodeInput(daDataInput, 'daData');

const graphHopperInput = document.getElementById('graphHopper-input');
geocodeInput(graphHopperInput, 'graphHopper');
