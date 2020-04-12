import React from 'react';
import {Button, Icon, Form, Input} from "semantic-ui-react";
import firebase from "../../../utils/Firebase";
import "firebase/auth";

import "./RegisterForm.scss";

export default function RegisterForm(props) {
    const {setSelectedForm} = props;

    const onSubmit = () =>{
        console.log("Formulario Enviado");
    }

    return (
        <div className="register-form">
            <h1>Empieza a escuchar con una cuenta de Musicfy gratis</h1>
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <Input
                        type="text"
                        name="email"
                        placeholder="Correo Electrónico"
                        icon="mail outline"
                        //onChange=()
                        //error=()
                    />
                </Form.Field>
                <Form.Field>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        icon="eye"
                        //onChange=()
                        //error=()
                    />
                </Form.Field>
                <Form.Field>
                    <Input
                        type="text"
                        name="username"
                        placeholder="¿Cómo deberíamos llamarte?"
                        icon="user circle outline"
                        //onChange=()
                        //error=()
                    />
                </Form.Field>
                <Button type="submit">
                    Continuar
                </Button>
            </Form>

            <div className="register-form_options">
                <p onClick={() => setSelectedForm(null)}>Volver</p>
                <p>
                    ¿Ya tienes Musicfy?{" "}
                    <span onClick={() => setSelectedForm("login")}>Iniciar Sesión</span>
                </p>
            </div>
        </div>
    )
}
