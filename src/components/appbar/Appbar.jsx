import React from 'react'
import { useLocation } from 'react-router-dom';
import { colorNavbar } from '../../helpers/colors'


const Appbar = () => {

    const location = useLocation();
    // console.log(location);
    

    return (
        <div style={{}} className="appbar-for-admin"  >
            <nav className="container navbar navbar-expand-lg navbar-light appbar-bg" style={{minHeight: "80px", backgroundColor: colorNavbar}}>
                <a className="navbar-brand" href="/">EMDr Eye Theraphy</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${location.pathname === "/home" ? "active" : ""}`}>
                            <a className="nav-link" href="/">Ana Sayfa</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">Danışan Girişi</a>
                        </li> */}
                        <li className={`nav-item ${location.pathname === "/admin" ? "active" : ""}`}>
                            <a className="nav-link" href="/admin">Doktor Girişi</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Appbar;