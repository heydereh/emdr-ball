import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { createSession } from '../../actions/sessionActions'
import { useHistory } from 'react-router-dom';
import EyePhoto from './eye-macro.jpg'
import './admin.css'


export const Admin = () => {
    // mapStateToProps alternatifi hook
    let history = useHistory();
    const hasSessionCreated = useSelector(state => state.currentSession.sessionCreateLoaded);
    const newSessionId = useSelector(state => state.currentSession.sessionId);
    // mapDispatchToProps alternatifi hook
    const dispatch = useDispatch();

    // const [sessionId, setsessionId] = useState("")
    // console.log(sessionId);

    const [drName, setDrName] = useState("");
    const [patient, setPatientName] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createSession({
           drName,
           patient
        }))
    }

    useEffect(() => {
        console.log(`session created?${hasSessionCreated} newSessionId: ${newSessionId}`);
     if (hasSessionCreated && (newSessionId !== -1)) {
       
        console.log(`session created?${hasSessionCreated} newSessionId: ${newSessionId}`)
        history.push(`/admin/${newSessionId}`)
     }  
    })


    return (
            <div /* style={{height: "100%"}} */>
                <div className="container-lg container-md container-sm container-xl">
                    <div className="row mh-100vh">
                        <div className="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0" id="login-block">
                            <div className="m-auto w-lg-75 w-xl-50">
                                <h2 className="text-info font-weight-light mb-5"><i className="fa fa-diamond" />&nbsp;Seans Oluştur</h2>
                                <form onSubmit={handleSubmit} >
                                    <div className="form-group"><label className="text-secondary">Adınız<span><label style={{ fontSize: "smaller" }}><sub>* Danışanınızın ekranında görünecek isminiz</sub></label></span></label><input maxLength={20} className="form-control" type="text" required onChange={(e) => setDrName(e.target.value)} /></div>
                                    <div className="form-group"><label className="text-secondary">Danışan Adı<span><label style={{ fontSize: "smaller" }}><sub>* Danışanınızı seansta karşılamak için..</sub></label></span></label><input maxLength={20} className="form-control" type="text" required onChange={(e) => setPatientName(e.target.value)} /></div>
                                    <button className="btn btn-info mt-2" type="submit">Oluştur</button></form>

                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-end" id="bg-block" style={{ backgroundImage: `url(${EyePhoto})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                            <p className="ml-auto small text-dark mb-2">
                                <em>Photo by&nbsp;</em>
                                <a className="text-dark" href="https://unsplash.com/photos/v0zVmWULYTg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer"><em>Aldain Austria</em></a>
                                <br />
                                </p>
                        </div>
                    </div>
                </div>

            </div>
           
    )
}
