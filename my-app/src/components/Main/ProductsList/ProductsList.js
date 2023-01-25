import React from "react";
import shopItemDesk from "../../../image/shop-item-desk1.jpg";
import shopItemTablet from "../../../image/shop-item-tablet1.jpg";
import shopItemMobile from "../../../image/shop-item-mobile1.jpg";
import shopItemImage from "../../../image/shop-item-desk1.jpg";
import shopItemDesk2 from "../../../image/shop-item-desk2.jpg";
import shopItemTablet2 from "../../../image/shop-item-tablet2.jpg";
import shopItemMobile2 from "../../../image/shop-item-mobile2.jpg";
import shopItemImage2 from "../../../image/shop-item-desk2.jpg";
import shopItemDesk3 from "../../../image/shop-item-desk3.jpg";
import shopItemTablet3 from "../../../image/shop-item-tablet3.jpg";
import shopItemMobile3 from "../../../image/shop-item-mobile3.jpg";
import shopItemImage3 from "../../../image/shop-item-desk3.jpg";
import { Products } from "./Products";

const productsList = [
  {
    id: 1,
    imageForDesk: shopItemDesk,
    imageForTablet: shopItemTablet,
    imageForMobile: shopItemMobile,
    image: shopItemImage,
    imageAlt: "Подушки на диван",
    title: "Подушки на диван",
    description: "Набор из двух подушек с модными принтами. Видео о создании",
    link: "/",
    infoLink: " здесь",
    descriptionCont: ".",
    oldPrice: "1000 ₽",
    newPrice: "800 ₽",
    buttonLink: "В магазин",
  },
  {
    id: 2,
    imageForDesk: shopItemDesk2,
    imageForTablet: shopItemTablet2,
    imageForMobile: shopItemMobile2,
    image: shopItemImage2,
    imageAlt: "Кукла «Зайчик»",
    title: "Кукла «Зайчик»",
    description:
      "Интерьерная рукодельная кукла «Зайчик», созданию которой посвящена",
    link: "/",
    infoLink: " весенняя серия постов ",
    descriptionCont: "в блоге и несколько подкастов.",
    oldPrice: "",
    newPrice: "3500 ₽",
    buttonLink: "В магазин",
  },
  {
    id: 3,
    imageForDesk: shopItemDesk3,
    imageForTablet: shopItemTablet3,
    imageForMobile: shopItemMobile3,
    image: shopItemImage3,
    imageAlt: "Шестиугольная рамка",
    title: "Шестиугольная рамка",
    description: "Необычная рамка для украшения дома из видео",
    link: "/",
    infoLink: "« Как сделать рамку из подручных средств за 30 минут» ",
    descriptionCont: "",
    oldPrice: "500 ₽",
    newPrice: "400 ₽",
    buttonLink: "В магазин",
  },
];

export const ProductsList = () => {
  return (
    <>
      {productsList.map((products) => (
        <Products key={products.id} item={products} />
      ))}
    </>
  );
};
