import React from 'react'
import { withRouter } from "react-router-dom";

class Session extends React.Component {
    
    render() {
        return (
            <div>
                <div>
                    `SessionID: {this.props.match.params.sessionId}`
                </div>
                BALL
            </div>
        )
    }
    
    
}

export default withRouter(Session);
