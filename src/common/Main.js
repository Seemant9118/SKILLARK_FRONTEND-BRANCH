import React,{ useContext } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';
import {toastContext} from '../context/skaContext';

export default function Main() {
    const noti = useContext(toastContext);
    const navigate = useNavigate();
    const student = ["/user/mycourse"]

    const location = useLocation().pathname;
    // console.log(location);
    // console.log(student.includes(location));
    // console.log(sessionStorage.getItem('login')===null);
    if (student.includes(location) && sessionStorage.getItem('login')===null) {
        noti.addNewMessage('Login first', 'danger');
        navigate('/login')
    }


    return <>
        <Navbar />

        <Outlet />

        <Footer />
    </>
}
