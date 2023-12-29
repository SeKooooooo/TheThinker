import React, { useState } from "react";
import '../css/BodyTest.scss'
import ItemTest from "./ItemTest";
import Main from "./UI/Main";
import EndTime from "./EndTime";

const BodyTest = ({change,test}) => {
    const [numItemTest, setNumItemTest] = useState(1)
    const [countTrueAns,setCountTrueAns] = useState(0)
    const [endTime, setEndTime] = useState(false)

    const lastId=test[test.length-1].id
    localStorage.setItem('ansCount',countTrueAns)
    const ChangeNum=(countAns)=>{
        setCountTrueAns(countTrueAns + countAns)
        if (test[numItemTest-1].id === lastId){
            change()
        }else{
            setNumItemTest(numItemTest+1)
        }
    }
    
    const ChangeEndTime=()=>{
        setEndTime(true)
    }

    return(
        <Main name="test">
            {
                !endTime?
                <ItemTest itemTest={test[numItemTest-1]} changeTest={ChangeNum} changeEndTime={ChangeEndTime} progress={`${numItemTest}/${test.length}`}/>
                :
                <EndTime change={change}/>
            }
            
        </Main>    
    )
}

export default BodyTest