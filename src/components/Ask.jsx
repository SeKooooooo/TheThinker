import React, { useState } from "react";

const Ask=({ans})=>{
    const [askClass, setAskClass] = useState("answers-list none")
    console.log(ans)
    const changeClass=()=>{
        if (askClass.includes('none')){
            setAskClass("answers-list")
            
        }else{
            setAskClass(askClass+" none")
        }
    }

    return(
        <div className="ask">
            <div onClick={changeClass} className="ask-title">{ans.question}</div>
            <ul className={askClass}>
                {
                    ans.answers.map(e=><li key={e.id} className="answers-item">{e}</li>)
                }
            </ul>
        </div>
    )
}

export default Ask