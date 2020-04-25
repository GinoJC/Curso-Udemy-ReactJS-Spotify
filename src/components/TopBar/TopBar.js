import React from 'react';
import {Icon, Image} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";
import firebase from "../../utils/Firebase";
import "firebase/auth";
import UserImage from "../../assets/png/user.png";

import "./TopBar.scss";

export default function TopBar(props) {
    const {user} = props;

    return (
        <div>
            <h2>TopBar...</h2>
        </div>
    )
}
