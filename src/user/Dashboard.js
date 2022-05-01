import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Dashboard() {
    return <div className='row m-0'>
        <div className='d-block d-lg-none col-1'>
            <button class="btn btn-ska-primary-light mt-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
            <i class="bi  bi-three-dots-vertical text-white"></i></button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel"
                style={{ width: '250px', }}>
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel"></h5>
                    <button type="button" class="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <Sidebar />
            </div>
        </div>
        <div className='d-none d-lg-block col-lg-3 p-0'>
            <Sidebar />
        </div>
        <div className='col-lg-9 ska-bg'>
            <Outlet />
        </div>
    </div>
}
