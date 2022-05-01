import React from 'react'
import CourseData from '../components/data/CourseData';
import IMG from '../components/img/style/card-banner.png';
import Cards from '../common/Cards';

export default function EnrollCourse() {
    return <>
        <div>EnrollCourse</div>
        <hr />
        <div style={{
            background: `linear-gradient( 10deg,rgba(216, 221, 220, 0.349),rgba(1, 116, 96, 0.267)), url(${IMG}), no-repeat, 50%, 50%`,
            backgroundSize: 'cover',
            height: '550px',
            width: '100 %',
            boaderRadius: '10px'
        }} className='px-5'>
            <div className='h1 title text-ska-primary-dark text-center pt-3'>Courses</div>
            <Cards data={CourseData} />
        </div>
        <hr />
    </>
}
