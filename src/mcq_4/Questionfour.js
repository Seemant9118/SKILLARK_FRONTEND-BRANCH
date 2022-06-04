import React, { useEffect, useState, useRef } from 'react';
import '../mcq/Question.css';

export default function Question(props) {
    useEffect(() => {
        setSelected('')
        const radioBtn = document.querySelectorAll("input[type='radio']");
        radioBtn.forEach(radioBtn => {
            if (radioBtn.checked === true) {
                radioBtn.checked = false;
            }
        })
        // console.log(opChecked.current.checked);
        // opChecked.current.checked =false
    }, [props.questionNum])
    const [selected, setSelected] = useState('');
    return <>
        <form>
            <div className='ska-box'>
                <strong>Q. {props.questionNum + 1} </strong>
                {props.data.question}
                {/* <img src=''></img> */}
            </div>
            <div className="btn-group-vertical" role="group" aria-label="Basic radio toggle button group" style={{ width: '92%' }}>
                {props.data.options.map((item, index) => {
                    return <label className="btn btn-ska-outline-primary ska-box p-2 text-start">
                        <input type="radio" className='mx-2' name={props.questionNum} autocomplete="off"
                            onClick={() => { setSelected(index) }} />
                        {item.option}
                    </label>
                })}
            </div>
        </form>
        <div className='fixed-bottom row justify-content-end pe-5'>
            <div className='col-md-3 d-none  d-md-block'>
                <div className='ska-box bg-ska-primary mb-2 mt-0'>
                    <div className='row justify-content-between'>
                        <span class="badge bg-warning text-dark bg-opacity-75 mb-1">
                            {props.seen.length} Seen</span>
                        <span class="badge bg-ska-primary  text-dark bg-opacity-75">
                            {props.attempt.length} Attempt</span>
                    </div>
                </div>
            </div>
            <div className='col-md-9'>
                <div className='ska-box bg-ska-primary mb-2 mt-0'>
                    <div className='row justify-content-between'>
                        <div className='col-2'>
                            <button className="btn btn-ska-primary text-white fw-bold px-4"
                                onClick={() => props.handleQuestionNum(props.questionNum - 1)}>Previous</button>
                        </div>
                        <div className='col-3'>
                            <button className="btn btn-outline-ska-primary fw-bolder px-4" disabled={selected === '' ? "true" : ""}
                                onClick={() => props.handleMarks(props.questionNum, selected, props.data.options[selected].value)}>Save and Next</button>
                        </div>
                        <div className='col-2'>
                            <button id='n-btn' className="btn btn-ska-primary text-white fw-bold px-4"
                                onClick={() => props.handleQuestionNum(props.questionNum + 1)}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
