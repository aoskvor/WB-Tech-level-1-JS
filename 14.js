function loadImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      
      image.onload = function() {
        resolve({
          width: this.width,
          height: this.height,
          url: this.src
        });
      };
  
      image.onerror = function() {
        reject(new Error('Ошибка загрузки изображения'));
      }
  
      image.src = url;
    });
  }
  
  // Пример использования:
  
  const imageUrl = 'https://example.com/image.jpg';
  loadImage(imageUrl)
    .then((imageData) => {
      console.log('Изображение успешно загружено:', imageData);
    })
    .catch((error) => {
      console.error('Ошибка загрузки изображения:', error);
    });
  // В данном примере мы создаем новый объект Image, устанавливаем обработчики событий `onload` и `onerror`, чтобы отслеживать успешную загрузку или ошибку загрузки изображения, и устанавливаем `src` объекта Image равным переданному URL. Если изображение успешно загружено, мы вызываем функцию `resolve` промиса с объектом, содержащим данные об изображении (ширина, высота и URL). В случае ошибки загрузки вызывается функция `reject` с объектом ошибки.
  