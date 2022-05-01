import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';

import EnrollForm from './EnrollForm';
import Accordion from './Accordion';
import CourseData from './data/CourseData';

export default function Course(props) {
  const index = useParams().index;
  useEffect(() => {
    console.log(index);
    // Axios.post(`${PrivateData.IP}/`, index)
    //   .then((res) => {
    //     console.log(res.data);
    //   });
  }, [])

  const [formState, setformState] = useState(false);

  const goToEnrollForm = () => {
    setformState(true)
  }
  const title = CourseData[index - 1].title.replaceAll(' ', '_')
  return (
    <>
      <div>
        {/* form */}
        {formState && <EnrollForm price={CourseData[index - 1].price} title={title} />}

        <div className='row align-items-center justify-content-center m-0'>
          <div className='col-md-5 col-10 order-md-5'>
            <img className='float-end' style={{ height: "400px" }}
              src={CourseData[index - 1].img} alt='icon' />
          </div>
          <div className='col-md-5 col-sm-10  order-md-1'>
            <div className=" mx-5 my-3 p-4">
              {/* <h1 className='text-ska-primary'>{CourseData[index-1].title}</h1> */}
              <p>{CourseData[index - 1].desc}</p>
              <h4>Price: ₹.{CourseData[index - 1].price}</h4>
              <div class="btn btn-ska-primary-dark"
                onClick={() => goToEnrollForm()}
              >Enroll Now</div>
            </div>
          </div>
        </div>
        <hr />
        <div className='row justify-content-center mx-0'>
          <div className='col-lg-10 col-sm-10  order-lg-1'>
            {CourseData[index - 1].accordion ? CourseData[index - 1].accordion.map((itemss, indexs) => {
              return (<div className='mb-5 ska-box px-5 py-3'>
                <div className='h3 my-3 text-ska-primary-dark'>{itemss.head ? itemss.head : ''}</div>
                <div class="accordion accordion-flush" id={`accordionFlush${indexs}`}>
                  {itemss.body ? (itemss.body.map((items, index) => {
                    return (
                      <Accordion
                        pId={`accordionFlush${indexs}`}
                        id={`${indexs}${index}`}
                        heading={items.dataHeading}
                        para={items.dataBody} />
                    )
                  })) : ''}
                </div>
              </div>)
            }) : ''}

            {CourseData[index - 1].Lists.map((items) => {
              return (<div className='mb-5 ska-box px-5 py-3'>
                <div className='h3 my-3 text-ska-primary-dark'>{items.name}</div>
                <div className='row'>
                  {items.list.map((item) => {
                    return (<div className=' col-md-5 mx-4'>
                      <div className='h6 my-2 p-2 border-bottom border-white'>
                        <i class="bi bi-star-fill" />  {item}</div>
                    </div>)
                  })}
                </div>
              </div>)
            })}
          </div>
        </div>
      </div>
    </>
  );
}