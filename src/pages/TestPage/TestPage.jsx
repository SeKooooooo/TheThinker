import React from "react";
import Header from "../../components/Header";
import Title from "../../components/UI/Title";
import './TestPage.scss'

const TestPage = () => {
    const name = `Тесты по ${localStorage.getItem('name')}`

    return(
        <>
            <Header/>
            <main className="entrance-test-main">
                <div className="container-main">
                    <div className="main-body">
                        <Title nameName="Начало тригонометрии"/>
                        <ul className="test-info">
                            <li className="info-item">
                                <span className="item-key">Предмет:</span>
                                <span className="item-value">{name}</span>
                            </li>
                            <li className="info-item">
                                <span className="item-key">Автор:</span>
                                <span className="item-value">Головач Е. М.</span>
                            </li>
                            <li class="info-item">
                                <span className="item-key">Время на прохождение:</span>
                                <span className="item-value">15 мин.</span>
                            </li>
                            <li class="info-item">
                                <span className="item-key">Кол-во вопросов:</span>
                                <span className="item-value">10</span>
                            </li>
                            <a href="./test.html" className="go-test">Приступить к выполнению</a>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default TestPage