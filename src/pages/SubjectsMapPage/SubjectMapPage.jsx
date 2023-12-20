import React from "react";
import Header from "../../components/Header";
import "./SubjectMapPage.scss"
import ListSubject from "../../components/ListSubject";
import Title from "../../components/UI/Title";

const SubjectMapPage = () =>{
    return (
        <div>
            <Header/>
            <main className="subject-main">
                <div className="container-main">
                    <div className="main-body">
                        <Title name='Выбери предмет:'/>
                        <ListSubject/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SubjectMapPage