import React from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getSessionInfo } from '../../actions/sessionActions'
import { Motion, spring, presets } from 'react-motion';
import {ReactMotionLoop} from 'react-motion-loop';


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
        if (this.myContainer) {
            this.setState({
                ...this.state,
                widthOfBoxContainer: this.myContainer.offsetWidth
            })
        }
    }

    handleAnimationWidth = (width) => {
        this.setState({
            ...this.state,
            animationWidth: width
        })
    }

    handleAnimationToggle = (e) => {
       e && e.preventDefault()        
        this.setState({...this.state, 
            open: !this.state.open
        })
    }

    handleAnimationRest = (e) => {

        console.log("ANIMATION REST");

        if (this.state.widthOfBoxContainer > 0) {
            this.setState({
                ...this.state,
                widthOfBoxContainer: 0
            })
            
        } else {
            this.setState({
                ...this.state,
                widthOfBoxContainer: this.myContainer.offsetWidth
            })
        }

        this.setState({
            open: !this.state.open
        })
        
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        console.log(this.myContainer && this.myContainer.offsetWidth);
        const widthOfBoxContainer = this.myContainer && this.myContainer.offsetWidth
        return (
            <div className="" >
                <div>Session Page</div>
                <div>
                    `Hasta adi: {this.props.patient && this.props.patient}`
                </div>
                <div><button onClick={this.handleAnimationToggle} >toggle</button>
                    <Motion  /* Burada metod cagirirsan rerender etmiyor*/ style={{ x: spring(this.state.open ? widthOfBoxContainer : 0, {precision: 0.01, stiffness: 100, damping: 15} ) }}>
                        {({ x }) =>{
                            // console.log(x);

                            if (x === 0) {
                                this.handleAnimationToggle();
                            }
                            


                            // children is a callback which should accept the current value of
                            // `style`
                            // ref={node => node && this.handleAnimationWidth(node.offsetWidth)
                            return <div className="demo0" ref={node => this.myContainer = node ? node : null} >
                                <div className="demo0-block" style={{
                                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                    transform: `translate3d(${x}px, 0, 0)`,
                                }} />
                            </div>}
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
