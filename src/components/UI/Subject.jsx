import React from "react";
import {Link} from 'react-router-dom'

const Subject = ({subj}) => {

    const clickSubject=() =>{
        localStorage.setItem('subject',JSON.stringify(subj))
    }
    return (
        <li onClick={clickSubject}>
            <Link className="item-subjects" to="/subject_map/tests">{subj.title}</Link>
        </li>
    )
}

export default Subject