import React, {useState} from 'react'
import {Button, Icon, Form, Input} from "semantic-ui-react";
import {toast} from "react-toastify";
import {validateEmail} from "../../../utils/Validations";
import firebase from "../../../utils/Firebase";
import "firebase/auth";

import "./LoginForm.scss";

export default function LoginForm(props) {
    const {setSelectedForm} = props;
    const [formData, setFormData] = useState(defaultValueForm());
    const [showPassword, setShowPassword] = useState(false);

    const handlerShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        console.log("Login...");
        console.log(formData);
    }

    return (
        <div className="login-form">
            <h1>Música para todos.</h1>

            <Form onSubmit={onSubmit} onChange={onChange}>
                <Form.Field>
                    <Input 
                        type="text"
                        name="email"
                        placeholder="Correo Electrónico"
                        icon="mail outline"
                        // error={}
                    />
                </Form.Field>
                <Form.Field>
                    <Input 
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Contraseña"
                        icon={
                            showPassword ? (
                                <Icon name="eye slash outline" link onClick={handlerShowPassword} />
                            ) : (
                                <Icon name="eye" link onClick={handlerShowPassword} />
                            )
                        }
                        // error={}
                    />
                </Form.Field>
                <Button type="submit">Iniciar Sesión</Button>
            </Form>

            <div className="login-form_options">
                <p onClick={() => setSelectedForm(null)}>Volver</p>
                <p>
                    ¿No tienes cuenta?{" "}
                    <span onClick={() => setSelectedForm("register")}>Regístrate</span>
                </p>
            </div>
        </div>
    )
}

function defaultValueForm(){
    return {
        email: "",
        password: ""
    };
}