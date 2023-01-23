import React from "react";

export const Trends = ({ item }) => {
  const { link, name, title, tags }= item;
  return (
      <div className = trends__item__wrapper>
      <div className="trends__item">
        <ul className="tags">
          {tags.map(({ name, link }) => (
            <li className="tags__item">
              <a className="tags__item__link" href={link}>
                {name}
              </a>
            </li>
          ))}
          <li className="tags__item">
            <a className="tags__item__link" href={link}>
              {name}
            </a>
          </li>
        </ul>
        <h2 className="trends__title">
          <a className="trends__title__link">{title}</a>
        </h2>
      </div>
    </div>
  );
};
