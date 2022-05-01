import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import EnrollForm from './EnrollForm';
import EventPNG from './img/style/event.png'

export default function Event() {
    const [formState, setformState] = useState(false);

    const goToEnrollForm = () => {
        setformState(true)
    }
    return <>
        {/* form */}
        {formState && <EnrollForm price='199' title='Three_Days_Cloud_BootCamp' />}
        <div className='row align-items-center justify-content-center m-0'>
            <div className='col-lg-6 col-10 order-md-5'>
                <img className='float-end  top-banner' src={EventPNG} alt='icon' />
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

    </>
}
