import React from 'react'
import { useLocation } from 'react-router-dom';


const Appbar = (props) => {

    const location = useLocation();
    // console.log(location.pathname.includes('admin'));
    
    const { cinemaMod } = props;
    const isAdmin = location.pathname.includes('admin')
    return (
        <div style={{}} className="appbar-for-admin"  >
            <nav className={`container navbar navbar-expand-lg navbar-light appbar-bg ${(cinemaMod && (!isAdmin)) ? 'color-navbar-opacity' : 'color-navbar'}`} style={{minHeight: "80px"}}>
                <a className="navbar-brand" href="/">EMDRTR</a>
            </nav>

        </div>
    )
}

export default Appbar;