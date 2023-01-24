import React from "react";

export const SideSection = ({ item }) => {
  const { image, imageAlt, createDate, title, link } = item;
  return (
    <article className="new__posts">
      <div className="new__posts__img">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="new__content">
        <time className="new__posts__date">{createDate}</time>
        <h3 className="new__posts__content">
          <a href="/my-app/public" className="new__posts__link">
            {" "}
            {link}
            {title}
          </a>
        </h3>
      </div>
    </article>
  );
};
