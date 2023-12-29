import React from "react";

const ItemInfo=({keys,value})=>{
    return (
        <li className="list-item">
            <span className="item-key">{keys}</span>
            <span className="item-value">{value}</span>
        </li>
    )
}

export default ItemInfo