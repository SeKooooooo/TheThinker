import React from "react";
import Ask from "./Ask";

const Asks=({itemsTest})=>{
    console.log(itemsTest)
    return(
        <div className="asks">
            {itemsTest && itemsTest.map(e=> <Ask ans={e}/>)}
        </div>
    )
}

export default Asks