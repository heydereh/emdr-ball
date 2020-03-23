import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createSession } from '../../actions/sessionActions'

class Admin extends Component {


    handleCreateSession = () => {
        console.log("CREATE BUTTON CLICKED");
        this.props.startSession();
    }

    render() {
        return (
            <div>
               <div>Admin page </div>
               <div><button onClick={this.handleCreateSession} >createsession</button></div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    
    return {

    }
}

const mapDispatchToProps = {
    startSession: createSession,
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin);