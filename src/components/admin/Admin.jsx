import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { createSession } from '../../actions/sessionActions'
import { Link } from 'react-router-dom';

export const Admin = () => {
    // mapStateToProps alternatifi hook
    const patientName = useSelector(state => state.currentSession.patient);
    // mapDispatchToProps alternatifi hook
    const dispatch = useDispatch();

    const [sessionId, setsessionId] = useState("")
    // console.log(sessionId);
    
    return (
        <div>
            <div>Admin page </div>
            <div><button onClick={() => dispatch(createSession())} >createsession</button></div>
            <div className="input-group container-md mt-4 ml-1 flex-wrap">
                <input className="form-control sm" type="text" onChange={(event) => setsessionId(event.target.value)} />
                <div className="input-group-append"><button className="btn btn-primary" type="button">
                    <Link
                        className="btn btn-outline-primary"
                        style={{ textDecoration: "none", color: "inherit", lineHeight: "0.4"}}
                        to={`/admin/${sessionId}`}
                >Seansa Gir</Link></button>
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     console.log(state);

//     return {

//     }
// }

// const mapDispatchToProps = {
//     startSession: createSession,
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Admin)