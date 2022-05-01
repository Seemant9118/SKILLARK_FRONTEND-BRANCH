import * as React from 'react';
import { Outlet } from 'react-router-dom';
// file
import bgimage from './img/style/bg.png';
import logoimage from './img/style/logo.png';
// component
import Copyright from '../common/Copyright';

export default function Loginmodule(props) {
  return (
    <div className='container-fluid ska-bg' style={{ minHeight: '100vh', }}>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-md-9 col-sm-10 d-none d-lg-block'
          style={{
            height: '100vh',
            backgroundImage: `url(${bgimage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '50% 100%',
            borderTopRightRadius: '8%',
            borderBottomRightRadius: '8%',
          }}>
          <div className='py-4 glass'>
            <div className='row align-items-center'>
              <div className='col-10 ps-5'>
                <img src={logoimage} className='img-fluid' alt='logo'
                  style={{ height: '100px' }} />
              </div>
            </div>
            <div className='h2 text-start ms-5 mt-4 fw-bold'>Hey There, Welcome!</div>
            <div className='h6 text-start ms-5 my-3'>We are Skillark Technology</div>
            <div className='h4 fw-bolder mt-5 text-center m-3'>
              "One life dream more one life complain less one life experiment more"
            </div>
            <div className='h3 text-end me-5 fw-bold'>~Vinay Singh</div>
            <div className='h6 text-end me-5'>Founder & CEO Skillark</div>
          </div>
        </div>
        <div className='col-lg-6 col-sm-12'>
          <div className=' d-block d-lg-none'>
            <div className='row justify-content-center'>
              <div className='col-sm-5 col-8'>
                <img src={logoimage} className='img-fluid' alt='icon'/>
              </div>
            </div>
          </div>

          {/* {(props.id == '#login') ? <Login /> : <Register />} */}
          <Outlet />

          <Copyright />
        </div>
      </div>
    </div>
  );
}