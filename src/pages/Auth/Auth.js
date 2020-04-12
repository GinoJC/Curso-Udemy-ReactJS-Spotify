import React, {useState} from 'react';
import AuthOptions from "../../components/Auth/AuthOptions";
import RegisterForm from "../../components/Auth/RegisterForm";
import LoginForm from "../../components/Auth/LoginForm";
import BackgroundApp from "../../assets/jpg/background-auth.jpg";
import LogoNameWhite from "../../assets/png/logo-name-white.png";

import "./Auth.scss";

export default function Auth() {
    const [selectedForm, setSelectedForm] = useState(null);

    const handlerForm = () => {
        switch (selectedForm) {
            case "login":
                return <LoginForm/>;
            case "register":
                return <RegisterForm/>;
            default:
                return <AuthOptions/>;
        }
    }

    return (
        <div className="auth" style={{backgroundImage: `url(${BackgroundApp})`}}>
            <div className="auth_dark"/>
            <div className="auth_box">
                <div className="auth_box-logo">
                    <img src={LogoNameWhite} alt="Musicfy"/>
                </div>
                {handlerForm()}
            </div>
        </div>
    )
}
