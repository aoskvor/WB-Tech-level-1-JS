function submitForm() {
    // Получаем доступ к форме по ее идентификатору
    const form = document.getElementById("myForm");
  
    // Получаем значение полей формы
    const firstName = form.elements.firstName.value;
    const lastName = form.elements.lastName.value;
    const email = form.elements.email.value;
  
    // Отправляем данные на сервер или выполняем другие действия
    // ...
  
    // Отображаем результаты всплывающим окном
    const result = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`;
    alert(result);
  }
  