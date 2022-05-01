import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return <>

        <div className="d-flex flex-column flex-shrink-0 p-5 pe-0" style={{ minHeight: '100vh', }}>
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <Link to="/user/mycourse" className="nav-link link-dark">
                        <i className="bi bi-file-play me-2" />
                        My Courses
                    </Link>
                </li>
                <li>
                    <Link to="/user/profile" className="nav-link link-dark">
                        <i className="bi bi-person-square me-2" />
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to="/user/contact" className="nav-link link-dark">
                        <i class="bi bi-envelope-fill me-2" />
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/user/notification" className="nav-link link-dark">
                        <i className="bi bi-bell-fill me-2" />
                        Notification
                    </Link>
                </li>
                <li>
                    <Link to="/result" className="nav-link link-dark">
                        <i className="bi bi-file-text-fill me-2" />
                        Result
                    </Link>
                </li>
            </ul>
            {/* <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div> */}
        </div>
    </>
}
