import React, { useState } from 'react';
import Axios from "axios";
import PrivateData from './data/PrivateData';

export default function Contactform(props) {

    const [formData, setFormData] =
        useState({
            for: props.for,
            fname: '',
            lname: '',
            email: '',
            phone: '',
            message: ''
        })



    const handleMessage = (event) => {
        // console.log(formData);
        Axios.post(`${PrivateData.IP}/contactus`, formData)
            .then((res) => {
                alert('we got your mail')
            });
        event.preventDefault();
    }
    return (
        <>
            <form onSubmit={handleMessage}>
                <div className="row">
                    <div className="col-md m-2">
                        <input type="text" placeholder="First name" aria-label="First name"
                            className="form-control border-ska-primary-dark border-2 border-0 border-bottom"
                            value={formData.fname} onChange={(event) => setFormData({
                                ...formData, fname: event.target.value
                            })} required />
                    </div>
                    <div className="col-md m-2">
                        <input type="text" placeholder="Last name" aria-label="Last name"
                            className="form-control border-ska-primary-dark border-2 border-0 border-bottom"
                            value={formData.lname} onChange={(event) => setFormData({
                                ...formData, lname: event.target.value
                            })} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md m-2">
                        <input type="email" placeholder="Email" aria-label="Email"
                            className="form-control border-ska-primary-dark border-2 border-0 border-bottom"
                            value={formData.email} onChange={(event) => setFormData({
                                ...formData, email: event.target.value
                            })} required />
                    </div>
                    <div className="col-md m-2">
                        <input type="tel" pattern="[5-9]{1}[0-9]{9}" placeholder="Phone" aria-label="Phone"
                            className="form-control border-ska-primary-dark border-2 border-0 border-bottom"
                            value={formData.phone} onChange={(event) => setFormData({
                                ...formData, phone: event.target.value
                            })} required />
                    </div>
                </div>
                <div className='row'>
                    <div class="col-md m-2">
                        <textarea class="form-control border-ska-primary-dark border-2 border-0 border-bottom"
                            value={formData.message} onChange={(event) => setFormData({
                                ...formData, message: event.target.value
                            })} required
                            placeholder="Message...." rows="2">
                        </textarea>
                    </div>
                </div>
                <button type="submit" class="m-4 px-5 btn btn-ska-primary-dark ">Send Message</button>
            </form>
        </>
    );
}
