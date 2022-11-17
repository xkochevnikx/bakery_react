import React from "react";

//? создаём компонет и помешаем в его вёрстку, кнопки помещаем в форму которая при изменении будет менять стейт category закинутый сюда пропсом из родительского элемента. value это значение которое будет прилетать в стейт
const Filter = ({ category, setCategory }) => {
  //? у формы по умолчанию дефолтное значение defaultValue="all"  то есть когда ничего не выбрано в стейт категория попадает all

  return (
    <>
      <form
        id="formInpBox"
        defaultValue="all"
        value={category}
        onChange={e => setCategory(e.target.value)}>
        <input
          className="inpFormFilter"
          type="radio"
          value="хлеб"
          name="булки"
        />
        <label for="хлеб">хлебушек</label>
        <br />
        <input
          className="inpFormFilter"
          type="radio"
          value="выпечка"
          name="булки"
        />
        <label for="выпечка">выпечка</label>
        <br />
        <input
          className="inpFormFilter"
          type="radio"
          value="десерты"
          name="булки"
        />
        <label for="десерты">десерты</label>
        <br />
        <input
          className="inpFormFilter"
          type="radio"
          value="all"
          name="булки"
        />
        <label for="all">вся выпечка</label>
      </form>
    </>
  );
};

export default Filter;
