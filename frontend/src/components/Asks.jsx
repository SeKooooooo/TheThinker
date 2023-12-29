import React from "react";
import Ask from "./Ask";

const Asks=({itemsTest})=>{
    return(
        <div className="asks">
            {itemsTest && itemsTest.map(e=> <Ask key={itemsTest.id} ans={e}/>)}
        </div>
    )
}

export default Asks