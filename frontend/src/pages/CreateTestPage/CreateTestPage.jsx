import React,{useState} from "react";
import Header from "../../components/Header";
import Main from "../../components/UI/Main";
import "./CreateTestPage.scss"
import CreateItemTest from "../../components/CreateItemTest";
import Asks from "../../components/Asks";

const CreateTestPage=()=>{
    const [itemsTest, setItemsTest]= useState([])
    console.log(itemsTest)
    const ChangeItemsTest=(itemTest)=>{
        setItemsTest([...itemsTest,itemTest])
    }
    console.log(itemsTest)
    return(
        <>
            <Header></Header>
            <Main name="create-item">
                <CreateItemTest changeTest={ChangeItemsTest} />
                <Asks itemsTest={itemsTest}/>
            </Main>
        </>
    )
}

export default CreateTestPage