import React from "react";
import {Link} from 'react-router-dom'

const Test = ({name}) => {
    return (
        <li><Link className="tests-item" to="/subject_map/tests/test">{name}</Link></li>
    )
}

export default Test