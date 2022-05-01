import React, { useEffect, useState } from 'react';
import PrivateData from './data/PrivateData';
import Axios from "axios";
import Typewriter from 'typewriter-effect';
import SchoolData from './data/SchoolData';
import Cards from '../common/Cards';
import IMG from './img/style/card-banner.png';
import Counsell from './img/style/event.png';

export default function School() {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    Axios.get(`${PrivateData.IP}/course/cards`)
      .then((res) => {
        // handle success
        setCourseData(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }, []);
  console.log(courseData);
    return <>
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
    
        <hr />
        <div style={{
            background: `linear-gradient( 10deg,rgba(216, 221, 220, 0.349),rgba(1, 116, 96, 0.267)), url(${IMG}), no-repeat, 50%, 50%`,
            backgroundSize: 'cover',
            height: '550px',
            width: '100 %',
            boaderRadius: '10px'
        }} className='px-5'>
            <div className='h1 title text-ska-primary-dark text-center pt-3'>Courses</div>
            <Cards data={SchoolData} />
        </div>
        <hr />
    </>
}
