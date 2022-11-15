import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
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
      navigate("/pageproduct");
    } catch (e) {
      setError(e.message);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1>Войти</h1>
          <br />

          <label for="email">
            <b> Введите Email</b>
          </label>
          <input
            className="inpSign"
            type="text"
            placeholder="Введите Email"
            name="email"
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
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit" class="registerbtn">
            Войти
          </button>

          <div class="container signin">
            <p>
              У Вас нет аккаунта? <Link to="/signUp">Регистрация</Link>.
            </p>
          </div>
        </div>
      </form>
      <Account />
    </>
  );
};

export default SignIn;
