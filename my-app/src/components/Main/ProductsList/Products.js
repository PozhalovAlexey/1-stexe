import React from "react";

export const Products = ({ item }) => {
  const {
    imageForDesk,
    imageForTablet,
    imageForMobile,
    image,
    imageAlt,
    title,
    description,
    link,
    infoLink,
    descriptionCont,
    oldPrice,
    newPrice,
    buttonLink,
  } = item;
  return (
    <div className="product__wrapper">
      <div className="product__image__wrapper">
        <picture>
          <source srcSet={imageForDesk} media="(min-width: 1200px)" />
          <source
            srcSet={imageForTablet}
            media="(min-width: 641px) and (max-width: 1199px)"
          />
          <source srcSet={imageForMobile} media="(max-width: 640px)" />
          <img className="product__image" src={image} alt={imageAlt} />
        </picture>
      </div>
      <div className="product__text">
        <h2 className="section__title section__title__product">{title}</h2>
        <div className="product__text__description">
          <p className="product__info">
            {description}
            <a className="product__info__link" href={link}>
              {infoLink}
            </a>
            {descriptionCont}
          </p>
        </div>
        <div className="product__price">
          <div className="price__wrapper">
            <p className="old__price">{oldPrice}</p>
            <p className="new__price">{newPrice}</p>
          </div>
          <button className="btn__link">{buttonLink}</button>
        </div>
      </div>
    </div>
  );
};
