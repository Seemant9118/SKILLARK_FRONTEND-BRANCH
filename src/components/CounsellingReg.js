import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Counsellors from './data/counsellorData'

function CounsellingReg(props) {
  const index = useParams().index;

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1)
  }
  return <div onClick={handleBack}>
    <div className='row align-items-center justify-content-center my-5 mx-0'>
      <div className='col-md-4 order-md-2'>
        <img className='float-end' style={{ height: "300px" }}
          src={Counsellors[index].img} alt='icon' />
      </div>
      <div className='col-md-6 px-5 order-md-1'>
        <h1>{Counsellors[index].name}</h1>
        <p>{Counsellors[index].des}</p>
      </div>
    </div>

    {/* <form className="row row justify-content-center mx-0 needs-validation" novalidate>
      <div className='col-md-7 col-10'>
        <select for="validationCustom00" id="validationCustom00" className="form-select" required>
          <option value="0" selected>Choose Your Field</option>
          <option value="1">College</option>
          <option value="2">Career</option>
          <option value="3">Job</option>
          <option value="3">School</option>
        </select>
        <input type="text" className="form-control" id="validationCustom01" placeholder="Enter your name" required />
        <div className="valid-feedback">
          Looks good!
        </div>
        <label for="validationCustom02" className="form-label">College/School/Organization</label>
        <input type="text" className="form-control" id="validationCustom02" required />
        <div className="valid-feedback">
          Looks good!
        </div>
        <div className="slotbook">
          <label for="validationCustom03" className="form-label"> Book You slot</label>
          <input type="date" name="slot" id="validationCustom03" />
        </div>
        <div className="Description">
          <textarea className="form-control" aria-label="With textarea" placeholder="Describe your problem"
            autocomplete="off"></textarea>
        </div>
        <div className="input-group has-validation">
          <div className="invalid-feedback">
            Please select a valid state.
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label className="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
          <button className="my-5 ska-box px-5 py-3 btn btn-primary" type="submit">Book Now</button>
        </div>
      </div>
    </form> */}
  </div>
}

export default CounsellingReg