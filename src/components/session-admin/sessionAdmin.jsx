import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from "react-router-dom";
import { Pause, Play } from 'react-feather';
import { updateSession, getSessionInfo } from '../../actions/sessionActions'
import { useStateWithCallbackInstant } from 'use-state-with-callback';

export const SessionAdmin = () => {
    let match = useRouteMatch();
    const dispatch = useDispatch();
      // mapDispatchToProps alternatifi hook
      useEffect(()=> {
        
        dispatch(getSessionInfo(match.params.sessionId));
    }, [])
    const { patient, ballShape, direction, ballSpeed, hasBallStarted } = useSelector(state => {
        console.log(state);
        
        return {
            patient: state.currentSession.patient,
            ballShape: state.currentSession.ballShape,
            direction: state.currentSession.direction,
            ballSpeed: state.currentSession.ballSpeed,
            hasBallStarted: state.currentSession.hasBallStarted,
        }
    })
   

    const [speedOfBall, setSpeed] = useStateWithCallbackInstant(ballSpeed, newSpeed => {
        console.log(newSpeed);
        // TODO HIZ İŞİ ANLIK OLMUYOR EKSPTRA BUTONLA GONDERMEK GEREK
    })

    const [shape, setShape] = useState("Square")
    console.log(speedOfBall);

    return (
        <div className="" >
            <div className="row" style={{ height: "100vh" }}>
                <div className="col-4 border border-dark">
                    <div className="text-break" >ADMIN SESSION PAGE</div>
                    <div className="text-break" >
                        `SessionID: {match.params.sessionId}`
                </div>
                    <div>
                        <div className="mt-2">
                            {`SET SPEED [${speedOfBall}]`}
                        </div>
                        <div className="mt-2" id="speed-slider">
                            <input style={{}} type="range" min="0" max="9" value={ballSpeed} className="slider w-100" onChange={(e) => setSpeed(e.target.value)} id="myRange" />
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

