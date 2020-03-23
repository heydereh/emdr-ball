import React from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getSessionInfo } from '../../actions/sessionActions'
import { Motion, spring } from 'react-motion';

const style = {
    square: {
        width: "5em",
        height: "5em",
        background: "red",
        position: "absolute",
        
    },

}

class Session extends React.Component {

    state = {
        open: false,
        animationWidth: 100,
    }

    componentDidMount() {
        this.props.getSessionInfo(this.props.match.params.sessionId);
    }

    handleAnimationWidth = (width) => {
        this.setState({
            ...this.state,
            animationWidth: width
        })
    }

    handleAnimationToggle = (e) => {
        e.preventDefault();
        this.setState({...this.state, 
            open: !this.state.open
        })

    }

    render() {
        console.log(this.props);
        console.log(this.myContainer && this.myContainer.offsetWidth);
        const widthOfBoxContainer = this.myContainer && this.myContainer.offsetWidth
        return (
            <div className="" >
                <div>Session Page</div>
                <div>
                    `Hasta adi: {this.props.patient && this.props.patient}`
                </div>
                <div><button onClick={this.handleAnimationToggle} >toggle</button>
                    <Motion style={{ x: spring(this.state.open ? widthOfBoxContainer : 0) }}>
                        {({ x }) =>
                            // children is a callback which should accept the current value of
                            // `style`
                            // ref={node => node && this.handleAnimationWidth(node.offsetWidth)
                            <div className="demo0" ref={node => this.myContainer = node ? node : null} >
                                <div className="demo0-block" style={{
                                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                    transform: `translate3d(${x}px, 0, 0)`,
                                }} />
                            </div>
                        }
                    </Motion>
                </div>
                <div className="px-2">
                    <div className="bg-secondary pt-4 pl-3" style={{ height: "100vh" }}>
                        <div className style={style.square} ></div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        patient: state.currentSession.patient,
    }
}

const mapDispatchToProps = {
    getSessionInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Session));
