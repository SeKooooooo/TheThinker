import React, { useState } from "react";
import '../css/BodyTest.scss'
import ItemTest from "./ItemTest";

const BodyTest = () => {

    const [numItemTest, setNumItemTest] = useState(1)
    const test = [
        {
            question:"Какая самая высокая гора в мире?",
            answers:["Эверест","Эльбрус","Арарат","Олимп"]
        },
        {
            question:"Кто лох",
            answers:["Эверест","Эльбрус","Арарат","Олимп"]
        }
    ]

    return(
        <main className="test-main">
            <div className="container-main container-main__test">
                <div className="main-body">
                    <ItemTest itemTest={test[numItemTest-1]}/>
                </div>
            </div>
            <div className="tasks">
                <div className="list-tasks">
                    <button className="tasks-item">1</button>
                    <button className="tasks-item">2</button>
                    <button className="tasks-item">3</button>
                    <button className="tasks-item">4</button>
                    <button className="tasks-item">5</button>
                </div>
            </div>
        </main>
    )
}

export default BodyTest