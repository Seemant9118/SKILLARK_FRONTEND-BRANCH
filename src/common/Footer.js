import React from 'react';
import Copyright from './Copyright';
import logoimage from '../components/img/style/logo.png';
import { Link } from 'react-router-dom';
import PrivateData from '../components/data/PrivateData';

export default function Footer() {
    return (
        <div className='bg-ska-primary text-white p-2 pt-3' id='footer'>
            <div className='row align-items-center justify-content-evenly mx-0'>
                <div className='col-md-5'>
                    <div className='row justify-content-start mx-0'>
                        <div className='col'>
                            {/* <img className='float-start footer-logo' src={logoimage} /> */}
                            <h1>SkillArk</h1>
                        </div>
                        <div className='col text-end'>
                            <a className='mx-2'
                                href={PrivateData.youtube}>
                                <i className="h3 m-0 bi bi-youtube" />
                            </a>
                            <a className='mx-2'
                                href={PrivateData.linkedin}>
                                <i className="h3 m-0 bi bi-linkedin" />
                            </a>
                            <a className='mx-2'
                                href={PrivateData.instagram}>
                                <i className="h3 m-0 bi bi-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row justify-content-end mx-0'>
                        <div className='col-5'>
                            <div className='h3'>Company</div>
                            <Link to='/event'><div className='h6 '>
                                Event
                            </div></Link>
                            <Link to='/trainings'><div className='h6 '>
                                Live Trainings
                            </div></Link>
                            <Link to='/counselling'><div className='h6 '>
                                Career Counselling
                            </div></Link>
                        </div>
                        <div className='col-5'>
                            <div className='h3'>Support</div>
                            <Link to='/careers'><div className='h6 '>
                                Career
                            </div></Link>
                            <Link to='/contactus'><div className='h6 '>
                                Contact Us
                            </div></Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row align-items-center justify-content-center mx-0'>
                <div className='col text-center h6'>
                    <Copyright />
                </div>
                <div className='col text-center h6'>
                    Terms & Conditions
                </div>
                <div className='col text-center h6'>
                    Privacy Policy
                </div>
            </div>
        </div>
    );
}
