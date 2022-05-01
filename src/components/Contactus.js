import React from 'react';
import Contactform from './Contactform';
import PrivateData from './data/PrivateData';
import Capture2 from './img/style/Capture2.png';

export default function Contactus() {
    return (<>
        <div>
            <div className='row align-items-center justify-content-end mx-0 contact-bg bg-ska-primary-light'>
                <div className='col-md-4 col-sm-6'>
                    <div className='display-3 fw-bolder text-center text-white'>
                        Contact Us
                    </div>
                    <div className='row justify-content-center mt-3 my-5'>
                        {/* <div className='col-2 h4 text-center social_media'>
                            <a className='fb' href={PrivateData.fb}><i class="text-white bi bi-facebook p-2"></i></a>
                        </div> */}
                        <div className='col-2 h4 text-center social_media'>
                            <a className='insta' href={PrivateData.instagram}><i class="text-white bi bi-instagram p-2"></i></a>
                        </div>
                        <div className='col-2 h4 text-center social_media'>
                            <a className='twtr' href={PrivateData.linkedin}><i class="text-white bi bi-linkedin p-2"></i></a>
                        </div>
                        <div className='col-2 h4 text-center social_media'>
                            <a className='yt' href={PrivateData.youtube}><i class="text-white bi bi-youtube p-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-6 d-none d-sm-block'>
                    <img className='float-end' style={{ height: "300px" }}
                        src={Capture2} alt='icon'/>
                </div>
            </div>
            {/* Training Enquiry section */}
            <div className='row justify-content-center mx-3'>
                <div className='col-md-8 col-sm-10 px-5 py-3 ska-box course-enquiry'>
                    <div className='h1 fw-bolder text-ska-primary-dark'>
                        Services Enquiry
                    </div>
                    <div className='my-3 text-dark'>
                        Feel free to reach out to us if you have a query related to any
                        Service that we offer.
                    </div>
                    {/* Course Enquiry */}
                    <Contactform for='Course Enquiry' />
                </div>
            </div>
            {/* Corporate Enquiry */}
            <div className='row justify-content-center mx-3'>
                <div className='col-md-8 col-sm-10 mt-5 px-5 py-3 ska-box' >
                    <div className='h1 fw-bolder text-ska-primary-dark'>
                        Corporate Enquiry
                    </div>
                    <div className=' my-3 text-dark'>
                        For any Corporate training/College training requirement please reach out to
                        us on <a href={`tel:${PrivateData.phone} `}>{` ${PrivateData.phone} `}</a>Darius via call or Whatsapp or you can also send a mail to
                        <a href={`mailto:${PrivateData.email} `}>{` ${PrivateData.email} `}</a>We will definitely get back to you.
                    </div>
                    {/* Corporate Enquiry */}
                    <Contactform for='Corporate Enquiry' />
                </div>
            </div>

            {/* Visit Us */}
            <div className='row justify-content-center align-items-center mx-0 px-5'>
                <div className='col-lg-6 col-md-8 '>
                    <div className='h1 text-center text-ska-primary-dark pb-3 mt-5 border-bottom border-5 border-ska-primary-dark'>
                        Visit Us</div>
                    <div className='row p-3'>
                        <div className='col-2 h1 text-ska-secondary'><i class="bi bi-geo-alt-fill"></i></div>
                        <div className='col-10'>
                            <div className='h6'>
                                <a href={PrivateData.addressLink}>
                                    {` ${PrivateData.address} `}
                                </a></div>
                        </div>
                    </div>
                    <div className='row px-3 '>
                        <div className='col-2 h1 text-ska-secondary'><i class="bi bi-telephone-fill"></i></div>
                        <div className='col-10'>
                            <div className='h6'><a href={`tel:${PrivateData.phone} `}>{` ${PrivateData.phone} `}</a></div>
                        </div>
                    </div>
                    <div className='row p-3'>
                        <div className='col-2 h1 text-ska-secondary'><i class="bi bi-envelope-fill"></i></div>
                        <div className='col-10'>
                            <div className='h6'><a href={`mailto:${PrivateData.email} `}>{` ${PrivateData.email} `}</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
