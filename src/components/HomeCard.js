import React from 'react'

export default function HomeCard(props) {
    return (
        <div className='row align-items-center justify-content-center m-0'>
                <div className='h2 text-ska-primary'>
                    {props.heading}
                </div>
            <div className='col'>
                {props.para}
            </div>
            <div className='col'>
                <img className='float-end' style={{ height: "150px",margin:'0 -30px -15px 0' }}
                    src={props.img} />
            </div>
        </div>
    )
}
