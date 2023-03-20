import React, { useContext, useState } from "react";
import { TagsContext } from "../../../../context/TagsContext";

export const Tag = ({ item }) => {
  const { title, /link/ } = item;
  const { selectedTags, setSelectedTags } = useContext(TagsContext);

  // const [isSelected, setSelected] = useState(false);
  // // isSelected - значение
  // // setSelected - функция которая меняет значение isSelected

  // const toggleTag = () => {
  //   setSelected((prevState) => !prevState);
  // };
  // const isSelectedClass = isSelected
  //     ? "tag__list__item__selected"
  //     : "tag__list__item";
  const isSelectedClass = selectedTags.includes(title.toLowerCase())
    ? "tag__list__item__selected"
    : "tag__list__item";

  const selectTag = () => {
    console.log(title.toLowerCase(), "title.toLowerCase()");
    if (selectedTags.includes(title.toLowerCase())) {
      const tagsWithOutClicked = selectedTags.filter(
        (tag) => tag !== title.toLowerCase()
      );
      setSelectedTags(tagsWithOutClicked);
    } else {
      // если его нет в массиве то добавляем
      // TODO почитать про spread оеератор для массива и для объектов
      setSelectedTags([...selectedTags, title.toLowerCase()]);
    }
  };

  return (
    <li className={isSelectedClass} onClick={selectTag}>
      <a className="tag__list__link">{title}</a>
    </li>
  );
};
