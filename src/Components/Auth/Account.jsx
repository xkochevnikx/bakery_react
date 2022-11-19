import React, { useContext } from "react";
import "./Account.css";
import { UserContext } from "../../context/AuthContextProvider";
import { Link } from "react-router-dom";

const Account = () => {
  const { user, logout, handleLogout } = useContext(UserContext);

  return (
    <div className="account_box">
      <h1>Аккаунт</h1>
      <p>UserEmail:{user && user.email}</p>
      {user && user.email === "xkochevnikx@protonmail.com" ? (
        <Link to="/adminpage">
          <button onClick={() => handleLogout()}> Выйти</button>
          <button> перейти в админку </button>
        </Link>
      ) : (
        <Link to="/pageproduct">
          <button onClick={() => handleLogout()}> Выйти</button>
        </Link>
      )}
    </div>
  );
};

export default Account;
