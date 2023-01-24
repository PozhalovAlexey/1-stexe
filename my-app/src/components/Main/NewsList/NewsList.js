import React from "react";
import lastPost1 from "../../../image/last-post1.jpg";
import lastPost2 from "../../../image/last-post2.jpg";
import lastPost3 from "../../../image/last-post3.jpg";
import lastPost4 from "../../../image/last-post4.jpg";
import lastPost5 from "../../../image/last-post5.jpg";
import lastPost6 from "../../../image/last-post6.jpg";
import lastPost7 from "../../../image/last-post4.jpg";
import { News } from "./News";
const newsList = [
  {
    id: 1,
    image: lastPost1,
    imageAlt: "Силуэт на пляже",
    title: "10 мест, ради которых стоит проснуться на рассвете",
    content:
      "Итак, вы в Питере. Раннее утро. Лед с рек и каналов уже ушел, запущены фонтаны города… Музеи еще закрыты. Что посмотреть?",
    author: "Неизвестный автор",
    tags: [
      {
        id: 1,
        name: "travel",
        link: "",
      },
      {
        id: 2,
        name: "health",
        link: "",
      },
    ],
    createDate: "10 июня 2019",
  },
  {
    id: 2,
    image: lastPost2,
    imageAlt: "Девушка занимается йогой",
    title: "Йога для начинающих в домашних условиях",
    content:
      "Расскажем, какие упражнения выбрать и как сделать коврик для занятий йогой из того, что можно найти в шкафу.",
    author: "Неизвестный автор",
    tags: [
      {
        id: 1,

        name: "health",
        link: "",
      },
      {
        id: 2,

        name: "lifestyle",
        link: "",
      },
    ],
    createDate: "10 июня 2019",
  },
  {
    id: 3,
    image: lastPost3,
    imageAlt: "Девушка танцует",
    title: "Лучшие музыкальные фестивали этого лета",
    content: [
      "Лето на носу, а с ним и музыкальные фестивали. На каком же из них вы разобьёте свою палатку?,",
      "Мы составили список лучших летних фестивалей по всему миру.",
    ],

    author: "Неизвестный автор",
    tags: [
      {
        id: 1,
        name: "music",
        link: "",
      },
      {
        id: 2,
        name: "",
        link: "",
      },
    ],
    createDate: "10 июня 2019",
  },
  {
    id: 4,
    image: lastPost4,
    imageAlt: "Еда на столе",
    title: "Наукоёмкий подход к кулинарии",
    content:
      "Узнаем основы проектирования новых пищевых и около-пищевых опытов,вскроем физику, химию и микробиологию еды.",
    author: "Неизвестный автор",
    tags: [
      {
        id: 1,

        name: "lifestyle",
        link: "",
      },
      {
        id: 2,

        name: "food",
        link: "",
      },
    ],
    createDate: "10 июня 2019",
  },
  {
    id: 5,
    image: lastPost5,
    imageAlt: "Подушечка",
    title: "делаем модные принты на подушках для интерьера",
    content:
      "Подушки для дивана целесообразнее заказать в съемных чехлах на молнии, если потребуется чистка подушек, проще снять чехлы, чем везти подушку в химчистку.",
    author: "Неизвестный автор",
    tags: [
      {
        id: 1,
        name: "lifestyle",
        link: "",
      },
      {
        id: 2,
        name: "interior",
        link: "",
      },
      { id: 3, name: "art", link: "" },
    ],
    createDate: "10 июня 2019",
  },
  {
    id: 6,
    image: lastPost6,
    imageAlt: "Силуэт на пляже",
    title: "10 мест, ради которых стоит проснуться на рассвете",
    content:
      "Для начала нужно определиться, в каком формате пройдёт ваше путешествие. Это зависит от многих факторов, не только от ваших желаний и интересов.?",
    author: "Неизвестный автор",
    tags: [
      { id: 1, name: "travel", link: "" },
      { id: 2, name: "lifestyle", link: "" },
    ],
    createDate: "10 июня 2019",
  },
  {
    id: 7,
    image: lastPost7,
    imageAlt: "Еда на столе",
    title: "Наукоёмкий подход к кулинарии",
    content:
      "Узнаем основы проектирования новых пищевых и около-пищевых опытов, вскроем физику, химию и микробиологию еды.",
    author: "Неизвестный автор",
    tags: [
      { id: 1, name: "lifestyle", link: "" },
      { id: 2, name: "food", link: "" },
    ],
    createDate: "10 июня 2019",
  },
];

export const NewsList = () => {
  return (
    <>
      {newsList.map((news) => (
        <News key={news.id} item={news} />
      ))}
    </>
  );
};
