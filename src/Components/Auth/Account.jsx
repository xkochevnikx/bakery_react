import React, { useContext } from "react";
import "./Account.css";
import { UserContext } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = useContext(UserContext);

  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      alert("Вы вышли из аккаунта");
      navigate("/pageproduct");
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <div className="account_box">
      <h1>Аккаунт</h1>
      <p>UserEmail:{user && user.email}</p>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
};

export default Account;
