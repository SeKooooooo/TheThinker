import React,{useEffect, useState,useRef, useLayoutEffect} from "react";
import TestForm from "./TestForm";
import useNow from "../hooks/useNow";
import Timer from "./Timer";

const ItemTest = ({itemTest,changeTest,progress,changeEndTime}) =>{
   


    return(
        <div className="item-test">
            <div className="task">
                <p className="task-question">{itemTest.question}</p>
                <TestForm answers={itemTest.answers} id={itemTest.id} changeTest={changeTest}/>
                <div className="progress">{progress}</div>
            </div>
            <div className="timer">
                <Timer changeEndTime={changeEndTime}/>
            </div>
        </div>
    )
}

export default ItemTest