import React, { useState, useContext, useEffect } from 'react';
import IMG from '../components/img/img.png';
import { uploadImgContext } from '../context/skaContext';
import PrivateData from '../components/data/PrivateData';
import Axios from "axios";

export default function Profile() {

    // var myVariable = {a:[1,2,3,4], b:"some text"};
    // sessionStorage['myvariable'] = JSON.stringify(myVariable);
    // var readValue = JSON.parse(sessionStorage['myvariable']);
    // console.log(readValue);


    const a = useContext(uploadImgContext);
    const handleUploadimg = () => {
        a.handlePopup();
    }
    const [details, setDetails] =
        useState({
            email: JSON.parse(sessionStorage['myDetails']).email,
            firstName: JSON.parse(sessionStorage['myDetails']).firstName,
            lastName: JSON.parse(sessionStorage['myDetails']).lastName,
            phone: JSON.parse(sessionStorage['myDetails']).phone,
            image: JSON.parse(sessionStorage['myDetails']).image,
        });
    useEffect(() => {
        a.awsLink?setDetails({...details, image: a.awsLink}):setDetails({...details, image: details.image})
    }, [a.awsLink])

    const handleDetails = (e) => {
        Axios.post(`${PrivateData.IP}/authentication/update`, details)
            .then((res) => {
                sessionStorage.removeItem("myDetails");
                sessionStorage['myDetails'] = JSON.stringify(res.data[0]);
            })
        e.preventDefault();
    };
    return <>
        <div className='row align-items-center justify-content-center m-0'>
            <div className='col-md-2 col-4 mb-3'>
                <img onClick={handleUploadimg} className="rounded-circle mt-2"
                    src={details.image} alt='img' style={{height:'150px'}}/>
            </div>
            <hr />

            <div className='col-md-10'>
                <form method='POST' onSubmit={handleDetails}>
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label ms-3 mb-0 fw-bold text-ska-primary-dark">First Name</label>
                            <input type="text" placeholder="First Name" autoFocus
                                className="form-control form-control-lg border-ska-primary border-2 rounded-pill "
                                value={details.firstName} onChange={(event) => setDetails({
                                    ...details, firstName: event.target.value
                                })} required />
                        </div>
                        <div className="col">
                            <label className="form-label ms-3 mb-0 fw-bold text-ska-primary-dark">Last Name</label>
                            <input type="text" placeholder="Last Name"
                                className="form-control form-control-lg border-ska-primary border-2 rounded-pill "
                                value={details.lastName} onChange={(event) => setDetails({
                                    ...details, lastName: event.target.value
                                })} required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label ms-3 mb-0 fw-bold text-ska-primary-light">Can't Change</label>
                            <input type="email" placeholder="Email address"
                                className="form-control form-control-lg border-ska-primary border-2 rounded-pill "
                                value={details.email} onChange={(event) => setDetails({
                                    ...details, email: event.target.value
                                })} required disabled />
                        </div>
                        <div className="col">
                            <label className="form-label ms-3 mb-0 fw-bold text-ska-primary-dark">Phone Number</label>
                            <input type="tel" pattern="[5-9]{1}[0-9]{9}" placeholder="Phone Number"
                                className="form-control form-control-lg border-ska-primary border-2 rounded-pill"
                                value={details.phone} onChange={(event) => setDetails({
                                    ...details, phone: event.target.value
                                })} required />
                        </div>
                    </div>
                    {/* <div className="row mb-3">
                        <div className="col">
                            <input type="password" placeholder="Password"
                                className="form-control form-control-lg border-ska-primary border-2 rounded-pill "
                                value={details.password} onChange={(event) => setDetails({
                                    ...details, password: event.target.value
                                })} required />
                        </div>
                        <div className="col">
                            <input type="password" placeholder="Password"
                                className="form-control form-control-lg border-ska-primary border-2 rounded-pill"
                                value={details.password1} onChange={(event) => setDetails({
                                    ...details, password1: event.target.value
                                })} required />
                        </div>
                    </div> */}
                    <div className="d-grid gap-2 col-4 m-2 mx-auto ">
                        <button type="submit" className="btn btn-ska-primary-dark rounded-pill "
                        >Save Change</button>
                    </div>
                </form>
            </div>
        </div>

    </>
}
