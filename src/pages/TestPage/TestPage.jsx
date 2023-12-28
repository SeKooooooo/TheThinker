import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import './TestPage.scss'
import BodyTest from "../../components/BodyTest";
import EntranceTest from "../../components/EntranceTest";
import EndTest from "../../components/EndTest";

const TestPage = () => {
    localStorage.setItem('genTime',30)
    const test = [
        {
            id:1,
            question:"Какая самая высокая гора в мире?",
            answers:["Эверест","Эльбрус","Арарат","Олимп"],
            good:0
        },
        {
            id:2,
            question:"Кто он",
            answers:["Lasdff","adadas","aasdfasd","ssdfsd"],
            good:1
        },
        {   
            id:3,
            question:"Кто она",
            answers:["Lasdff","dfasdffs","asdasd","dsf"],
            good:2
        },
        {
            id:4,
            question:"Кто мы",
            answers:["Lasdff","adadas","asdasd","sadasd"],
            good:3
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