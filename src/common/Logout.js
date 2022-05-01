import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {toastContext} from '../context/skaContext';

export default function Logout() {
     
    const noti = useContext(toastContext);
    noti.addNewMessage('logout', 'warning');
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("myDetails");
    const navigate = useNavigate();
    navigate('/')
    return <>
        {sessionStorage.getItem("email")}
        Logout
    </>
}