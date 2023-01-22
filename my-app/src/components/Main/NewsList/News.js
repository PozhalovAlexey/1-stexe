import React from "react";

export const News = ({ item }) => {
  const { imageAlt, image, author, title, content, tags, createDate } = item;
  return (
    <article className="news">
      <div className="news__img__wrp">
        <img className="news__img" src={image} alt={imageAlt} />
      </div>
      <div className="news__content">
        <header className="news__content__header">
          <ul className="news__content__tags">
            {tags.map(({ name, link }) => (
              <li className="news__tags__item">
                <a href={link} className="news__tags__link">
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <h3 className="news__container__title">
            <a href="/" className="news__title__link">
              {title}
            </a>
          </h3>
          <div className="news__content__info">
            <time className="news__content__date">{createDate}</time>
            <div className="news__content__author">
              <a href="/" className="news__content__author__link">
                {author}
              </a>
            </div>
          </div>
        </header>
        <div className="news__info__text">
          <p>{content}</p>
        </div>
      </div>
    </article>
  );
};
