import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import { NewsList } from "./components/Main/NewsList/NewsList";
import { TrendsList } from "./components/Main/Trends/TrendsList";

const App = () => {
  return (
    <>
      <Header />

      <main className="page">
        <div className="pop__up visually__hidden">
          <div className="pop__up__container">
            <div className="feedback">
              <h2 className="section__title">Ваш фидбэк</h2>
              <form className="feedback__form">
                <div className="form__row">
                  <label className="form__label" htmlFor="question__select__id">
                    Как часто вы заходите на сайт?
                  </label>
                  <select
                    id="question__select__id"
                    className="question__select"
                    form="question__select__id"
                  >
                    <option selected>Почти каждый день</option>
                    <option>Раз в несколько дней</option>
                    <option>Раз в несколько недель</option>
                    <option>Несколько раз в год</option>
                  </select>
                </div>
                <div className="form__row">
                  <span className="form__hint">
                    Вы подписаны на e-mail рассылку?
                  </span>
                  <label className="radio__group">
                    <input
                      type="radio"
                      className="radio"
                      name="radio__group"
                      checked
                    />
                    <span className="radio__group__text">Да</span>
                  </label>
                  <label className="radio__group">
                    <input type="radio" className="radio" name="radio__group" />
                    <span className="radio__group__text">Нет</span>
                  </label>
                </div>
                <div className="form__row">
                  <label className="form__label">
                    Расскажите, какой контент вы хотели бы видеть на нашем
                    сайте?
                    <textarea className="form__textarea">
                      Может, больше рецептов?
                    </textarea>
                  </label>
                </div>
                <button className="send__btn" type="button">
                  Отправить
                </button>
              </form>
            </div>
            <button className="btn__close" type="button">
              <img src="svg/form-x.svg" alt="Закрыть окно" />
            </button>
          </div>
        </div>
        <section className="trends">
          <h2 className="section__title">Сейчас в тренде</h2>
          <div className="trends__wrapper">
            <TrendsList />
          </div>
        </section>
        <div className="wrapper__page__container container">
          <div className="main">
            <NewsList />
          </div>
          <aside className="side__column">
            <section className="side__sections">
              <h2 className="side__title">Новые посты</h2>
              <article className="new__posts">
                <div className="new__posts__img">
                  <img src="image/2.jpg" alt="Силуэт на пляже" />
                </div>
                <div className="new__content">
                  <time className="new__posts__date">14 июня 2019</time>
                  <h3 className="new__posts__content">
                    <a href="/" className="new__posts__link">
                      {" "}
                      10 мест, ради которых стоит проснуться
                    </a>
                  </h3>
                </div>
              </article>
              <article className="new__posts">
                <div className="new__posts__img">
                  <img src="image/151.jpg" alt="Девушка занимается йогой" />
                </div>
                <div className="new__content">
                  <time className="new__posts__date">14 июня 2019</time>
                  <h3 className="new__posts__content">
                    <a href="/" className="new__posts__link">
                      {" "}
                      Йога для домашних
                    </a>
                  </h3>
                </div>
              </article>
              <article className="new__posts">
                <div className="new__posts__img">
                  <img src="image/45.jpg" alt="Красивый интерьер балкона" />
                </div>
                <div className="new__content">
                  <time className="new__posts__date">14 июня 2019</time>
                  <h3 className="new__posts__content">
                    <a href="/" className="new__posts__link">
                      {" "}
                      Как мы превратили классное место в балкон
                    </a>
                  </h3>
                </div>
              </article>
              <article className="new__posts">
                <div className="new__posts__img">
                  <img src="image/501.jpg" alt="Красивые блюда" />
                </div>
                <div className="new__content">
                  <time className="new__posts__date">14 июня 2019</time>
                  <h3 className="new__posts__content">
                    <a href="/" className="new__posts__link">
                      {" "}
                      Кулинарный подход к науке
                    </a>
                  </h3>
                </div>
              </article>
              <article className="new__posts">
                <div className="new__posts__img">
                  <img src="image/7.jpg" alt="Прически девушек" />
                </div>
                <div className="new__content">
                  <time className="new__posts__date">14 июня 2019</time>
                  <h3 className="new__posts__content">
                    <a href="/" className="new__posts__link">
                      {" "}
                      Лучшие прически для распущенных волос
                    </a>
                  </h3>
                </div>
              </article>
            </section>
            <section className="side__sections">
              <form className="search__form" action="/">
                <label className="visually__hidden" htmlFor="search">
                  поиск
                </label>
                <div className="search__form__row">
                  <input
                    className="search__input"
                    type="search"
                    placeholder="Найти..."
                    id="search"
                    required
                  />
                  <button className="search__button">
                    <span className="visually__hidden">Найти</span>
                  </button>
                </div>
              </form>
            </section>
            <section className="side__sections">
              <h2 className="side__title">Рассылка</h2>
              <form className="subscribe__form" action="/">
                <label className="visually__hidden" htmlFor="subscribeinput">
                  Введите ваш email адрес
                </label>
                <input
                  className="subscribe__input"
                  type="email"
                  placeholder="Ваше email адрес"
                  id="subscribeinput"
                  required
                />
                <button className="subscribe__btn">Подписаться</button>
              </form>
            </section>
            <section className="side__sections">
              <h2 className="side__title">Теги</h2>
              <ul className="tag__list">
                <li className="tag__list__item">
                  <a href="/" className="tag__list__link">
                    Fashion
                  </a>
                </li>
                <li className="tag__list__item">
                  <a href="/" className="tag__list__link">
                    Music
                  </a>
                </li>
                <li className="tag__list__item">
                  <a href="/" className="tag__list__link">
                    Lifestyle
                  </a>
                </li>
                <li className="tag__list__item">
                  <a href="/" className="tag__list__link">
                    Art
                  </a>
                </li>
                <li className="tag__list__item">
                  <a href="/" className="tag__list__link">
                    Interior
                  </a>
                </li>
                <li className="tag__list__item">
                  <a href="/" className="tag__list__link">
                    Travel
                  </a>
                </li>
                <li className="tag__list__item">
                  <a href="/" className="tag__list__link">
                    Food
                  </a>
                </li>
                <li className="tag__list__item">
                  <a href="/" className="tag__list__link">
                    Health
                  </a>
                </li>
              </ul>
            </section>

            <section className="side__sections">
              <h2 className="side__title">Темы</h2>
              <ul className="categories__list">
                <li className="categories__list__item">
                  <a className="categories__list__item__link" href="/">
                    Красота
                  </a>
                  <sup className="categories__list__count">12</sup>
                </li>
                <li className="categories__list__item">
                  <a className="categories__list__item__link" href="/">
                    Здоровье
                  </a>
                  <sup className="categories__list__count">4</sup>
                </li>
                <li className="categories__list__item">
                  <a className="categories__list__item__link" href="/">
                    Образ жизни
                  </a>
                  <sup className="categories__list__count">145</sup>
                </li>
                <li className="categories__list__item">
                  <a className="categories__list__item__link" href="/">
                    Музыка
                  </a>
                  <sup className="categories__list__count">28</sup>
                </li>
                <li className="categories__list__item">
                  <a className="categories__list__item__link" href="/">
                    Спорт
                  </a>
                  <sup className="categories__list__count">62</sup>
                </li>
                <li className="categories__list__item">
                  <a className="categories__list__item__link" href="/">
                    Йога
                  </a>
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
                  <source
                    srcSet="image/shop-item-desk1.jpg"
                    media="(min-width: 1200px)"
                  />
                  <source
                    srcSet="image/shop-item-tablet1.jpg"
                    media="(min-width: 641px) and (max-width: 1199px)"
                  />
                  <source
                    srcSet="image/shop-item-mobile1.jpg"
                    media="(max-width: 640px)"
                  />
                  <img
                    className="product__image"
                    src="image/shop-item-desk1.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div className="product__text">
                <h2 className="section__title section__title__product">
                  Подушки на диван
                </h2>
                <div className="product__text__description">
                  <p className="product__info">
                    Набор из двух подушек с модными принтами. Видео о создании{" "}
                    <a className="product__info__link" href="/">
                      здесь
                    </a>
                    .
                  </p>
                </div>
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
                  <source
                    srcSet="image/shop-item-desk2.jpg"
                    media="(min-width: 1200px)"
                  />
                  <source
                    srcSet="image/shop-item-tablet2.jpg"
                    media="(min-width: 641px) and (max-width: 1199px)"
                  />
                  <source
                    srcSet="image/shop-item-mobile2.jpg"
                    media="(max-width: 640px)"
                  />
                  <img
                    className="product__image"
                    src="image/shop-item-desk2.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div className="product__text">
                <h2 className="section__title section__title__product">
                  Кукла «Зайчик»
                </h2>
                <div className="product__text__description">
                  <p className="product__info">
                    Интерьерная рукодельная кукла «Зайчик», созданию которой
                    посвящена
                    <a className="product__info__link" href="/">
                      весенняя серия постов
                    </a>{" "}
                    в блоге и несколько подкастов.
                  </p>
                </div>
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
                  <source
                    srcSet="image/shop-item-desk3.jpg"
                    media="(min-width: 1200px)"
                  />
                  <source
                    srcSet="image/shop-item-tablet3.jpg"
                    media="(min-width: 641px) and (max-width: 1199px)"
                  />
                  <source
                    srcSet="image/shop-item-mobile3.jpg"
                    media="(max-width: 640px)"
                  />
                  <img
                    className="product__image"
                    src="image/shop-item-desk3.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div className="product__text">
                <h2 className="section__title section__title__product">
                  Шестиугольная рамка
                </h2>
                <div className="product__text__description">
                  <p className="product__info">
                    Необычная рамка для украшения дома из видео{" "}
                    <a className="product__info__link" href="/">
                      «Как сделать рамку из подручных средств за 30 минут»{" "}
                    </a>
                  </p>
                </div>
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
                <a
                  href="/"
                  className="social__link social__item__link__dribbble"
                >
                  <span className="social__link__name">dribbble</span>
                </a>
              </li>
              <li className="social__item">
                <a
                  href="/"
                  className="social__link social__item__link__pinterest"
                >
                  <span className="social__link__name">pinterest</span>
                </a>
              </li>
              <li className="social__item">
                <a
                  href="/"
                  className="social__link social__item__link__tumbler"
                >
                  <span className="social__link__name">tumbler</span>
                </a>
              </li>
            </ul>
          </address>
          <div className="copyright">
            <a href="/" className="copyright__link">
              Copyright © 2009–2019 City Blog LLC.
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
