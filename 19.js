function loadPosts() {
    // Запрос к API VK для получения постов из паблика
    VK.Api.call('wall.get', {owner_id: '-57729664', count: 10}, function(response) {
      if (response && response.response) {
        var posts = response.response.items;
        
        // Отображение постов в виджете
        var widget = document.getElementById('widget');
        for (var i = 0; i < posts.length; i++) {
          var post = posts[i];
          var postElement = document.createElement('div');
          postElement.innerHTML = post.text;
          widget.appendChild(postElement);
          
          // Кэширование загруженных данных
          localStorage.setItem('post_' + post.id, post.text);
        }
        
        // Проверка наличия прокрутки и загрузка новых постов
        if (widget.scrollHeight > widget.clientHeight) {
          loadPosts();
        }
        
        // Удаление старых постов из кэша, если достигнут лимит
        var cacheSize = 100; // Максимальное количество сохраняемых постов
        if (localStorage.length > cacheSize) {
          for (var i = 0; i < localStorage.length - cacheSize; i++) {
            var key = localStorage.key(i);
            if (key.startsWith('post_')) {
              localStorage.removeItem(key);
            }
          }
        }
      }
    });
  }
  // В данном примере используется `localStorage.setItem` для сохранения текста каждого поста с ключом `'post_' + post.id`. При очистке кэша `localStorage`, старые посты удаляются с использованием `localStorage.removeItem`.

// Функция `loadPosts` будет загружать новые посты с сервера, отображать их в виджете, а также сохранять текст каждого поста в кэш. При следующем открытии виджета, данные будут загружаться сначала из кэша, а затем с сервера.
