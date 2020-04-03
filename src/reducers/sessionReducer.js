import {
    SESSION_CREATE_START,
    SESSION_CREATE_DONE,
    SESSION_CREATE_ERROR,
    GET_SESSION_INFO_START,
    GET_SESSION_INFO_DONE,
    GET_SESSION_INFO_ERROR,
    DELETE_SESSION_ERROR,
    DELETE_SESSION_START,
    DELETE_SESSION_DONE,

} from '../actions/actionConstants'


const initialState = {
    _id: "",
    sessionCreateLoading: false,
    sessionCreateError: null,
    sessionCreateLoaded: false,
    sessionId: -1,
    createdAt: null,
    patient: null,
    ballShape: 'square',
    direction: 'right',
    ballSpeed: '9',
    isActive: false,
    getSessionLoading: false,
    getSessionError: null,
    getSessionLoaded: false,
    hasBallStarted: false,
    sessionDeleteLoading: false,
    sessionDeleteLoaded: false,
    sessionDeleteError: null,
}

const sessionReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case SESSION_CREATE_START:
            return {
                ...state,
                sessionCreateLoading: true,
                sessionCreateError: null,
                sessionCreateLoaded: false,
                sessionId: -1,
                createdAt: null,
                patient: null,
                ballShape: 'square',
                direction: 'right',
                ballSpeed: '0',
                isActive: false,
                getSessionLoading: false,
                getSessionError: null,
                getSessionLoaded: false,
                sessionDeleteLoading: true,
                sessionDeleteLoaded: false,
                sessionDeleteError: null,
            }
        case SESSION_CREATE_DONE:
            return {
                ...state,
                sessionCreateLoading: false,
                sessionCreateError: null,
                sessionCreateLoaded: true,
                sessionId: action.payload.sessionId,
                createdAt: Date.now(),
                patient: action.payload.patient,
                ballShape: action.payload.ballShape,
                direction: action.payload.direction,
                ballSpeed: action.payload.ballSpeed,
                isActive: action.payload.isActive,
                hasBallStarted: action.payload.hasBallStarted,
            }
        case SESSION_CREATE_ERROR:
            return {
                ...state,
                sessionCreateLoading: false,
                sessionCreateError: action.payload,
                sessionCreateLoaded: false,
                sessionId: -1,
                createdAt: null,
                patient: null,
            }
        case GET_SESSION_INFO_START:
            return {
                ...state,
                sessionCreateLoading: true,
                sessionCreateError: null,
                sessionCreateLoaded: false,
                sessionDeleteLoading: true,
                sessionDeleteLoaded: false,
                sessionDeleteError: null,
                
            }
        case GET_SESSION_INFO_DONE:
            return {
                ...state,
                _id: action.payload._id,
                sessionCreateLoading: false,
                sessionCreateLoaded: true,
                sessionId: action.payload.sessionId,
                createdAt: action.payload.createdAt,
                patient: action.payload.patient,
                ballShape: action.payload.ballShape,
                direction: action.payload.direction,
                ballSpeed: action.payload.ballSpeed,
                isActive: action.payload.isActive,
                hasBallStarted: action.payload.hasBallStarted,
                drName: action.payload.drName,
                isSoundPlaying: action.payload.isSoundPlaying,
                sound: action.payload.sound,
            }
        case GET_SESSION_INFO_ERROR:
            return {
                ...state,
                sessionCreateLoading: false,
                sessionCreateError: action.payload,
                sessionCreateLoaded: false,
            }
        case DELETE_SESSION_START:
            return {
                ...state,
                sessionDeleteLoading: true,
                sessionDeleteLoaded: false,
                sessionDeleteError: null,
        }
        case DELETE_SESSION_DONE:
            return {
                ...state,
                sessionDeleteLoading: false,
                sessionDeleteLoaded: true,
                sessionDeleteError: null,
        }
        case DELETE_SESSION_ERROR:
            return {
                ...state,
                sessionDeleteLoading: false,
                sessionDeleteLoaded: false,
                sessionDeleteError: action.payload,
        }
        default:
            return state;
    }
}
export default sessionReducer;