import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <>
      <div className="textNbutton">
        <p className="text">
          {" "}
          <b> 404 булочка не найдена : ( </b>
        </p>
        <Link to="/">
          <button> Вернуться к булочкам </button>
        </Link>
      </div>
      <div className="pageNotfoundIMG">
        <img
          src="https://www.italybite.it/modules/ybc_blog/views/img/post/20211230-ITBI-art50-Cantucci-copertina.jpg"
          alt=""
          className="imgNotfoud"
        />
      </div>
    </>
  );
};

export default PageNotFound;
