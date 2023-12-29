import React,{useState} from "react";
import Header from "../../components/Header";
import Main from "../../components/UI/Main";
import "./CreateTestPage.scss"
import CreateItemTest from "../../components/CreateItemTest";
import Asks from "../../components/Asks";

const CreateTestPage=()=>{
    const [subject, setSubject]=useState('')
    const [titleTest, setTitleTest]=useState('')
    const [itemsTest, setItemsTest]= useState([])
    console.log(itemsTest)
    const ChangeItemsTest=(itemTest)=>{
        setItemsTest([...itemsTest,itemTest])
    }
    return(
        <>
            <Header></Header>
            <Main name="create-item">
                <input onChange={e=>setSubject(e.target.value)} className="subject" placeholder="Введите предмет" type='text' value={subject}/>
                <input onChange={e=>setTitleTest(e.target.value)} className="titleTest" placeholder="Введите название теста" type='text' value={titleTest}/>
                <CreateItemTest changeTest={ChangeItemsTest} />
                <Asks itemsTest={itemsTest}/>
                <button onClick={()=>location.reload()} className="create-test">Создать тест</button>
            </Main>
        </>
    )
}

export default CreateTestPage