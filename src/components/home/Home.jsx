import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {


    const sessionId = "1584986021338";

    return (
        <div>
            <Link
                className="btn btn-outline-primary"
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/${sessionId}`}
            >Başla</Link>
            <Link
                className="btn btn-outline-primary"
                style={{ textDecoration: "none", color: "inherit" }}
                to="/admin"
            >Admin</Link>
        </div>
    )
}

export default Home;