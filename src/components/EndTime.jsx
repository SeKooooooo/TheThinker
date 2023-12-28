import React from "react";

const EndTime = ({change}) =>{
    return(
        <div className="end-time">
            <div className="title">
            Время закончилось
            </div>
            <button onClick={change} >Перейти к результатам</button>
        </div>
    )
}

export default EndTime