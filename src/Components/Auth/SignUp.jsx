import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/AuthContextProvider';
import Account from './Account';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { createUser } = useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            alert(`Добро пожаловать ${email}`);
            navigate('/basket');
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }

    return (
        <div id='signUp_box'>
            <form
                id='signUpForm'
                onSubmit={handleSubmit}>
                <div id='signUpContainer'>
                    <h1>Регистрация</h1>
                    <p>Пожалуйста заполните форму для создания аккаунта</p>
                    <br />
                    <div id='signUpInpBox'>
                        <b> Введите Email</b>
                        <input
                            className='inpAuth'
                            type='text'
                            placeholder='Введите Email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <b>Пароль</b>
                        <input
                            className='inpAuth'
                            type='password'
                            placeholder='Введите пароль'
                            name='psw'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            type='submit'
                            className='inpAuth'>
                            Регистрация
                        </button>
                    </div>

                    <div id='ignUpLink'>
                        <p>
                            У Вас уже есть аккаунт?{' '}
                            <Link to='/signIn'>Войти</Link>.
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
