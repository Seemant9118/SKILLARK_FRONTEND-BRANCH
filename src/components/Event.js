import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import EnrollForm from './EnrollForm';
import EventPNG from './img/style/event.png'
import Linux from './img/linux.png'
import ReactJs from './img/ReactJS.png'
import AWS from './img/AWS.png'
import GIT from './img/git.jpg'
import '../components/Event.css'

export default function Event() {
    const [formState, setformState] = useState(false);

    const goToEnrollForm = () => {
        setformState(true)
    }
    return (
        <div>
            {/* form */}
            {/* <div className='col-lg-6 col-10 order-md-5'>
                    <img className='float-end  top-banner' src={EventPNG} alt='icon' />
                </div> */}
            {formState && <EnrollForm price='199' title='Three_Days_Cloud_BootCamp' />}
            
            <div className='row align-items-center justify-content-center mt-2'>
            
                <div className='col-lg-6 col-10 order-md-5'>
                    <img id="Logo" className='float-end  top-banner w-75 h-25 mx-2 mt-4' src={Linux} alt='icon' />
                </div>
                <div className='col-lg-5 col-10 order-md-1'>

                    <div className='ska-box'>
                        <div className='h1 fw-bold text-center text-ska-primary'>
                            Linux Test
                        </div>
                        <div class="d-grid gap-2 col-10 m-3 mx-auto ">
                            <Link type="submit" class="btn btn-ska-primary-dark rounded-pill"
                                to='/test'>Start Now</Link>
                        </div>
                       
                        {/*<div className='h1 fw-bold text-center text-ska-primary'>
                        Three Days Cloud BootCamp
                    </div>
                    <div className='m-3'>
                        Register Now for 3 Day Workshop Hosted by Skillark on the Topic
                        of Cloud Platform (AWS/Azure), this Workshop will cover all the
                        Basic Services Of both Azure and AWS
                    </div>
                    <div className='h4 text-center'>Price: ₹ 199</div>
                    <div class="d-grid gap-2 col-10 m-3 mx-auto ">
                        <button type="submit" class="btn btn-ska-primary-dark rounded-pill"
                            onClick={goToEnrollForm}>Register Now</button>
                    </div>*/}
                    </div>
                </div>
            </div>

            {/* <div className='row align-items-center justify-content-center m-0'>
                 <div className='col-lg-6 col-10 order-md-5'>
                    <img id="Logo" className='float-end  top-banner w-50 h-25 mx-5 mt-4' src={ReactJs} alt='icon' />
                </div> 
                <div className='col-lg-5 col-10 order-md-1'>

                    <div className='ska-box'>
                        <div className='h1 fw-bold text-center text-ska-primary'>
                            Reactjs Test
                        </div>
                        <div class="d-grid gap-2 col-10 m-3 mx-auto ">
                            <Link type="submit" class="btn btn-ska-primary-dark rounded-pill"
                                to='/testtwo'>Start Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row align-items-center justify-content-center m-0'>
                 <div className='col-lg-6 col-10 order-md-5'>
                    <img id="Logo" className='float-end  top-banner w-50 h-25 mx-5 mt-4' src={AWS} alt='icon' />
                </div> 
                <div className='col-lg-5 col-10 order-md-1'>
                    <div className='ska-box'>
                        <div className='h1 fw-bold text-center text-ska-primary'>
                            AWS Test
                        </div>
                        <div class="d-grid gap-2 col-10 m-3 mx-auto ">
                            <Link type="submit" class="btn btn-ska-primary-dark rounded-pill"
                                to='/testthree'>Start Now</Link>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='row align-items-center justify-content-center m-0'>
                 <div className='col-lg-6 col-10 order-md-5'>
                    <img id="Logo" className='float-end  top-banner w-75 h-25 mt-4' src={GIT} alt='icon' />
                </div> 
                <div className='col-lg-5 col-10 order-md-1'>
                    <div className='ska-box'>
                        <div className='h1 fw-bold text-center text-ska-primary'>
                            Git & GitHub Test
                        </div>
                        <div class="d-grid gap-2 col-10 m-3 mx-auto ">
                            <Link type="submit" class="btn btn-ska-primary-dark rounded-pill"
                                to='/testfour'>Start Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
