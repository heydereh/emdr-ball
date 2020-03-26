import React from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getSessionInfo } from '../../actions/sessionActions'
import injectStyle from '../../helpers/incejctStyle';

// 
const keyframesStyle = `
    @keyframes mymoveSession {
        0%   {left: 0px; }
        50% {left: 95%;}
        100% {left: 0px;}
    }
    `;
injectStyle(keyframesStyle);

class Session extends React.Component {

    state = {
        open: false,
        animationWidth: 100,
        speed: 4,
    }

    componentDidMount() {
        this.props.getSessionInfo(this.props.match.params.sessionId);
        if (this.myContainer) {
            this.setState({
                ...this.state,
                widthOfBoxContainer: this.myContainer.offsetWidth
            })
        }
    }
    // ${this.state.speed}
    speedArray = [0, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.8, 0.5 ]
    style = {
        square: {
            width: "5rem",
            height: "5rem",
            background: "red",
            position: "relative",
            WebkitAnimation: `mymoveSession ${this.props.ballSpeed && this.props.ballSpeed}s infinite linear`,/* infinite */
            animationDirection: 'normal',
            animationTimingFunciton: 'linear',
        },
        container: {
            height: "100%",
            width: "100%"
        },
    }


    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <div className="" >
                <div>Session Page</div>
                <div>
                    `Hasta adi: {this.props.patient && this.props.patient}`
                </div>

                {/* <div className="px-2"> */}
                    <div className="bg-secondary pt-4 pl-3" style={this.style.container}>
                        <div style={this.style.square} ></div>
                    </div>
                {/* </div> */}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        patient: state.currentSession.patient,
        ballShape: state.currentSession.ballShape,
        direction: state.currentSession.direction,
        ballSpeed: state.currentSession.ballSpeed,
    }
}

const mapDispatchToProps = {
    getSessionInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Session));
