import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from "react-router-dom";
import { connect } from 'react-redux';
import { getSessionInfo } from '../../actions/sessionActions'
import injectStyle from '../../helpers/incejctStyle';
import socketIOClient from "socket.io-client";

// 


export const Session = () => {
    let match = useRouteMatch();
    console.log(match.params.sessionId);
    const socket = socketIOClient(`http://localhost:5050`);

    const dispatch = useDispatch();

    // mapStateToProps alternatifi hook
    const { patient, ballShape, direction, ballSpeed, isActive } = useSelector(state => {
        // console.log(state);
        return {
            patient: state.currentSession.patient,
            ballShape: state.currentSession.ballShape,
            direction: state.currentSession.direction,
            ballSpeed: state.currentSession.ballSpeed,
            isActive: state.currentSession.isActive,
        }
    })

    // TODO isactive false olduğunda bu inject işlemini nası geri alacağımı düşünmem lazım
    const keyframesStyle = `
    @keyframes ${isActive ? 'mymoveSession' : 'moveSessionStop'} {
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

    // ${this.state.speed}

    const speedArray = [0, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.8, 0.5]
    const style = {


        container: {
            height: "100%",
            width: "100%"
        },
    }

    const shape = new Map();

    shape.set('square', {
        width: "5rem",
        height: "5rem",
        background: "red",
        position: "relative",
        WebkitAnimation: `mymoveSession ${ballSpeed && speedArray[ballSpeed]}s infinite linear`,/* infinite */
        animationDirection: 'normal',
        animationTimingFunciton: 'linear',
    })
    shape.set('circle', {
        width: "6rem",
        height: "6rem",
        background: "red",
        borderRadius: "50%",
        position: "relative",
        WebkitAnimation: `mymoveSession ${ballSpeed && speedArray[ballSpeed]}s infinite linear`,/* infinite */
        animationDirection: 'normal',
        animationTimingFunciton: 'linear',
    })
    shape.set('diamond', {
        position: "relative",
        backgroundColor: "red",
        height: "5rem",
        transform: "rotate(-45deg)",
        width: "5rem",
        WebkitAnimation: `mymoveSession ${ballSpeed && speedArray[ballSpeed]}s infinite linear`,/* infinite */
        animationDirection: 'normal',
        animationTimingFunciton: 'linear',
    })


    console.log(shape.get('square'));


    return (
        <div className="" style={{ height: "100vh" }} >
            <div>Session Page {`Hasta adi: ${patient}`}</div>
            {/* <button onClick={() => socket.emit('react', { hello: 'from client' })} >send msg</button> */}
            <div>
                {/* `Hasta adi: {this.props.patient && this.props.patient}` */}
            </div>

            {/* <div className="px-2"> */}
            <div className="bg-secondary pt-4 pl-3" style={style.container}>
                <div style={shape.get(`${ballShape}`)} ></div>
            </div>
            {/* </div> */}

        </div>
    )
}

// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
        // patient: state.currentSession.patient,
        // ballShape: state.currentSession.ballShape,
        // direction: state.currentSession.direction,
        // ballSpeed: state.currentSession.ballSpeed,
//     }
// }

// const mapDispatchToProps = {
//     getSessionInfo,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Session));
