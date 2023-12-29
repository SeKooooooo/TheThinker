import React from "react";
import Title from "./UI/Title";
import TestInfoItem from "./TestInfoItem";
import {changeTime} from "../hooks/changeTime";

const EntranceTest = ({change,countAns}) => {
    const name = JSON.parse(localStorage.getItem('subject')).title
    const genTime = Number(JSON.parse(localStorage.getItem('test')).time)
    const changeGenTime=changeTime(genTime)
    console.log(changeGenTime);
    return(
        <main className="entrance-test-main">
            <div className="container-main">
                <div className="main-body">
                    <Title nameName="Начало тригонометрии"/>
                    <ul className="test-info">
                        <TestInfoItem keys={'Предмет:'} value={name}/>
                        <TestInfoItem keys={'Автор:'} value={"Головач Е. М."}/>
                        <TestInfoItem keys={'Время на прохождение:'} value={`${changeGenTime.minute}:${changeGenTime.second}`}/>
                        <TestInfoItem keys={'Кол-во вопросов:'} value={countAns}/>
                        <button onClick={() => change()} className="go-test">Приступить к выполнению</button>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default EntranceTest