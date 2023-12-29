import React,{useState,useMemo} from "react";
import Header from "../../components/Header";
import Title from "../../components/UI/Title";
import ListTest from "../../components/ListTest";
import { ChangeEnding } from "../../utils/ChangeEnding";
import Main from "../../components/UI/Main";
import Input from "../../components/UI/Input";
import "./TestsPage.scss"


const TestsPage = () => {
    const name = `Тесты по ${ChangeEnding(JSON.parse(localStorage.getItem('subject')).title)}`
    const [tests, setTests] = useState([
        { 
            id:1, 
            title: 'Начало алгебры', 
            time: 6000, 
            creator:2
        },
        {   
            id:2,
            title:'Начало тригонометрии',
            time: 20000,
            creator:3
        }
    ])
    const [searchQuery, setSearchQuery] = useState('')

    const searchTest = useMemo(() =>{
        if(searchQuery){
            return tests.filter(test => test.title.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        return tests
    },[searchQuery,tests]) 
    
    return(
        <div>
        <Header/>
        <Main name="tests">  
            <Title>{name}</Title>
            <Input
                type="text"
                placeholder="Найти нужный тест..."
                onChange={e => setSearchQuery(e.target.value)}
                value = {searchQuery}
            />
            <div className="tests">
                <ListTest tests={searchTest}/>
            </div>
        </Main>
        </div>
    )
}

export default TestsPage