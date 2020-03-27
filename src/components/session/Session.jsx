import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch  } from "react-router-dom";
import { connect } from 'react-redux';
import { getSessionInfo } from '../../actions/sessionActions'
import injectStyle from '../../helpers/incejctStyle';

// 


export const Session = () =>  {
    let match = useRouteMatch();
        console.log(match.params.sessionId);
    const keyframesStyle = `
        @keyframes mymoveSession {
            0%   {left: 0px; }
            50% {left: 95%;}
            100% {left: 0px;}
        }
    `;
    const dispatch = useDispatch();
    injectStyle(keyframesStyle);

    // mapStateToProps alternatifi hook
    const { patient, ballShape, direction, ballSpeed } = useSelector(state => {
        // console.log(state);
        return {
        patient: state.currentSession.patient,
        ballShape: state.currentSession.ballShape,
        direction: state.currentSession.direction,
        ballSpeed: state.currentSession.ballSpeed,
      }
    })

    // mapDispatchToProps alternatifi hook
    useEffect(()=> {
        
        dispatch(getSessionInfo(match.params.sessionId));
    }, [])

    // ${this.state.speed}
    
   const speedArray = [0, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.8, 0.5 ]
   const style = {
        square: {
            width: "5rem",
            height: "5rem",
            background: "red",
            position: "relative",
            WebkitAnimation: `mymoveSession ${ballSpeed && speedArray[ballSpeed]}s infinite linear`,/* infinite */
            animationDirection: 'normal',
            animationTimingFunciton: 'linear',
        },
        container: {
            height: "100%",
            width: "100%"
        },
    }

        
      
        return (
            <div className="" style={{height: "100vh" }} >
                <div>Session Page</div>
                <div>
                    {/* `Hasta adi: {this.props.patient && this.props.patient}` */}
                </div>

                {/* <div className="px-2"> */}
                    <div className="bg-secondary pt-4 pl-3" style={style.container}>
                        <div style={style.square} ></div>
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
