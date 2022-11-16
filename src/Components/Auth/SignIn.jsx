import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContextProvider";
import Account from "./Account";

const SignIn = () => {
  const { signIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/basket");
    } catch (e) {
      setError(e.message);
    }
  }
  return (
    <div id="signUp_box">
      <form id="signUpForm" onSubmit={handleSubmit}>
        <div id="signUpContainer">
          <h1>Войти</h1>
          <br />
          <div id="signUpInpBox">
            <b> Введите Email</b>
            <input
              className="inpAuth"
              type="text"
              placeholder="Введите Email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <b>Пароль</b>
            <input
              className="inpAuth"
              type="password"
              placeholder="Введите пароль"
              name="psw"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button type="submit" className="inpAuth">
              Войти
            </button>
          </div>

          <div id="ignUpLink">
            <p>
              У Вас уже нет аккаунтa? <Link to="/signUn">Регистрация</Link>.
            </p>
          </div>
        </div>
      </form>
      <Account />
    </div>
  );
};

export default SignIn;
