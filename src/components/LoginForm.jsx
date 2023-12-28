import React from "react";
import { useInput } from "../hooks/useInput";
import { Link } from "react-router-dom";

const LoginForm = () => {

    const email = useInput('',{'isEmpty': true, 'isEmail':false})
    const password = useInput('',{'isEmpty': true, 'minLength': 8})

    return(
        <form>
            <div className="column-input">
                <div className="container-input">
                    {(email.isDirty && email.isEmpty) && <div className="input-error">{email.infoError.isEmpty}</div>}
                    {(email.isDirty && email.isEmail) && <div className="input-error">{email.infoError.isEmail}</div>}

                    <input 
                        onChange={e=> email.onChange(e)} 
                        onBlur={e=> email.onBlur(e)} 
                        value={email.value} type="email"
                        name="email" placeholder="Почта" className="input"
                    />
                </div>
                <div className="container-input">
                    {(password.isDirty && password.isEmpty) && <div className="input-error">{password.infoError.isEmpty}</div>}
                    {(password.isDirty && password.minLength) && <div className="input-error">{password.infoError.minLengthError}</div>}
                    <input 
                        onChange={e=> password.onChange(e)} 
                        onBlur={e=> password.onBlur(e)} 
                        value={password.value} type='password' 
                        name="password" placeholder="Пароль" className="input input-last"
                    />
                    <a href="#" className="no-pass">Забыли пароль?</a>
                    <Link to='/subject_map'><button disabled={!email.inputValid || !password.inputValid} className="btn-login" type="submit">Войти</button></Link>
                </div>
            </div>
        </form>
    )
}

export default LoginForm