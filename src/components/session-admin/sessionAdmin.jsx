import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch, useHistory } from "react-router-dom";
import { Pause, Play, XSquare } from 'react-feather';
import { updateSession, getSessionInfo, deleteSession } from '../../actions/sessionActions'
import socketIOClient from "socket.io-client";
import { Session } from '../session/Session'
import { DeleteModal } from '../Modals/DeleteModal'
import { colorButton } from '../../helpers/colors'



export const SessionAdmin = () => {
    let history = useHistory();
    let match = useRouteMatch();
    const sessionId = match.params.sessionId
    const socket = socketIOClient(`http://localhost:5050`);
    socket.on('connect', () => {
        console.log("Socket Bağlantısı : "+socket.connected);
        
    })
    socket.on('disconnect', () => {
        console.log("Socket Bağlantısı : "+socket.connected);
        
    })
    
    const dispatch = useDispatch();
    // mapDispatchToProps alternatifi hook
    useEffect(() => {

        dispatch(getSessionInfo(sessionId));
    }, [])

    const { patient, ballShape, direction, ballSpeed, hasBallStarted, sessionDeleteLoaded } = useSelector(state => ({
        id: state.currentSession._id,
        patient: state.currentSession.patient,
        ballShape: state.currentSession.ballShape,
        direction: state.currentSession.direction,
        ballSpeed: state.currentSession.ballSpeed,
        hasBallStarted: state.currentSession.hasBallStarted,
        sessionDeleteLoaded: state.currentSession.sessionDeleteLoaded,
    }))
    // bunu yukarıdaki gruba ekleyince alamadı bi türlü
    const id = useSelector(state => state.currentSession._id);


    /**
     * Burada saçma işler döndü ben de tam anlamadım özetle
     * storedaki data ile state i güncelleme yapıldı
     * önce store datası default olarak veriliyor. sonra use effectle 
     * shouldcomponentupdate alternatifi hook ile yeni render da state güncelleniyor
     */
    const [speedOfBall, setSpeed] = useState(ballSpeed)

    useEffect(() => {
        setSpeed(ballSpeed)
    }, [ballSpeed])


  useEffect(() => {

    if (sessionDeleteLoaded) {
        history.push("/admin")
    }
    })

    const [modal, toggleModal] = useState(false)

    const handleOpenModal = () => {
        toggleModal(true)
    }
    const handleCloseModal = () => {
        console.log("modal closed");
        
        toggleModal(false)
    }

    const deleteSessionConfirmed = () => {
        console.log("SESSION DELETED");
        
        dispatch(deleteSession({_id: id}, sessionId))
    }

    return (
        <div className="" >
            <div className="row" style={{ height: "100vh", }}>
                <div className="col-4 border border-dark">
                    <div className="text-break" >ADMIN SESSION PAGE</div>
                    <div className="text-break" >
                        `SessionID: {sessionId}`
                </div>
                <div className="ml-3">
                    <div className="mt-2">
                        {`SET SPEED [${speedOfBall}]`}
                    </div>
                    <div className="mt-2" id="speed-slider">
                        <input style={{}} type="range" min="0" max="9" value={speedOfBall} className="slider w-100" onChange={(e) => setSpeed(e.target.value)} id="myRange" />
                        <button style={{backgroundColor: colorButton}} className="btn" onClick={() => dispatch(updateSession({ ballSpeed: speedOfBall, _id: id }, sessionId))} >Apply Speed</button>
                    </div>
                    <div className="mt-2">
                        SET SHAPE
                    </div>
                    <div className="mt-2 ml-3" id="shapeRadioGroup" onChange={(e) => dispatch(updateSession({ ballShape: e.target.value, _id: id }, sessionId))}>
                        <div className="row">
                            <div className="col-sm">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="shapRadios" id="squareRadio" value="square" defaultChecked={ballShape === "square"} />
                                    <label className="form-check-label" htmlFor="squareRadio">
                                        Square
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="shapRadios" id="circleRadio" value="circle" defaultChecked={ballShape === "circle"} />
                                    <label className="form-check-label" htmlFor="circleRadio">
                                        Circle
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="shapRadios" id="heartRadio" value="diamond" defaultChecked={ballShape === "diamond"} />
                                    <label className="form-check-label" htmlFor="diamondRadio">
                                        Diamond
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button type="button" className="btn btn-outline-info btn-sm" onClick={() => dispatch(updateSession({ isActive: false, _id: id }, sessionId))} ><span><Pause size={20} /></span> Pause</button>
                        <button type="button" className="btn btn-outline-info ml-2 btn-sm" onClick={() => dispatch(updateSession({ isActive: true, _id: id }, sessionId))} ><span><Play size={20} /> </span>Resume</button>
                        <button type="button" className="btn btn-outline-danger ml-2 btn-sm" onClick={handleOpenModal} ><span><XSquare size={20} /> </span>Çıkış</button>
                    </div>

                </div>
                </div>
                {/* SAĞ TARAF */}
                <div className="col-8 border border-dark">
                    <Session admin={true} />
            </div>
            </div>
            <DeleteModal show={modal} title={"Seansı"} handleCloseModal={handleCloseModal} deleteComfirmed={deleteSessionConfirmed} />
        </div>
    )
}

