import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from "react-router-dom";
import { getSessionInfo } from '../../actions/sessionActions'
import injectStyle from '../../helpers/incejctStyle';
import socketIOClient from "socket.io-client";
import drip1 from './short-drip.wav'
import drip2 from './short-drip2.wav'
// 

export const Session = (props) => {
    let match = useRouteMatch();
    console.log(props);
    const socket = socketIOClient(`http://localhost:5050`);

    const dispatch = useDispatch();

    // mapStateToProps alternatifi hook
    const { patient, ballShape, drName, ballSpeed, isActive, direction } = useSelector(state => {
        // console.log(state);
        return {
            patient: state.currentSession.patient,
            drName: state.currentSession.drName,
            ballShape: state.currentSession.ballShape,
            direction: state.currentSession.direction,
            ballSpeed: state.currentSession.ballSpeed,
            isActive: state.currentSession.isActive,
        }
    })
    console.log(ballSpeed);
    
    // TODO isactive false olduğunda bu inject işlemini nası geri alacağımı düşünmem lazım
    const keyframesStyle = `
    @keyframes mymoveSession {
        0%   {left: 0px; }
        50% {left: 90%;}
        100% {left: 0px;}
    }
`;
    // Keyframes inject
    injectStyle(keyframesStyle);

    // ComponentDidMount
    useEffect(() => {

        // console.log(socket);
        socket.on("fromServer", data => {
            console.log(data);
            if (data.hasSessionChanged) {
                console.log("session changed");
                dispatch(getSessionInfo(match.params.sessionId));

            }
        })
        socket.on("welcome", data => console.log(data))
        dispatch(getSessionInfo(match.params.sessionId));
    }, [])

    const speedArray = [0, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.8, 0.5]
    const style = {
        container: {
            height: "100%",
            width: "100%"
        },
    }

    const [play, togglePlay] = useState(false)
    const [sound, setSound] = useState(drip1)

    const shape = new Map();

    shape.set('square', {
        width: "5rem",
        height: "5rem",
        background: '#990000',
        position: "relative",
        WebkitAnimation: `${isActive ? 'mymoveSession' : 'moveSessionStop'} ${ballSpeed && speedArray[ballSpeed]}s infinite linear`,/* infinite */
        animationDirection: 'normal',
        animationTimingFunciton: 'linear',
    })
    shape.set('circle', {
        width: "6rem",
        height: "6rem",
        background: '#990000',
        borderRadius: "50%",
        position: "relative",
        WebkitAnimation: `${isActive ? 'mymoveSession' : 'moveSessionStop'} ${ballSpeed && speedArray[ballSpeed]}s infinite linear`,/* infinite */
        animationDirection: 'normal',
        animationTimingFunciton: 'linear',
    })
    shape.set('diamond', {
        position: "relative",
        backgroundColor: '#990000',
        height: "5rem",
        transform: "rotate(-45deg)",
        width: "5rem",
        WebkitAnimation: `${isActive ? 'mymoveSession' : 'moveSessionStop'} ${ballSpeed && speedArray[ballSpeed]}s infinite linear`,/* infinite */
        animationDirection: 'normal',
        animationTimingFunciton: 'linear',
    })

    // admin or patient page 

    const inAdminPage = <div className="ml-3">Hasta adı: <strong>{patient}.</strong></div>
    const inSessionPage = <div>
        <div className="border-bottom-dark ml-3">Sayın <strong>{patient}</strong>, seansınıza hoşgeldiniz. Doktorunuz birazdan seansı başlatacaktır.</div>
        <div className="ml-3 mt-1">Doktor adı: <strong>{drName}.</strong></div>
    </div>

    return (
        <div className="" style={{ height: "100vh" }} >
            <div className="border border-dark border-top-0 border-left-0 border-right-0 mb-1 mt-3">
                {props.admin ? inAdminPage : inSessionPage}
            </div>
            {/* <button onClick={() => socket.emit('react', { hello: 'from client' })} >send msg</button> */}
            <div>
                {/* `Hasta adi: {this.props.patient && this.props.patient}` */}
            </div>

            {/* <div className="px-2"> */}
            <div className="pt-4 pl-3" style={style.container}>
                <div style={shape.get(`${ballShape}`)} ></div>
            </div>
            {/* </div> */}

        </div>
    )
}

