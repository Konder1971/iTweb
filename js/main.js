(function ($) {
  $(document).ready(function () {
    const $body = $('body');
    const $langToggle = $('.lang');

    // Определяем платформу и добавляем соответствующий класс к body
    const platformClass = isMac() ? 'mac' : (isiOS() ? 'ios' : (isWindows() ? 'windows' : ''));
    if (platformClass) {
      $body.addClass(platformClass);
    }

    // Установить сохранённый язык из localStorage или использовать по умолчанию
    const savedLangClass = localStorage.getItem('langClass') || 'lang-ukr';
    $body.removeClass('lang-ukr lang-eng').addClass(savedLangClass);
    localStorage.setItem('langClass', savedLangClass);

    // Функция для переключения класса языка
    function toggleLanguageClass() {
      const newLangClass = $body.hasClass('lang-ukr') ? 'lang-eng' : 'lang-ukr';
      $body.removeClass('lang-ukr lang-eng').addClass(newLangClass);
      localStorage.setItem('langClass', newLangClass);
    }

    // Событие для переключения языка
    $langToggle.on('click', toggleLanguageClass);

    // Обработка клика по навигационному переключателю
    $('.nav-toggle').click(function () {
      if ($(this).hasClass('active')) {
        $('.nav-toggle.active').removeClass('active');
        $('.navigations.active').removeClass('active');
        $('.navlink.active').removeClass('active');
      } else {
        $(this).addClass('active');
        $('.navigations').addClass('active');
      }
    });

    // Фиксация верхней части при прокрутке страницы
    const top = $('.top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        top.addClass('top_fixed');
      } else {
        top.removeClass('top_fixed');
      }
    });

    // Обработка кликов по ссылкам навигации в зависимости от размера экрана
    const navLinks = document.querySelectorAll('.navlink');
    function handleNavLinkClick(event) {
      const target = event.currentTarget;
      if (target.classList.contains('active')) {
        target.classList.remove('active');
      } else {
        navLinks.forEach(link => link.classList.remove('active'));
        target.classList.add('active');
      }
    }

    function setupNavLinkClicks() {
      if ($(window).width() < 1025) {
        navLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));
      } else {
        navLinks.forEach(link => link.removeEventListener('click', handleNavLinkClick));
        navLinks.forEach(link => link.classList.remove('active'));
      }
    }

    // Инициализация кликов по ссылкам навигации
    setupNavLinkClicks();

    // Добавление обработчика изменения размера окна для переконфигурации кликов по ссылкам навигации
    $(window).resize(setupNavLinkClicks);

    // Получить текущий год и обновить текст для элементов, содержащих символ ©
    const currentYear = new Date().getFullYear();
    $('span').filter(function () {
      return $(this).text().includes('©');
    }).text(`© ${currentYear}`);

    // Инициализация jQuery UI selectmenu, если элемент с классом .select существует
    if ($(".select").length > 0) {
      $(".select").selectmenu();
    }

    AOS.init({
      duration: 1000,
      once: true,
    });
    
  });

  // Функция для определения, является ли платформа Mac
  function isMac() {
    return navigator.platform.includes('Mac');
  }

  // Функция для определения, является ли платформа Windows
  function isWindows() {
    return navigator.platform.includes('Win');
  }

  // Функция для определения, является ли платформа iOS
  function isiOS() {
    return /(iPhone|iPod|iPad)/i.test(navigator.platform) && !window.MSStream;
  }
})(jQuery);

// Обработка кнопки "Наверх"
document.addEventListener('DOMContentLoaded', () => {
  const toTopBtn = document.querySelector('.to-up');

  // Показать/скрыть кнопку "Наверх" в зависимости от прокрутки страницы
  window.onscroll = function () {
    if (window.pageYOffset > 400) {
      toTopBtn.style.display = 'block';
    } else {
      toTopBtn.style.display = 'none';
    }
  };

  // Плавный скролл к началу страницы при клике на кнопку "Наверх"
  toTopBtn.addEventListener('click', function () {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  });
});