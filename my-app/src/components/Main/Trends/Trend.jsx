import React from "react";
import "../../../App.css";
export const Trend = ({ item }) => {
  const { link, name, title, tags, cssClass } = item;
  const cssClasses = `trends__item__wrapper ${cssClass}`;
  return (
    <div className={cssClasses}>
      <div className="trends__item">
        <ul className="tags">
          {tags.map(({ name, link, id }) => (
            <li key={id} className="tags__item">
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
