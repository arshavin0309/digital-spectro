// Установка title
// Если заголовка нет, он будет установлен
// !!! ДЛЯ CMS НЕ ПОНАДОБИТЬСЯ (начало)

let lang = document.documentElement.lang;
let title;
let url = document.location.href;
let originUrl = document.location.origin + '/';

if (!document.title) {
    switch (true) {
        case url == originUrl:
            title = lang == 'ru' ? 'Главная' : 'Main';
            document.title = title;
            break;

        case url.includes('start'):
            title = lang == 'ru' ? 'С чего начать?' : 'Where to start?';
            document.title = title;
            break;

        case url.includes('404'):
            title = lang == 'ru' ? 'Страница не найдена?' : 'Page not found';
            document.title = title;
            break;

        case url.includes('terms'):
            title = lang == 'ru' ? 'Условия торговли' : 'Trading terms';
            document.title = title;
            break;

        case url.includes('platform'):
            title = lang == 'ru' ? 'Торговая платформа' : 'Trading platform';
            document.title = title;
            break;

        case url.includes('strategies'):
            title = lang == 'ru' ? 'Торговые стратегии' : 'Trading strategies';
            document.title = title;
            break;

        case url.includes('schedule'):
            title = lang == 'ru' ? 'Часы работы рынка' : 'Market hours';
            document.title = title;
            break;

        case url.includes('instruments'):
            title = lang == 'ru' ? 'Торговые инструменты' : 'Trading instruments';
            document.title = title;
            break;

        case url.includes('analytics'):
            title = lang == 'ru' ? 'Аналитика рынка' : 'Market analytics';
            document.title = title;
            break;

        case url.includes('review'):
        case url.includes('overview'):
            title = lang == 'ru' ? 'Обзор рынка' : 'Market overview';
            document.title = title;
            break;

        case url.includes('raw-materials'):
        case url.includes('commodities'):
            title = lang == 'ru' ? 'Сырье' : 'Сommodities';
            document.title = title;
            break;

        case url.includes('condition'):
            title = lang == 'ru' ? 'Состояние рынка' : 'State of the market';
            document.title = title;
            break;

        case url.includes('calendar'):
            title = lang == 'ru' ? 'Экономический календарь' : 'Economic calendar';
            document.title = title;
            break;

        case url.includes('news-page'):
            title = $('h1').html();
            document.title = title;
            break;

        case url.includes('news'):
            title = lang == 'ru' ? 'Новости рынка' : 'Market news';
            document.title = title;
            break;

        case url.includes('forecasts'):
            title = lang == 'ru' ? 'Прогнозы рынка' : 'Market forecasts';
            document.title = title;
            break;

        case url.includes('currencies'):
            title = lang == 'ru' ? 'Валюты' : 'Currencies';
            document.title = title;
            break;

        case url.includes('cryptocurrencies'):
            title = lang == 'ru' ? 'Криптовалюты' : 'Cryptocurrencies';
            document.title = title;
            break;

        case url.includes('stocks'):
            title = lang == 'ru' ? 'Акции' : 'Stocks';
            document.title = title;
            break;

        case url.includes('indices'):
            title = lang == 'ru' ? 'Индексы' : 'Indices';
            document.title = title;
            break;

        case url.includes('history'):
            title = lang == 'ru' ? 'История компании' : 'Company history';
            document.title = title;
            break;

        case url.includes('why'):
            title = lang == 'ru' ? 'Почему мы?' : 'Why us?';
            document.title = title;
            break;

        case url.includes('documents'):
            title = lang == 'ru' ? 'Документы' : 'Documents';
            document.title = title;
            break;

        case url.includes('about'):
            title = lang == 'ru' ? 'О нас' : 'About us';
            document.title = title;
            break;

        case url.includes('contacts'):
            title = lang == 'ru' ? 'Контакты' : 'Contacts';
            document.title = title;
            break;

        case url.includes('tips'):
            title = lang == 'ru' ? 'Торговые советы' : 'Trading tips';
            document.title = title;
            break;

        default:
            document.title = 'Нужно установить title';
            break;
    }
}

// Установка title (конец)

// кнопка вверх (начало)

$(window).on('scroll', trackScroll);
$('.upButton').on('click', backToTop);

function trackScroll() {
    let scrolled = window.pageYOffset;

    if (scrolled > 100) {
        $('.upButton').addClass('show');
        $('.header').addClass('scrolled');
    }
    if (scrolled < 100) {
        $('.upButton').removeClass('show');
        $('.header').removeClass('scrolled');
    }
}

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// кнопка вверх (конец)

// окно с предупреждением о куки (начало)

function getCookie(name) {
    let matches = document.cookie.match(
        new RegExp(
            '(?:^|; )' +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
            '=([^;]*)'
        )
    )
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options,
    }

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString()
    }

    let updatedCookie =
        encodeURIComponent(name) + '=' + encodeURIComponent(value)

    for (let optionKey in options) {
        updatedCookie += '; ' + optionKey
        let optionValue = options[optionKey]
        if (optionValue !== true) {
            updatedCookie += '=' + optionValue
        }
    }

    document.cookie = updatedCookie
}

if (!getCookie('cookies')) {
    document.querySelector('.cookies').style = 'display: flex'
}

document.querySelector('.cookies .btn').addEventListener('click', () => {
    document.querySelector('.cookies').style = 'display: none'
    setCookie('cookies', 'true', { 'max-age': 3600 * 24 * 365 })
})

// окно с предупреждением о куки (конец)

// мобильное меню (начало)

navMenu();
$(window).on('resize', function () {
    navMenu();
    console.log('resize')
});

function navMenu() {
    let menuItem = $('.header .menu > .menu-item');
    let subMenu = $('.header .menu > .menu-item .sub-menu');
    let burger = $('.header__burger'); // кнопка открытия мобильного меню
    let headerMenu = $('.header .menu'); // меню хедера
    let headerBox = $('.header'); // блок внутри контейнера хедера, например если он в виде острова и при выпадении мобильного меню, нужно его дополнительно стилизовать

    subMenu.slideUp();

    if ($(window).width() <= 1200) {

        burger.on('click', function () {
            burger.toggleClass('active');
            headerBox.toggleClass('active');
            headerMenu.toggleClass('active');

            subMenu.slideUp();
            menuItem.removeClass('active');
        })

        $('.upButton').on('click', function () {
            burger.removeClass('active');
            headerBox.removeClass('active');
            headerMenu.removeClass('active');

            subMenu.slideUp();
            menuItem.removeClass('active');
        });

        for (let i = 0; i < menuItem.length; i++) {
            menuItem.eq(i).on('click', function () {
                if (menuItem.eq(i).hasClass('active')) {
                    menuItem.eq(i).removeClass('active');
                    subMenu.eq(i).slideUp();
                } else {
                    subMenu.slideUp();
                    menuItem.removeClass('active');
                    subMenu.eq(i).slideDown();
                    menuItem.eq(i).addClass('active');
                }
            })
        }
    } else {
        for (let i = 0; i < menuItem.length; i++) {
            menuItem.eq(i).on('mouseenter', function () {
                subMenu.eq(i).slideDown();
                menuItem.eq(i).addClass('active');
            })
        }
    }
}

// мобильное меню (конец)

// табы для таблиц (начало)
let tableBtn = $(".start-instruments__btn");
let tableTable = $(".start-instruments__table");
let tableShow = $(".start-instruments__show");
let tableHide = $(".start-instruments__hide");
let tableTr = $(".start-instruments__table tr");

tableHide.css('display', 'none');

for (let i = 0; i < tableBtn.length; i++) {
    tableBtn.eq(i).on("click", () => {
        for (let n = 0; n < tableBtn.length; n++) {
            tableBtn.eq(n).removeClass("active");
            tableTable.eq(n).removeClass("active");
        };

        tableBtn.eq(i).addClass("active");
        tableTable.eq(i).addClass("active");
        hideTr();
    });
};

function showTr() {
    tableTr.addClass('active');
    tableShow.css('display', 'none');
    tableHide.css('display', 'flex');
}

function hideTr() {
    tableTr.removeClass('active');
    tableHide.css('display', 'none');
    tableShow.css('display', 'flex');

    $("body, html").animate({
        scrollTop: $('.start-instruments').offset().top
    }, 600);
}

tableShow.on('click', showTr);
tableHide.on('click', hideTr);

// табы для таблиц (конец)

// плавная прокрутка до якоря (начало)

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// плавная прокрутка до якоря (конец)

// аккордеон (начало)

$(document).ready(function () {
    $('.faq__list > li > .answer').hide();

    $('.faq__list > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".faq__list > li.active .answer").slideUp();
            $(".faq__list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });
});

// аккордеон (конец)

let swiper1 = new Swiper(".swiper1", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 5000,

    autoplay: {
        delay: 0,
    },

    loop: true,
    allowTouchMove: false,
});