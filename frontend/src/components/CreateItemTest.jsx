import React,{useState,useRef, useLayoutEffect} from "react";
import CreateTestForm from "./CreateTestFrom";


const CreateItemTest = ({changeTest}) =>{
    const [ansList,setAnsList] = useState(["","","",""])
    const [valueAsk,setValueAsk] = useState('')
    const changeArray=(array,i,value)=>{
        let newArray=[...array]
        newArray[i]=value
        return newArray
    }
    const changeAnsList=(index,ans)=>{
        setAnsList([...changeArray(ansList,index,ans)])
    }
    const createItemTest=()=>{
        setValueAsk("")
        return {
            id:1,
            question: valueAsk,
            answers: ansList
        }
    }

    return(
        <div className="item-test">
            <div className="task">
                <input onChange={e=>setValueAsk(e.target.value)} className="task-question" placeholder="Введите вопрос" type='text' value={valueAsk}/>
                <CreateTestForm changeAnsList={changeAnsList} />
                <button onClick={()=>changeTest(createItemTest())} className="add-ask">Добавить вопрос</button>
            </div>
        </div>
    )
}

export default CreateItemTest