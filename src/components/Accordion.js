import React from 'react'

export default function Accordion(props) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`flush-heading${props.id}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.id}`} aria-expanded="false" aria-controls={`collapse${props.id}`} >
                    {props.heading}
                </button>
            </h2>
            <div id={`flush-collapse${props.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${props.id}`} data-bs-parent={`#${props.pId}`}>
                <div className="accordion-body">
                    <div className='row'>
                        {props.para.map((item) => {
                            return (<div className='col-6'>
                            <i class="bi bi-star-fill"/> {item}
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
