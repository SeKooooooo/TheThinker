import React from "react";
import {Link} from 'react-router-dom'

const Test = ({test}) => {
    const title = `Тема: ${test.title}, Преподаватель: ${test.creator} `
    const clickTest=() =>{
        localStorage.setItem('test', JSON.stringify(test))
    }

    return (
        <li onClick={clickTest}>
            <Link  className="tests-item" to="/subject_map/tests/test">{title}</Link>
        </li>
    )
}

export default Test