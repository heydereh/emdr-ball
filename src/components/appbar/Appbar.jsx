import React from 'react'

const Appbar = () => {
    return (
        <div className="appbar-for-admin">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{minHeight: "80px"}}>
                <a className="navbar-brand" href="/">EMDr Eye Theraphy</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Ana Sayfa <span className="sr-only">(current)</span></a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">Danışan Girişi</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/admin">Doktor Girişi</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Appbar;