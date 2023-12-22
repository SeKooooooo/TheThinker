import React from "react";
import Subject from "./UI/Subject";

const ListSubject = () => {

    return(
        <ul className="table-subjects">
            <Subject name='Математика' />
            <Subject name='Физика' />
            <Subject name='Информатика' />
            <Subject name='Английский язык'/>
            <Subject name='Русский язык' />
            <li><a className="item-subjects" href="">Название <br/> предмета</a></li>
        </ul>
    )
}

export default ListSubject