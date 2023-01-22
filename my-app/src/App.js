import './App.css';
import React from "react";

function App() {
  return (
      <body>
      <header className="header">
        <div className="container">
          <div className="header__line">
            <div className="header__logo ">
              <a className="header__logo__link" href="#0">
                <img src="https://netology-code.github.io/html-2-diploma/sources/images/noemi-logo.svg" alt="Logo"/></a>
            </div>
            <nav className="nav">
              <button className="menu__burger">
                <span className="menu__burger__name">Открыть меню</span>
              </button>
              <ul className="nav__list">
                <li className="nav__item"><a className="nav__link" href="#0">Главная</a></li>
                <li className="nav__item"><a className="nav__link" href="#0">Посты</a></li>
                <li className="nav__item"><a className="nav__link" href="#0">Статьи</a></li>
                <li className="nav__item"><a className="nav__link" href="#0">Теги</a></li>
                <li className="nav__item"><a className="nav__link" href="#0">Темы</a></li>
                <li className="nav__item"><a className="nav__link" href="#0">Контакты</a></li>
              </ul>
            </nav>
          </div>

          <h1 className="header__title">Блог о творчестве, спорте, и образе жизни</h1>
        </div>
      </header>

      <main className="page">
        <div className="pop__up visually__hidden">
          <div className="pop__up__container">
            <div className="feedback">
              <h2 className="section__title">Ваш фидбэк</h2>
              <form className="feedback__form">
                <div className="form__row">
                  <label className="form__label" htmlFor="question__select__id">Как часто вы заходите на сайт?</label>
                  <select id="question__select__id" className="question__select" form="question__select__id">
                    <option selected>Почти каждый день</option>
                    <option>Раз в несколько дней</option>
                    <option>Раз в несколько недель</option>
                    <option>Несколько раз в год</option>
                  </select>
                </div>
                <div className="form__row">
                  <span className="form__hint">Вы подписаны на e-mail рассылку?</span>
                  <label className="radio__group">
                    <input type="radio" className="radio" name="radio__group" checked/>
                      <span className="radio__group__text">Да</span>
                  </label>
                  <label className="radio__group">
                    <input type="radio" className="radio" name="radio__group"/>
                      <span className="radio__group__text">Нет</span>
                  </label>
                </div>
                <div className="form__row">
                  <label className="form__label">Расскажите, какой контент вы хотели бы видеть
                    на нашем сайте?
                    <textarea className="form__textarea">Может, больше рецептов?</textarea>
                  </label>
                </div>
                <button className="send__btn" type="button">Отправить</button>
              </form>
            </div>
            <button className="btn__close" type="button">
              <img src="svg/form-x.svg" alt="Закрыть окно"/>
            </button>
          </div>
        </div>
        <section className="trends">
          <h2 className="section__title">Сейчас в тренде</h2>
          <div className="trends__wrapper">
            <div className="trends__item__wrapper trends__interior">
              <div className="trends__item">
                <ul className="tags">
                  <li className="tags__item">
                    <a className="tags__item__link" href="#0">Lifestyle</a>
                  </li>
                  <li className="tags__item">
                    <a className="tags__item__link" href="#0">Interior</a>
                  </li>
                </ul>
                <h2 className="trends__title">
                  <a className="trends__title__link">Сейчас в тренде: сад
                    на подоконнике</a>
                </h2>
              </div>
            </div>
            <div className="trends__item__wrapper trends__food">
              <div className="trends__item">
                <ul className="tags">
                  <li className="tags__item">
                    <a className="tags__item__link" href="#0">food</a>
                  </li>
                </ul>
                <h2 className="trends__title">
                  <a className="trends__title__link">Cыры на красивых картинках из интернета: какие они на вкус?</a>
                </h2>
              </div>
            </div>
            <div className="trends__item__wrapper trends__travel">
              <div className="trends__item">
                <ul className="tags">
                  <li className="tags__item">
                    <a className="tags__item__link" href="#0">Lifestyle</a>
                  </li>
                  <li className="tags__item">
                    <a className="tags__item__link" href="#0">Travel</a>
                  </li>
                </ul>
                <h2 className="trends__title">
                  <a className="trends__title__link">Собираемся в первый поход в горы</a>
                </h2>
              </div>
            </div>
            <div className="trends__item__wrapper trends__health">
              <div className="trends__item">
                <ul className="tags">
                  <li className="tags__item">
                    <a className="tags__item__link" href="#0">Food</a>
                  </li>
                  <li className="tags__item">
                    <a className="tags__item__link" href="#0">Health</a>
                  </li>
                </ul>
                <h2 className="trends__title">
                  <a className="trends__title__link">Сейчас в тренде: сколько витамина в лимонах?</a>
                </h2>
              </div>
            </div>

          </div>
        </section>
        <div className="wrapper__page__container container">
          <div className="main">
            <article className="news">
              <div className="news__img__wrp">
                <img className="news__img" src={"/last-post1.jpg"}
                     alt="Силуэт на пляже"/>
              </div>
              <div className="news__content">
                <header className="news__content__header">
                  <ul className="news__content__tags">
                    <li className="news__tags__item">
                      <a href="#0" className="news__tags__link">travel</a>
                    </li>

                    <li className="news__tags__item"><a href="#0" className="news__tags__link">health</a></li>

                  </ul>
                  <h3 className="news__container__title"><a href="#0" className="news__title__link">10 мест, ради
                    которых
                    стоит
                    проснуться на рассвете</a></h3>
                  <div className="news__content__info">
                    <time className="news__content__date">10 июня 2019</time>
                    <div className="news__content__author"><a href="#0" className="news__content__author__link">Неизвестный
                      автор</a></div>
                  </div>
                </header>
                <div className="news__info__text">
                  <p>Итак, вы в Питере. Раннее утро. Лед с рек и каналов уже ушел,
                    запущены фонтаны города… Музеи еще закрыты. Что посмотреть?</p>
                </div>

              </div>
            </article>
            <article className="news">
              <div className="news__img__wrp">
                <img className="news__img" src="image/last-post2.jpg"
                     alt="Девушка занимается йогой"/>
              </div>
              <div className="news__content">
                <header className="news__content__header">
                  <ul className="news__content__tags">
                    <li className="news__tags__item"><a href="#0" className="news__tags__link">health</a></li>

                    <li className="news__tags__item"><a href="#0" className="news__tags__link">lifestyle</a></li>

                  </ul>
                  <h3 className="news__container__title"><a href="#0" className="news__title__link">Йога для начинающих
                    в
                    домашних условиях</a></h3>
                  <div className="news__content__info">
                    <time className="news__content__date">10 июня 2019</time>
                    <div className="news__content__author"><a href="#0" className="news__content__author__link">Неизвестный
                      автор</a></div>
                  </div>
                </header>
                <div className="news__info__text">
                  <p>Расскажем, какие упражнения выбрать и как сделать коврик для
                    занятий йогой из того, что можно найти в шкафу.</p>
                </div>

              </div>
            </article>
            <article className="news">
              <div className="news__img__wrp">
                <img className="news__img" src="image/last-post3.jpg"
                     alt="Девушка танцует"/>
              </div>
              <div className="news__content">
                <header className="news__content__header">
                  <ul className="news__content__tags">
                    <li className="news__tags__item"><a href="#0" className="news__tags__link">music</a></li>

                  </ul>
                  <h3 className="news__container__title"><a href="#0" className="news__title__link">Лучшие музыкальные
                    фестивали этого лета</a></h3>
                  <div className="news__content__info">
                    <time className="news__content__date">10 июня 2019</time>
                    <div className="news__content__author"><a href="#0" className="news__content__author__link">Неизвестный
                      автор</a></div>
                  </div>
                </header>
                <div className="news__info__text">
                  <p>Лето на носу, а с ним и музыкальные фестивали. На каком же из
                    них
                    вы разобьёте свою палатку?</p>
                </div>
                <div className="news__info__text">
                  <p>Мы составили список лучших летних фестивалей по всему миру.</p>
                </div>

              </div>
            </article>
            <article className="news">
              <div className="news__img__wrp">
                <img className="news__img" src="./image/last-post4.jpg"
                     alt="Еда на столе"/>
              </div>
              <div className="news__content">
                <header className="news__content__header">
                  <ul className="news__content__tags">
                    <li className="news__tags__item"><a href="#0" className="news__tags__link">lifestyle</a></li>

                    <li className="news__tags__item"><a href="#0" className="news__tags__link">food</a></li>

                  </ul>
                  <h3 className="news__container__title"><a href="#0" className="news__title__link">Наукоёмкий подход к
                    кулинарии</a></h3>
                  <div className="news__content__info">
                    <time className="news__content__date">10 июня 2019</time>
                    <div className="news__content__author"><a href="#0" className="news__content__author__link">Неизвестный
                      автор</a></div>
                  </div>
                </header>
                <div className="news__info__text">
                  <p>Узнаем основы проектирования новых пищевых и около-пищевых
                    опытов,
                    вскроем физику, химию и микробиологию еды.</p>
                </div>

              </div>
            </article>
            <article className="news">
              <div className="news__img__wrp">
                <img className="news__img" src="image/last-post5.jpg"
                     alt="Подушечка"/>
              </div>
              <div className="news__content">
                <header className="news__content__header">
                  <ul className="news__content__tags">
                    <li className="news__tags__item"><a href="#0" className="news__tags__link">lifestyle</a></li>

                    <li className="news__tags__item"><a href="#0" className="news__tags__link">interior</a></li>

                    <li className="news__tags__item"><a href="#0" className="news__tags__link">art</a></li>

                  </ul>
                  <h3 className="news__container__title"><a href="#0" className="news__title__link">делаем модные принты
                    на
                    подушках для интерьера</a></h3>
                  <div className="news__content__info">
                    <time className="news__content__date">10 июня 2019</time>
                    <div className="news__content__author"><a href="#0" className="news__content__author__link">Неизвестный
                      автор</a></div>
                  </div>
                </header>
                <div className="news__info__text">
                  <p>Подушки для дивана целесообразнее заказать в съемных чехлах на
                    молнии, если потребуется чистка подушек, проще снять чехлы, чем везти подушку в
                    химчистку.</p>
                </div>

              </div>
            </article>
            <article className="news">
              <div className="news__img__wrp">
                <img className="news__img"
                     src="https://netology-code.github.io/html-2-diploma/sources/images/last-post6.jpg"
                     alt="Пейзаж гор"/>
              </div>
              <div className="news__content">
                <header className="news__content__header">
                  <ul className="news__content__tags">
                    <li className="news__tags__item"><a href="#0" className="news__tags__link">travel</a></li>

                    <li className="news__tags__item"><a href="#0" className="news__tags__link">lifestyle</a></li>

                  </ul>
                  <h3 className="news__container__title"><a href="#0" className="news__title__link">Как первый раз
                    отправиться
                    в горы?</a></h3>
                  <div className="news__content__info">
                    <time className="news__content__date">10 июня 2019</time>
                    <div className="news__content__author"><a href="#0" className="news__content__author__link">Неизвестный
                      автор</a></div>
                  </div>
                </header>
                <div className="news__info__text">
                  <p>Для начала нужно определиться, в каком формате пройдёт ваше
                    путешествие. Это зависит от многих факторов, не только от ваших желаний и интересов.?</p>
                </div>

              </div>
            </article>
            <article className="news">
              <div className="news__img__wrp">
                <img className="news__img" src="image/last-post4.jpg"
                     alt="Еда на столе"/>
              </div>
              <div className="news__content">
                <header className="news__content__header">
                  <ul className="news__content__tags">
                    <li className="news__tags__item"><a href="#0" className="news__tags__link">lifestyle</a></li>

                    <li className="news__tags__item"><a href="#0" className="news__tags__link">food</a></li>

                  </ul>
                  <h3 className="news__container__title"><a href="#0" className="news__title__link">Наукоёмкий подход к
                    кулинарии</a></h3>
                  <div className="news__content__info">
                    <time className="news__content__date">10 июня 2019</time>
                    <div className="news__content__author"><a href="#0" className="news__content__author__link">Неизвестный
                      автор</a></div>
                  </div>
                </header>
                <div className="news__info__text">
                  <p>Узнаем основы проектирования новых пищевых и около-пищевых опытов,
                    вскроем физику, химию и микробиологию еды.</p>
                </div>

              </div>
            </article>


          </div>
          <aside className="side__column">
            <section className="side__sections">
              <h2 className="side__title">Новые посты</h2>
              <article className="new__posts">
                <div className="new__posts__img">
                  <img src="image/2.jpg"
                       alt="Силуэт на пляже"/>
                </div>
                <div className="new__content">
                  <time className="new__posts__date">14 июня 2019</time>
                  <h3 className="new__posts__content">
                    <a href="#0" className="new__posts__link"> 10 мест, ради которых
                      стоит проснуться</a>
                  </h3>
                </div>
              </article>
              <article className="new__posts">
                <div className="new__posts__img">
                  <img src="image/151.jpg"
                       alt="Девушка занимается йогой"/>
                </div>
                <div className="new__content">
                  <time className="new__posts__date">14 июня 2019</time>
                  <h3 className="new__posts__content">
                    <a href="#0" className="new__posts__link"> Йога для домашних</a>
                  </h3>
                </div>
              </article>
              <article className="new__posts">
                <div className="new__posts__img">
                  <img src="image/45.jpg"
                       alt="Красивый интерьер балкона"/>
                </div>
                <div className="new__content">
                  <time className="new__posts__date">14 июня 2019</time>
                  <h3 className="new__posts__content">
                    <a href="#0" className="new__posts__link"> Как мы превратили классное место в балкон</a>
                  </h3>
                </div>
              </article>
              <article className="new__posts">
                <div className="new__posts__img">
                  <img src="image/501.jpg"
                       alt="Красивые блюда"/>
                </div>
                <div className="new__content">
                  <time className="new__posts__date">14 июня 2019</time>
                  <h3 className="new__posts__content">
                    <a href="#0" className="new__posts__link"> Кулинарный подход к науке</a>
                  </h3>
                </div>
              </article>
              <article className="new__posts">
                <div className="new__posts__img">
                  <img src="image/7.jpg"
                       alt="Прически девушек"/>
                </div>
                <div className="new__content">
                  <time className="new__posts__date">14 июня 2019</time>
                  <h3 className="new__posts__content">
                    <a href="#0" className="new__posts__link"> Лучшие прически для распущенных волос</a>
                  </h3>
                </div>
              </article>

            </section>
            <section className="side__sections">
              <form className="search__form" action="#0">
                <label className="visually__hidden" htmlFor="search">поиск</label>
                <div className="search__form__row">
                  <input className="search__input" type="search" placeholder="Найти..." id="search" required/>
                    <button className="search__button">
                      <span className="visually__hidden">Найти</span></button>
                </div>

              </form>
            </section>
            <section className="side__sections">
              <h2 className="side__title">Рассылка</h2>
              <form className="subscribe__form" action="#0">
                <label className="visually__hidden" htmlFor="subscribeinput">Введите ваш email адрес</label>
                <input className="subscribe__input" type="email" placeholder="Ваше email адрес" id="subscribeinput"
                       required/>
                  <button className="subscribe__btn">Подписаться</button>
              </form>
            </section>
            <section className="side__sections">
              <h2 className="side__title">Теги</h2>
              <ul className="tag__list">
                <li className="tag__list__item"><a href="#0" className="tag__list__link">Fashion</a></li>
                <li className="tag__list__item"><a href="#0" className="tag__list__link">Music</a></li>
                <li className="tag__list__item"><a href="#0" className="tag__list__link">Lifestyle</a></li>
                <li className="tag__list__item"><a href="#0" className="tag__list__link">Art</a></li>
                <li className="tag__list__item"><a href="#0" className="tag__list__link">Interior</a></li>
                <li className="tag__list__item"><a href="#0" className="tag__list__link">Travel</a></li>
                <li className="tag__list__item"><a href="#0" className="tag__list__link">Food</a></li>
                <li className="tag__list__item"><a href="#0" className="tag__list__link">Health</a></li>
              </ul>
            </section>

            <section className="side__sections">
              <h2 className="side__title">Темы</h2>
              <ul className="categories__list">
                <li className="categories__list__item">
                  <a className="categories__list__item__link" href="#0">Красота</a>
                  <sup className="categories__list__count">12</sup>
                </li>
                <li className="categories__list__item">
                  <a className="categories__list__item__link" href="#0">Здоровье</a>
                  <sup className="categories__list__count">4</sup>
                </li>
                <li className="categories__list__item">
                  <a className="categories__list__item__link" href="#0">Образ жизни</a>
                  <sup className="categories__list__count">145</sup>
                </li>
                <li className="categories__list__item">
                  <a className="categories__list__item__link" href="#0">Музыка</a>
                  <sup className="categories__list__count">28</sup>
                </li>
                <li className="categories__list__item">
                  <a className="categories__list__item__link" href="#0">Спорт</a>
                  <sup className="categories__list__count">62</sup>
                </li>
                <li className="categories__list__item">
                  <a className="categories__list__item__link" href="#0">Йога</a>
                  <sup className="categories__list__count">8</sup>
                </li>

              </ul>
            </section>
          </aside>

        </div>
        <section className="product container">
          <h2 className="section__title">Наши изделия</h2>
          <div className="products__list">
            <div className="product__wrapper">
              <div className="product__image__wrapper">
                <picture>
                  <source srcSet="image/shop-item-desk1.jpg" media="(min-width: 1200px)"/>
                    <source srcSet="image/shop-item-tablet1.jpg"
                            media="(min-width: 641px) and (max-width: 1199px)"/>
                      <source srcSet="image/shop-item-mobile1.jpg" media="(max-width: 640px)"/>
                        <img className="product__image" src="image/shop-item-desk1.jpg"/>
                </picture>
              </div>
              <div className="product__text">
                <h2 className="section__title section__title__product">Подушки на диван</h2>
                <div className="product__text__description"><p className="product__info">Набор из двух подушек с
                  модными принтами. Видео о
                  создании <a className="product__info__link" href="#0">здесь</a>.</p></div>
                <div className="product__price">
                  <div className="price__wrapper">
                    <p className="old__price">1000 ₽</p>
                    <p className="new__price">800 ₽</p>
                  </div>
                  <button className="btn__link">В магазин</button>
                </div>
              </div>
            </div>
            <div className="product__wrapper">
              <div className="product__image__wrapper">
                <picture>
                  <source srcSet="image/shop-item-desk2.jpg" media="(min-width: 1200px)"/>
                    <source srcSet="image/shop-item-tablet2.jpg"
                            media="(min-width: 641px) and (max-width: 1199px)"/>
                      <source srcSet="image/shop-item-mobile2.jpg" media="(max-width: 640px)"/>
                        <img className="product__image" src="image/shop-item-desk2.jpg"/>
                </picture>
              </div>
              <div className="product__text">
                <h2 className="section__title section__title__product">Кукла «Зайчик»</h2>
                <div className="product__text__description"><p className="product__info">Интерьерная рукодельная
                  кукла «Зайчик», созданию которой посвящена<a className="product__info__link" href="#0">
                    весенняя серия постов</a> в блоге и несколько
                  подкастов.</p></div>
                <div className="product__price">
                  <div className="price__wrapper">
                    <p className="new__price">3500 ₽</p>
                  </div>
                  <button className="btn__link">В магазин</button>
                </div>
              </div>
            </div>
            <div className="product__wrapper">
              <div className="product__image__wrapper">
                <picture>
                  <source srcSet="image/shop-item-desk3.jpg" media="(min-width: 1200px)"/>
                    <source srcSet="image/shop-item-tablet3.jpg"
                            media="(min-width: 641px) and (max-width: 1199px)"/>
                      <source srcSet="image/shop-item-mobile3.jpg" media="(max-width: 640px)"/>
                        <img className="product__image" src="image/shop-item-desk3.jpg"/>
                </picture>
              </div>
              <div className="product__text">
                <h2 className="section__title section__title__product">Шестиугольная рамка</h2>
                <div className="product__text__description"><p className="product__info">Необычная рамка для
                  украшения дома из видео <a className="product__info__link" href="#0">«Как сделать рамку из
                    подручных средств за 30 минут» </a></p></div>
                <div className="product__price">
                  <div className="price__wrapper">
                    <p className="old__price">500 ₽</p>
                    <p className="new__price">400 ₽</p>
                  </div>
                  <button className="btn__link">В магазин</button>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>
      <footer className="footer container">
        <div className="wrapper">
          <address className="socials__footer">
            <ul className="social__lists">
              <li className="social__item">
                <a href="#0" className="social__link social__item__link__dribbble">
                  <span className="social__link__name">dribbble</span>
                </a>
              </li>
              <li className="social__item">
                <a href="#0" className="social__link social__item__link__pinterest">
                  <span className="social__link__name">pinterest</span>
                </a>
              </li>
              <li className="social__item">
                <a href="#0" className="social__link social__item__link__tumbler">
                  <span className="social__link__name">tumbler</span>
                </a>
              </li>
            </ul>
          </address>
          <div className="copyright">
            <a href="#0" className="copyright__link">Copyright © 2009–2019 City Blog LLC.</a>
          </div>
        </div>
      </footer>
      </body>
  )
}

export default App
