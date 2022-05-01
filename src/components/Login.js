import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";
import PrivateData from './data/PrivateData';
import { toastContext } from '../context/skaContext'

export default function Login() {
    const noti = useContext(toastContext);
    const navigate = useNavigate();
    const [statusForm, setStatusForm] = useState("login");
    const [OTP, setOTP] = useState();
    const [enterOTP, setenterOTP] = useState();

    const [details, setDetails] =
        useState({
            email: '',
            password: ''
        });
    const [style, setStyle] = useState({ emailCSS: '', passwordCSS: '' })

    const handleForgotPassword = () => {
        setStatusForm('forgotPassword')
    }
    const handleLogIn = event => {
        Axios.post(`${PrivateData.IP}/authentication/login`, details)
            .then(function (res) {
                if (res.data === 'NE') {
                    noti.addNewMessage('User Not Exit', 'danger');
                    navigate('/register');
                } else if (res.data === 'NM') {
                    noti.addNewMessage('Password Not Match', 'danger');
                    setStyle({ emailCSS: '', passwordCSS: 'border-danger is-invalid' })
                } else {
                    noti.addNewMessage('login in successfully', 'success')
                    sessionStorage.setItem('login', true);
                    sessionStorage.setItem('email', res.data[0].email);
                    sessionStorage['myDetails'] = JSON.stringify(res.data[0]);
                    navigate('/')
                }
            });
        event.preventDefault();
    };
    const handleEmail = (e) => {
        setStatusForm("OTP")
        Axios.post(`${PrivateData.IP}/authentication/forgetpassword`, { email: details.email })
            .then(function (res) {
                // console.log(res.data);
                if (res.data === false) {
                    noti.addNewMessage('User Not exit', 'warning');
                    navigate('/register')
                } else {
                    setOTP(res.data)
                    // console.log(res.data);
                    setStatusForm("OTP")
                }
            });
        e.preventDefault();
    }
    const handleOTP = (e) => {
        if (enterOTP == OTP) {
            setStatusForm('password')
        } else {
            noti.addNewMessage('OTP Not Match', 'danger')
        }
        e.preventDefault();
    }
    const handleResetPassword = (e) => {
        Axios.post(`${PrivateData.IP}/authentication/update`, details)
            .then(function (res) {
                alert('password updated')
            });
        setStatusForm("login")
    }

    return <div className='row justify-content-center'>
        <div className='col-md-8 col-sm-10'>
            <div className='m-3 fw-bolder display-4 text-ska-primary'>
                Log In
            </div>
            <div className='d-grid gap-2 col-10  mx-auto'>
                <button type="button" className="btn btn-outline-ska-primary-dark border-2 rounded-pill">
                    <i className=''></i>
                    Continue with Google</button>
                <div className='text-center h6 text-ska-primary'>OR</div>
            </div>
            {/* login form */}
            {statusForm === 'login' &&
                <form onSubmit={handleLogIn}>
                    <div className="mb-3">
                        <input type="email" placeholder="Email address" autoFocus
                            className={`form-control form-control-lg border-ska-primary border-2 rounded-pill ${style.emailCSS}`}
                            value={details.email} onChange={(event) => setDetails({
                                ...details, email: event.target.value
                            })} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className={`form-control form-control-lg border-ska-primary border-2 rounded-pill ${style.emailCSS}`}
                            placeholder="Password" value={details.password} onChange={(event) => setDetails({
                                ...details, password: event.target.value
                            })} required />
                    </div>
                    <div className='row mb-3'>
                        <div className="col-md ms-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1" style={{ cursor: 'pointer' }}>
                                Remember Me</label>
                        </div>
                        <div className='col-md text-end'>
                            <a style={{ cursor: 'pointer' }}
                                onClick={handleForgotPassword}>Forgot Password?</a>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-10 m-2 mx-auto ">
                        <button type="submit" className="btn btn-ska-primary-dark rounded-pill"
                        >Log In</button>
                    </div>
                </form>}

            {/* email form */}
            {statusForm === 'forgotPassword' &&
                <form onSubmit={handleEmail}>
                    <div className="mb-3">
                        <input type="email" placeholder="Email address"
                            className="form-control form-control-lg border-ska-primary border-2 rounded-pill "
                            value={details.email} onChange={(event) => setDetails({ ...details, email: event.target.value })} required />
                    </div>
                    <div className="d-grid gap-2 col-10 m-2 mx-auto ">
                        <button type="submit" className="btn btn-ska-primary-dark rounded-pill "
                        >Send OTP</button>
                    </div>
                </form>}
            {/* OTP form */}
            {statusForm === 'OTP' &&
                <form onSubmit={handleOTP}>
                    <div className="mb-3">
                        <input type="text" placeholder="OTP"
                            className="form-control form-control-lg border-ska-primary border-2 rounded-pill "
                            value={enterOTP} onChange={(event) => setenterOTP(event.target.value)} required />
                    </div>
                    <div className="d-grid gap-2 col-10 m-2 mx-auto ">
                        <button type="submit" className="btn btn-ska-primary-dark rounded-pill "
                        >Confirm</button>
                    </div>
                </form>}
            {/* reset password */}
            {statusForm === 'password' &&
                <form onSubmit={handleResetPassword}>
                    <div className='row mb-3'>
                        <input type="password" placeholder="Password"
                            className="form-control form-control-lg border-ska-primary border-2 rounded-pill"
                            value={details.password} onChange={(event) => setDetails({
                                ...details, password: event.target.value
                            })} required />
                    </div>
                    {/* <div className='row mb-3'>
                        <input type="password" placeholder="Password"
                            className="form-control form-control-lg border-ska-primary border-2 rounded-pill border-danger is-invalid"
                            value={details.password1} onChange={(event) => setDetails({
                                ...details, password1: event.target.value
                            })} required />
                    </div> */}
                    <div className="d-grid gap-2 col-10 m-2 mx-auto ">
                        <button type="submit" className="btn btn-ska-primary-dark rounded-pill "
                        >Confirm</button>
                    </div>
                </form>}
            <div className='text-center h6 m-2'>
                Don't have an account? <Link to='/register'>Register</Link>
            </div>
        </div>
    </div>
}
