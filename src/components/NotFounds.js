import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFounds() {
  return (
    <>
      <div className='row align-items-center justify-content-center m-0 pt-5'>
        <div className='col-lg-8 col-md-10 ska-box '>
          <div className='text-center m-0 text-ska-primary'
            style={{ fontWeight: '950', fontSize: '200px' }}>
            404
          </div>
          <div className='text-center h1'>
            Oops!! This Page Not Found
          </div>
          <div className='text-center h5'>
            <Link className="" to='/'>Back To The Home</Link>
          </div>
        </div>
      </div>
    </>)
}