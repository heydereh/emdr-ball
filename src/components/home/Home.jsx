import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    // const sessionId = "1584986021338";
    
    
    const [sessionId, setsessionId] = useState("")
    // TODO buraya textbox ko
    console.log(sessionId);
    return (
        <div >
            <div className="input-group container-md mt-4 ml-1 flex-wrap">
                <input className="form-control sm" type="text" onChange={(event) => setsessionId(event.target.value)} />
                <div className="input-group-append"><button className="btn btn-primary" type="button">
                    <Link
                        className="btn btn-outline-primary"
                        style={{ textDecoration: "none", color: "inherit", lineHeight: "0.4"}}
                        to={`/${sessionId}`}
                >Seansa Gir</Link></button>
                </div>
            </div>

            {/* <div className="input-group" >
                <div className="form-control" type="text">
                    <div className="input-group-append">
                        <button>
                        <Link
                            className="btn btn-outline-primary"
                            style={{ textDecoration: "none", color: "inherit" }}
                            to={`/${sessionId}`}
                        >Başla</Link>
                        </button>
                    </div>
                </div>
            </div> */}


            {/* <Link
                className="btn btn-outline-primary"
                style={{ textDecoration: "none", color: "inherit" }}
                to="/admin"
            >Admin</Link> */}
        </div>
    )
}

export default Home;