import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { UserContext } from "../../context/AuthContextProvider";
import Account from "./Account";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1>Регистрация</h1>
          <p>Пожалуйста заполните форму для создания аккаунта</p>
          <br />

          <label for="email">
            <b> Введите Email</b>
          </label>
          <input
            className="inpSign"
            type="text"
            placeholder="Введите Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label for="psw">
            <b>Пароль</b>
          </label>
          <input
            className="inpSign"
            type="password"
            placeholder="Введите пароль"
            name="psw"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit" class="registerbtn">
            Регистрация
          </button>

          <div class="container signin">
            <p>
              У Вас уже есть аккаунт? <Link to="/signIn">Войти</Link>.
            </p>
          </div>
        </div>
      </form>
      <Account />
    </>
  );
};

export default SignUp;
