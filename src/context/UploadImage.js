import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Axios from "axios";
import PrivateData from '../components/data/PrivateData';
import { uploadImgContext } from "./skaContext";

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
    top: '10vh',
    right: '6vw',
    border: '2px solid #026c62',
    borderRadius: '20%',
    padding: '5px 10px',
    zIndex: 11,
}
const UploadImage = (props) => {
    const [uploadBox, setUploadBox] = useState(false);

    const [profile, setprofile] = useState('');
    const [awsLink, setAwsLink] = useState('');

    const handleUpload = async (e) => {
        const formdata = new FormData();
        formdata.append('profile', profile);
        Axios.post(`${PrivateData.IP}/upload/profile`, formdata, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then((res) => {
                setAwsLink(res.data);
            })
        e.preventDefault();
    };


    const handleSetImg = (e) => {
        setprofile(e.target.files[0]);
    }

    const handlePopup = () => {
        setUploadBox(!uploadBox);
    }
    if (!uploadBox) {
        return <uploadImgContext.Provider value={{ handlePopup, awsLink }}>
            {props.children}
        </uploadImgContext.Provider>
    } else {
        return ReactDOM.createPortal(
            <uploadImgContext.Provider value={{ handlePopup, awsLink }}>
                {props.children}
                <div className='row align-items-center justify-content-center m-0' style={popup}>
                    <div className='col-md-8 col-11'>
                        <div className='ska-box'
                            style={{ maxHeight: '90vh', overflow: 'auto' }}>
                            <button style={closeButton} onClick={handlePopup} ><i class="bi bi-x-lg" /></button>
                            <form method='POST' onSubmit={handleUpload}>
                                <div className="d-grid gap-2 col-10 m-2 mx-auto ">
                                    <input type='file' className="form-control border-ska-primary border-1"
                                        name='profile' onChange={handleSetImg} />
                                </div>
                                <div className="d-grid gap-2 col-10 m-2 mx-auto ">
                                    <button type="submit" className="btn btn-ska-primary-dark"
                                    >upload</button>
                                </div>
                            </form>
                            {/* {awsLink &&
                                <div dangerouslySetInnerHTML={{ __html: `<img src=${awsLink}/>` }} />
                            } */}
                            {awsLink && <div className='text-center'>
                                <img src={awsLink} alt='uploaded img'
                                    className='rounded-pill ' style={{ height: '200px' }} /></div>
                            }
                        </div>
                    </div>
                </div>
            </uploadImgContext.Provider>,
            document.getElementById('popup')
        )
    }
}
export default UploadImage;