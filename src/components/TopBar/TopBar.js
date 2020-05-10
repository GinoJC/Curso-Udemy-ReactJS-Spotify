import React, {useState} from 'react';
import {Button, Icon, Image} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";
import firebase from "../../utils/Firebase";
import "firebase/auth";
import UserImage from "../../assets/png/user.png";
import BasicModal from "../Modal/BasicModal";

import "./TopBar.scss";

function TopBar(props) {
    const {user, history} = props;
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);

    const goBack = () => {
        history.goBack();
    }

    const logout = () => {
        setTitleModal("Cerrar Sesión");
        setContentModal(
            <div>
                <h2>¿Está seguro de que quiere cerrar sesión?</h2>
                <Button onClick={() => {firebase.auth().signOut()}}>
                    Cerrar Sesion Sesión
                </Button>
                <Button onClick={() => {setShowModal(false)}}>
                    Cancelar
                </Button>
            </div>
                
        );
        setShowModal(true);   
    }

    return (
        <>
            <div className="top-bar">
                <div className="top-bar_left">
                    <Icon name="angle left" onClick={goBack}/>
                </div>
                <div className="top-bar_right">
                    <Link to="/settings">
                        <Image src={user.photoURL ? user.photoURL : UserImage}/>
                        {user.displayName}
                    </Link>
                    <Icon name="power off" onClick={logout}/>
                </div>
            </div>
            <BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
                {contentModal}
            </BasicModal>
        </>
    )
}

export default withRouter(TopBar);