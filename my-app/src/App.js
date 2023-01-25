import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import { NewsList } from "./components/Main/NewsList/NewsList";
import { TrendsList } from "./components/Main/Trends/TrendsList";
import { SideSectionPosts } from "./components/Main/SideColumn/SideSectionPosts/SideSectionPosts";
import { TagsList } from "./components/Main/SideColumn/Tags/TagsList";
import { ThemesList } from "./components/Main/SideColumn/Themes/ThemesList";
import { ProductsList } from "./components/Main/ProductsList/ProductsList";
// import styled from "@emotion/styled";

// const TestDiv = styled.div`
//   background: ${(props) => (props.isBlack ? "black" : "yellow")};
//   width: 100px;
//   height: 100px;
// `;//!!!!!!!!!!!Следующие уроки by OLeg

const App = () => {
  // const isBlack = false;
  return (
    <>
      {/*<TestDiv isBlack={isBlack}>TESTETSTE</TestDiv>*/}
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
              <SideSectionPosts />
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
                <TagsList />
              </ul>
            </section>
            <section className="side__sections">
              <h2 className="side__title">Темы</h2>
              <ul className="categories__list">
                <ThemesList />
              </ul>
            </section>
          </aside>
        </div>
        <section className="product container">
          <h2 className="section__title">Наши изделия</h2>
          <div className="products__list">
            <ProductsList />
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

// перейти на Emotion(Styled-Components)
//
//
//
//
//
//
//
//
//
