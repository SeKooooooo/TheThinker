import React from "react";
import Header from "../../components/Header";
import Main from "../../components/UI/Main";
import Title from "../../components/UI/Title";
import ItemInfo from "../../components/ItemInfo";
import "./ProfilePage.scss"

const ProfilePage=()=>{

    return(
        <>
            <Header/>
            <Main name = "profile">
                <Title>Профиль</Title>
                <div className="profile-info">
                    <ul className="info-list">
                        <ItemInfo keys="Фамилия:" value="Кочнев"/>
                        <ItemInfo keys="Имя:" value="Сергей"/>
                        <ItemInfo keys="Отчество:" value="Валерьевич"/>
                        <ItemInfo keys="Дата рождения:" value="16.11.2004"/>
                        <ItemInfo keys="Школа:" value="Квашнинская"/>
                        <ItemInfo keys="Роль:" value="Ученик"/>
                    </ul>
                </div>
            </Main>
        </>
    ) 
}

export default ProfilePage