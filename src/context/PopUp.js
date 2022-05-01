import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import EnrollForm from '../components/EnrollForm';

const popup = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100vw',
    height: '100vh',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
}
const closeButton = {
    position: 'absolute',
    top: '3vh',
    right: '6vw',
    border: '2px solid #026c62',
    borderRadius: '20%',
    padding:'5px 10px',
    zIndex: 11,
}

export default function PopUp(props) {
    const [isOpen, setIsopen] = useState(true);

    const handlePopup = () => {
        sessionStorage.setItem('popupstatus', false)
        setIsopen(false)
    }
    // EnrollForm
    const [formState, setformState] = useState(false);
    const goToEnrollForm = () => {
        setformState(true)
    }

    // returnsss
    if (sessionStorage.getItem('popupstatus') || !isOpen) {
        return null
    } else {
        return ReactDOM.createPortal(
            <div>
                <div className='row align-items-center justify-content-center m-0' style={popup}>
                    <div className='col-md-10 col-11'>
                        <button style={closeButton} onClick={handlePopup} ><i class="bi bi-x-lg"/></button>
                        <div className='ska-box'
                            style={{ maxHeight: '90vh', overflow: 'auto' }}>
                            <div className='row align-items-center justify-content-center m-0'>
                                <div className='col-lg-6 col-10 order-md-5'>
                                    <img className='float-end top-banner' src={props.img} alt={props.img} />
                                </div>
                                <div className='col-lg-5 col-10 order-md-1 p-0'>
                                    <div className='h1 fw-bold text-center text-ska-primary'>
                                        {props.title}
                                    </div>
                                    <div className='m-3'>
                                        {props.para}
                                    </div>
                                    <div className='h4 text-center'>Price: ₹ {props.price}</div>
                                    <div class="d-grid gap-2 col-10 m-3 mx-auto ">
                                        <button type="submit" class="btn btn-ska-primary-dark rounded-pill"
                                            onClick={goToEnrollForm}>Register Now</button>
                                    </div>
                                </div>
                            </div>
                            {/* EnrollForm */}
                            {formState && <EnrollForm price={props.price} title='Three_Days_Cloud_BootCamp' />}
                        </div>
                    </div>
                </div>
            </div>,
            document.getElementById('popup')
        )
    }

}
