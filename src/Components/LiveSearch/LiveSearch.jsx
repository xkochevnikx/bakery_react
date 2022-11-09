import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

//? функция живого поиска. В хедер вствлен этот компонет и внутри него инпут. Когда мы пишем в нем запрос он сохраняется в стейт - useEffect видит что значение изменлось и запускает условие которое проверяет адрес нахождения и если он тру вызывает setParamsSearch который в объекте передаёт ключ поиска и значение нашего стейта. этот адрес будет равен значению стейта и далее useLocation в контексте поймает его и подставит в запрос функции на отображение продукта.
const LiveSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const [paramsSearch, setParamsSearch] = useSearchParams();

  const location = useLocation();

  console.log(location);

  useEffect(() => {
    if (location.pathname === "/pageproduct") {
      setParamsSearch({
        q: searchValue,
      });
    }
  }, [searchValue]);

  return (
    <input
      id="inpSearch"
      type="text"
      placeholder="найти буличку"
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
    />
  );
};

export default LiveSearch;
