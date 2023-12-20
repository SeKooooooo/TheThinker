import React from "react";
import './TestsPage.scss'
import Header from "../../components/Header";
import Title from "../../components/UI/Title";
import ListTest from "../../components/ListTest";

const TestsPage = () => {
    const name = `Тесты по ${localStorage.getItem('name')}`
    return(
        <>
        <Header/>
            <main className="tests-main">
                <div className="container-main">
                    <div className="main-body">
                        <Title name={name}/>
                        <form action="#">
                            <input type="text" placeholder="Найти нужный тест..."/>
                        </form>
                        <div className="tests">
                            <ListTest/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default TestsPage