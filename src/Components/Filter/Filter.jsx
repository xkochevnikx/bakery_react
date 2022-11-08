import React from "react";

const Filter = ({ category, setCategory }) => {
  return (
    <>
      <form
        defaultValue="all"
        value={category}
        onChange={e => setCategory(e.target.value)}>
        <input type="radio" value="хлеб" name="булки" />
        <label for="хлеб">хлебушек</label>
        <br />
        <input type="radio" value="выпечка" name="булки" />
        <label for="выпечка">выпечка</label>
        <br />
        <input type="radio" value="десерты" name="булки" />
        <label for="десерты">десерты</label>
        <br />
        <input type="radio" value="all" name="булки" />
        <label for="all">вся выпечка</label>
      </form>
    </>
  );
};

export default Filter;
