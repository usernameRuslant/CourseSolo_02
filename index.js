$(document).ready(function () {
  let article_1 = {
    foto: 'https://itproger.com/img/news/1517501131.jpg',
    title: 'Устаревшие языки, которые уже не стоит изучать',
    intro:
      'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.',
  };
  let article_2 = {
    foto: 'https://itproger.com/img/news/1517501131.jpg',
    title: 'Устаревшие языки, которые уже не стоит изучать',
    intro:
      'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.',
  };
  let article_3 = {
    foto: 'https://itproger.com/img/news/1517501131.jpg',
    title: 'Устаревшие языки, которые уже не стоит изучать',
    intro:
      'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.',
  };
  let article_4 = {
    foto: 'https://itproger.com/img/news/1517501131.jpg',
    title: 'Устаревшие языки, которые уже не стоит изучать',
    intro:
      'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.',
  };
  let article_5 = {
    foto: 'https://itproger.com/img/news/1517501131.jpg',
    title: 'Устаревшие языки, которые уже не стоит изучать',
    intro:
      'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.',
  };
  let article_6 = {
    foto: 'https://itproger.com/img/news/1517501131.jpg',
    title: 'Устаревшие языки, которые уже не стоит изучать',
    intro:
      'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.',
  };
  let article_7 = {
    foto: 'https://itproger.com/img/news/1517501131.jpg',
    title: 'Устаревшие языки, которые уже не стоит изучать',
    intro:
      'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.',
  };

  let article_8 = {
    foto: 'https://itproger.com/img/news/1516366532.jpg',
    title: '10 самых популярных сайтов написанных на Django',
    intro:
      'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.',
  };

  let articles = [
    article_1,
    article_2,
    article_3,
    article_4,
    article_5,
    article_6,
    article_7,
    article_8,
  ];

  let articlesPerLoad = 2; 
  let currentIndex = 0;

  // Функция для создания карточки статьи
  function createArticleCard(article) {
    return `
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <img src="${article.foto}" class="card-img-top" alt="${article.title}" />
          <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">${article.intro}</p>
            <a href="#" class="btn btn-warning">Читать далее</a>
          </div>
        </div>
      </div>
    `;
  }

  // Функция для подгрузки статей
  function loadMoreArticles() {
    let articlesContainer = $('.row.d-flex.align-items-start');
    let articlesToLoad = articles.slice(
      currentIndex,
      currentIndex + articlesPerLoad
    );

    articlesToLoad.forEach(function (article) {
      articlesContainer.append(createArticleCard(article));
    });

    currentIndex += articlesPerLoad;

    // Скрываем кнопку, если все статьи загружены
    if (currentIndex >= articles.length) {
      $('#load-more').hide();
    }
  }

  // Обработчик для кнопки "Показать больше"
  $('#load-more').click(function () {
    loadMoreArticles();
  });

  let searchInput = $('#search-field');
  let overlay = $('#search-overlay');
  let closeOverlayButton = $('#close-overlay');
  let fullscreenSearchField = $('#fullscreen-search-field');

  // Открытие поиска по нажатию на поле поиска
  searchInput.focus(function () {
    overlay.fadeIn(300); 
    fullscreenSearchField.focus(); 
  });

  // Закрытие поиска по нажатию на кнопку в overlay
  closeOverlayButton.click(function () {
    overlay.fadeOut(300); 
  });

  // Закрытие поиска при нажатии клавиши ESC
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      overlay.fadeOut(300); 
    }
  });
});
