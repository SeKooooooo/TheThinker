import React,{useState,useRef, useLayoutEffect} from "react";
import CreateTestForm from "./CreateTestFrom";


const CreateItemTest = ({changeTest}) =>{
    const [ansList,setAnsList] = useState(["","","",""])
    const [value,setValue] = useState('')
    const changeArray=(array,i,value)=>{
        let newArray=[...array]
        newArray[i]=value
        console.log(newArray);
        return newArray
    }
    const changeAnsList=(index,ans)=>{
        setAnsList([...changeArray(ansList,index,ans)])
    }
    const ClearInput=()=>{
        
    }
    const CreateItemTest=()=>{
        return {
            id:1,
            question: value,
            answers: ansList
        }

    }

    return(
        <div className="item-test">
            <div className="task">
                <input onChange={e=>setValue(e.target.value)} className="task-question" placeholder="Введите вопрос" type='text' value={value}/>
                <CreateTestForm changeAnsList={changeAnsList}/>
                <button onClick={()=>changeTest(CreateItemTest())} className="add-ask">Добавить вопрос</button>
            </div>
        </div>
    )
}

export default CreateItemTest