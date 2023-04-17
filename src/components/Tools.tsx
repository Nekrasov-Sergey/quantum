import React from 'react';
import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react';
import Burger from '../Burger.png'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function Tools() {
    return (
        <div>
            <div className="bg-lime-100 min-h-screen -mb-12 flex flex-col px-48 py-16">
                <div className="grid grid-cols-2">
                    <a href="https://redash.io/"
                       className="flex justify-center w-80 text-center px-2 py-0.5 text-2xl font-bold truncate border-2 border-black rounded-xl bg-white hover:bg-gray-200 hover:shadow hover:shadow-black">
                        Redash
                    </a>
                    <div
                        className="flex justify-end inset-y-0 right-0 items-center">
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <Menu.Button
                                    className="flex rounded-lg bg-white h-10 w-10">
                                    <span className="sr-only">Open user menu</span>
                                    <img src={Burger} alt="Burger"/>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({active}) => (
                                            <a
                                                href="/requests"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Запросы
                                            </a>

                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({active}) => (
                                            <a
                                                href="/import"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Импорт Excel
                                            </a>

                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({active}) => (
                                            <a
                                                href="/tools"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Другие инструменты
                                            </a>

                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
                <a href="https://redash.io/"
                   className="flex justify-center w-80 mt-16 text-center px-2 py-0.5 text-2xl font-bold truncate border-2 border-black rounded-xl bg-white hover:bg-gray-200 hover:shadow hover:shadow-black">
                    Redash
                </a>
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
    )
}
