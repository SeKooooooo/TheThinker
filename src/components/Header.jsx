import React from "react";
import logo from "../image/logo.svg"
import profile from "../image/profile.svg"
import {Link, useLocation} from 'react-router-dom'

const Header = () => {
    const isTeacher= true
    let location = useLocation().pathname
    let links
    switch(location){
        case '/':{
            links=(
                <div className="nav-links">
                    <Link to="/login" className="entrance">Вход</Link>
                    <a href="#" className="next">Приступим</a>
                </div>)
            break}
        case '/registr':{
            links=(
                <div className="nav-links">
                    <Link to="/login" className="entrance">Вход</Link>
                </div>)
            break}
        case '/login':{
            links=(
                <div className="nav-links">
                    <a href="#" className="next">Приступим</a>
                </div>)
            break}
        case '/profile':{
            links=(
                <div className="nav-links">
                </div>)
            break}
        case '/create_test':{
            links=(
                <div className="nav-links">
                    <Link to="/profile" className="profile"><img src={profile} alt=""/></Link>
                </div>)
            break}
        default:{
            links = isTeacher? 
                    <div className="nav-links">
                        <Link to="/create_test">Создать тест</Link>
                        <Link to="/profile" className="profile"><img src={profile} alt=""/></Link>
                    </div>
                    :
                    <div className="nav-links">
                        <Link to="/profile" className="profile"><img src={profile} alt=""/></Link>
                    </div>

                }
                break}

    return(
        <header className="header">
            <div className="container-header">
                <nav className="header-nav">
                    <Link to="/subject_map" className="link-main"><img src={logo} alt="Логотип" className="logo"/></Link>
                    {links}
                </nav>
            </div>
        </header>
    )
}

export default Header