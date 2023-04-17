import React from 'react';
import Logo from '../Logo.png';
import {Link} from "react-router-dom";

export function Login() {
    return (
        <div>
            <div className="bg-lime-100 min-h-screen -mb-12 flex flex-col px-48 py-16">
                <img src={Logo} alt="Logo" className="mx-auto pt-8"/>

                <p className="text-5xl font-serif font-bold text-center mt-2">
                    Квантовые компьютеры
                </p>

                <div className="border-2 border-black mt-16 mx-auto w-1/3 px-8 py-4 rounded-2xl bg-white">
                    <p className="text-2xl font-bold">
                        Логин
                    </p>
                    <input className="border-2 border-black text-xl font-medium rounded-md mt-1 pl-1.5 w-full"/>

                    <p className="text-2xl font-bold mt-2">
                        Пароль
                    </p>
                    <input
                        className="border-2 border-black text-xl font-medium rounded-md mt-1 pl-1.5 w-full"
                        type="password"/>

                    <div className="grid grid-cols-2 mt-2">
                        <div className="flex">
                            <input type="checkbox" className="w-4"/>
                            <p className="text-xl font-bold ml-2  truncate">
                                Запомнить меня
                            </p>
                        </div>

                        <Link to="/requests"
                              className="flex justify-end text-xl font-bold  truncate hover:underline">
                            Забыли пароль?
                        </Link>
                    </div>

                    <Link to="/requests" className="flex justify-center text-3xl font-bold mt-2 hover:underline">
                        Войти
                    </Link>
                </div>

                <div className="border-2 border-black mt-8 mx-auto w-1/3 px-8 py-4 rounded-2xl bg-white">
                    <p className="text-2xl font-bold truncate">
                        Войти с помощью
                    </p>

                    <Link to="/requests"
                          className="flex justify-center mt-2 w-2/5 text-center text-2xl font-bold truncate border-2 border-black rounded-xl bg-white hover:bg-gray-200 hover:shadow hover:shadow-black">
                        Bauman SSO
                    </Link>

                    <div className="flex flex-row mt-2">
                        <input type="checkbox" className="w-4"/>
                        <p className="text-xl font-bold ml-2 truncate">
                            Запомнить меня
                        </p>
                    </div>
                </div>
            </div>


            <footer>
                <hr className="border-black border"/>
                <div className="flex space-x-24 justify-center mt-2 ">
                    <a href="https://vk.com/abmanyl"
                       className="text-xl font-bold hover:underline">
                        Связаться с нами
                    </a>

                    <a href="https://vk.com/abmanyl"
                       className="text-xl font-bold hover:underline">
                        Помощь
                    </a>

                    <a href="/login"
                       className="text-xl font-bold hover:underline">
                        О проекте
                    </a>
                </div>
            </footer>
        </div>
    );
}