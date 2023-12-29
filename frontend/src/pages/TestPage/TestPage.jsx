import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import './TestPage.scss'
import BodyTest from "../../components/BodyTest";
import EntranceTest from "../../components/EntranceTest";
import EndTest from "../../components/EndTest";

const TestPage = () => {
    const test = [
        {
            id:1,
            question:"Какая самая высокая гора в мире?",
        },
        {
            id:2,
            question:"Кто он",
        },
        {   
            id:3,
            question:"Кто она",
        },
        {
            id:4,
            question:"Кто мы",
        }
    ]
    const [testBody, setTestBody] = useState(false)
    const [testEnd, setTestEnd] = useState(false)
    
    const ChangeTestBody = () => {
        setTestBody(true)
    }
    const ChangeTestEnd = () => {
        setTestEnd(true)
    }

    const [bodyPage, setPage] = useState(<EntranceTest countAns={test.length} change={ChangeTestBody}/>)
    
    useEffect(()=>{
        if(testEnd){
            setPage(<EndTest test={test}/>)
        }else if(testBody){
            setPage(<BodyTest change={ChangeTestEnd} test={test}/>)
        }else{
            setPage(<EntranceTest countAns={test.length} change={ChangeTestBody}/>)
        }
    },[testBody,testEnd])
    
    return(
        <>
            <Header/>
            {bodyPage}
        </>
    )
}

export default TestPage