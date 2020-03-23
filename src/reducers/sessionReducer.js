import {
    SESSION_CREATE_START,
    SESSION_CREATE_DONE,
    SESSION_CREATE_ERROR,
    GET_SESSION_INFO_START,
    GET_SESSION_INFO_DONE,
    GET_SESSION_INFO_ERROR,

} from '../actions/actionConstants'


const initialState = {
    sessionCreateLoading: false,
    sessionCreateError: null,
    sessionCreateLoaded: false,
    sessionId: -1,
    createdAt: null,
    patient: null,
    ballShape: 'square',
    direction: 'right',
    ballSpeed: '5',
    isActive: false,
    getSessionLoading: false,
    getSessionError: null,
    getSessionLoaded: false,

}

const sessionReducer = (state = initialState, action) => {

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
                ballSpeed: '5',
                isActive: false,
                getSessionLoading: false,
                getSessionError: null,
                getSessionLoaded: false,
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
                isActive: true,
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
            }
        case GET_SESSION_INFO_DONE:
            return {
                ...state,
                sessionCreateLoading: false,
                sessionCreateLoaded: true,
                sessionId: action.payload.sessionId,
                createdAt: action.payload.createdAt,
                patient: action.payload.patient,
                ballShape: action.payload.ballShape,
                direction: action.payload.direction,
                ballSpeed: action.payload.ballSpeed,
                isActive: action.payload.isActive,
            }
        case GET_SESSION_INFO_ERROR:
        return {
            ...state,
            sessionCreateLoading: false,
            sessionCreateError: action.payload,
            sessionCreateLoaded: false,
        }
        default:
            return state;
    }
}
export default sessionReducer;