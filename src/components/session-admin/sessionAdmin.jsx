import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from "react-router-dom";
import { Pause, Play } from 'react-feather';
import { updateSession, getSessionInfo } from '../../actions/sessionActions'

export const SessionAdmin = () => {
    let match = useRouteMatch();
    const sessionId = match.params.sessionId
    const dispatch = useDispatch();
    // mapDispatchToProps alternatifi hook
    useEffect(()=> {
      
      dispatch(getSessionInfo(sessionId));
  }, [])
    const { patient, ballShape, direction, ballSpeed, hasBallStarted } = useSelector(state => ({
            patient: state.currentSession.patient,
            ballShape: state.currentSession.ballShape,
            direction: state.currentSession.direction,
            ballSpeed: state.currentSession.ballSpeed,
            hasBallStarted: state.currentSession.hasBallStarted,
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

    const [shape, setShape] = useState("Square")
    console.log(id);
    console.log(ballSpeed);
    console.log(direction);
    console.log(ballShape);
    console.log(patient);
    console.log(hasBallStarted);

    return (
        <div className="" >
            <div className="row" style={{ height: "100vh" }}>
                <div className="col-4 border border-dark">
                    <div className="text-break" >ADMIN SESSION PAGE</div>
                    <div className="text-break" >
                        `SessionID: {sessionId}`
                </div>
                    <div>
                        <div className="mt-2">
                            {`SET SPEED [${speedOfBall}]`}
                        </div>
                        <div className="mt-2" id="speed-slider">
                            <input style={{}} type="range" min="0" max="9" value={speedOfBall} className="slider w-100" onChange={(e) => setSpeed(e.target.value)} id="myRange" />
                            <button className="btn btn-primary" onClick={() => dispatch(updateSession({ballSpeed: speedOfBall, _id: id}, sessionId))} >Apply Speed</button>
                        </div>
                        <div className="mt-2">
                            SET SHAPE
                        </div>
                        <div className="mt-2 ml-3" id="shapeRadioGroup" onChange={(e) => setShape(e.target.value) }>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="shapRadios" id="squareRadio" value="Square" defaultChecked={shape ==="Square" } />
                                        <label className="form-check-label" htmlFor="squareRadio">
                                            Square
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="shapRadios" id="circleRadio" value="Circle" defaultChecked={shape ==="Circle" } />
                                        <label className="form-check-label" htmlFor="circleRadio">
                                            Circle
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="shapRadios" id="heartRadio" value="Heart" defaultChecked={shape ==="Heart" } />
                                        <label className="form-check-label" htmlFor="heartRadio">
                                            Heart
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button type="button" className="btn btn-outline-primary"><span><Pause size={20} /></span> Pause</button>
                            <button type="button" className="btn btn-outline-primary ml-2"><span><Play size={20} /> </span>Resume</button>
                        </div>

                    </div>
                </div>
                {/* SAĞ TARAF */}
                <div className="col-8 border border-dark">
                    TOP BURADA DURMALI
            </div>
            </div>
        </div>
    )
}

