import React, { useState } from "react";
import Main from "./UI/Main";
import "../css/EndTest.scss"
import {Link} from 'react-router-dom'
import Title from "./UI/Title";
import {changeTime} from "../hooks/changeTime";

const EndTest=({test})=>{
    const ansCount= localStorage.getItem("ansCount")
    const genTime = Number(JSON.parse(localStorage.getItem('test')).time)
    const curTime=Number(localStorage.getItem('curTime'))
    const changeCurTime=changeTime(genTime-curTime)
    const changeGenTime=changeTime(genTime)
    return(
        <Main name="final-test">
            <Title>Итоги теста</Title>
            <ul className="final-info">
                <li className="info-item">
                    <span className="item-key">Потрачено времени:</span>
                    <span className="item-value">{`${changeCurTime.minute}:${changeCurTime.second}`} из {`${changeGenTime.minute}:${changeGenTime.second}`}</span>
                </li>
                <li className="info-item">
                    <span className="item-key">Кол-во правильных ответов:</span>
                    <span className="item-value">{ansCount}/{test.length}</span>
                </li>
                <Link className="pass-test" to="/subject_map">Перейти к выбору предметов</Link>
            </ul>
        </Main>
    )
}

export default EndTest