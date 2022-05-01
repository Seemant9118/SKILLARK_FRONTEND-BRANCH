import React from 'react'
import Typewriter from 'typewriter-effect';
import Counsell from './img/style/counselling.png';
import Capture1 from './img/style/Capture1.png';
import Capture2 from './img/style/Capture2.png';
import Capture3 from './img/style/Capture3.png';
import { Link } from 'react-router-dom';
import Counsellors from './data/counsellorData'

export default function Counselling() {
  return (
    <>
      <div className='row align-items-center justify-content-end m-0'>
        <div className='col-lg-5 col-10'>
          <div className='display-3 fw-bold text-center text-ska-primary'>
            Are You Confused?
          </div>
          <div className='display-6 fw-bold text-center text-ska-primary'>
            Unable To Find
            <Typewriter
              options={{
                strings: ['The Right Path', 'The Right Career', 'The Right Counselling'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className='col-lg-6 col-10'>
          <img className='float-end top-banner' src={Counsell} alt='icon' />
        </div>
      </div>
      <hr className='' />
      {/* counsellors */}
      <div className='row align-items-center justify-content-evenly m-0'>
        {Counsellors.map((item, index) => {
          return <div className='col-md-2 col-7 '>
            <div className='p-4'>
              <Link to={{
                pathname: `/counselling/${index}`,
                state: `${index}`
              }}>
                <img src={item.img} className='bg-placeholder-image rounded-pill img-fluid' alt='icon' />
              </Link>
            </div>
            <div className='h3 text-center'>{item.name}</div>
            <div className=' text-center'>
              {item.info}
            </div>
          </div>
        })}
      </div>

      <hr className='' />

      <div className='row align-items-center justify-content-center  m-0'>
        <div className='col-md-4 col-10 order-md-2'>
          <img className='float-end' style={{ height: "300px" }}
            src={Capture3}  alt='icon'/>
        </div>
        <div className='col-md-6 col-10 px-5 order-md-1'>
          <h1>Are you Stucked in Your Endless Career Loop? </h1>
          <p>Once you enroll into the skillark "The ball is in our court"! Resigter now!</p>
        </div>
      </div>
      <div className='row align-items-center justify-content-center  m-0'>
        <div className='col-md-4 col-10 order-md-1'>
          <img className='float-end' style={{ height: "300px" }}
            src={Capture1}  alt='icon'/>
        </div>
        <div className='col-md-6 col-10 px-5 order-md-2'>
          <h1>TECHNOLOGY IS NEED</h1>
          <p>To clear your vision for various technical learning fields skillark is here to visualize you  "IIT'S are not only the possibility"</p>
        </div>
      </div>
      <div className='row align-items-center justify-content-center  m-0'>
        <div className='col-md-4 col-10 order-md-2'>
          <img className='float-end' style={{ height: "300px" }}
            src={Capture2} alt='icon' />
        </div>
        <div className='col-md-6 col-10 px-5 order-md-1'>
          <h1>Are you in dilemma to choose the right track??</h1>
          <p>Our skillark experts will find you the right path through interactive counselling.</p>
        </div>
      </div>
    </>
  )
}
