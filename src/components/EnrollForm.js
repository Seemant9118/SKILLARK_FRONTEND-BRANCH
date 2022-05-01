import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import Html from './Html';
import PrivateData from './data/PrivateData';

export default function EnrollForm(props) {
    const navigate = useNavigate();

    const [check, setCheck] = useState(false);
    const [html, setHtml] = useState("");
    const [details, setDetails] =
        useState({
            fullName: '',
            title: props.title,
            email: '',
            phone: '',
            amount: props.price
        })

    const handleEnrollForm = event => {
        Axios.post(`${PrivateData.IP}/payment/paynow`, details)
            .then((res) => {
                if (res.data === true) {
                    navigate('/')
                } else {
                    setHtml(res.data)
                    setCheck(true)
                }
            });
        event.preventDefault();
    };
    return <div className='row justify-content-center mb-3 mx-0'>
        {check && <Html data={html} />}
        <div className='col-md-5 col-sm-8'>
            <div className='m-3 fw-bolder display-6 text-ska-primary'>
                ₹.{details.amount}
            </div>
            <form onSubmit={handleEnrollForm} method='POST'>
                <div class="mb-3">
                    <input type="text" placeholder="Full Name" value={details.fullName} autoFocus
                        class="form-control form-control border-ska-primary border-2"
                        onChange={(event) => setDetails({
                            ...details, fullName: event.target.value.replaceAll(' ', '')
                        })} required />
                </div>
                <div class="mb-3">
                    <input type="email" placeholder="Email address" value={details.email}
                        class="form-control form-control border-ska-primary border-2"
                        onChange={(event) => setDetails({
                            ...details, email: event.target.value
                        })} required />
                </div>
                <div class="mb-3">
                    <input type="tel" class="form-control border-2 form-control border-ska-primary"
                        placeholder="phone" value={details.phone}
                        onChange={(event) => setDetails({
                            ...details, phone: event.target.value
                        })} />
                </div>
                <div class="d-grid gap-2 col-4">
                    <button type="submit" class="btn btn-ska-primary-dark"
                    >Enroll Now</button>
                </div>
            </form>
        </div>
    </div>
}
