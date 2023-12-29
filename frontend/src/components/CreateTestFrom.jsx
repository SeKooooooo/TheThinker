import React from "react";
import CreateAnswer from "./CreateAnswer";

const CreateTestForm=({changeAnsList}) =>{

    return(
        <ul className="list-answer">     
            <CreateAnswer index={0} changeAnsList={changeAnsList}/>
            <CreateAnswer index={1} changeAnsList={changeAnsList}/>
            <CreateAnswer index={2} changeAnsList={changeAnsList}/>
            <CreateAnswer index={3} changeAnsList={changeAnsList}/>         
        </ul>
    )
}

export default CreateTestForm