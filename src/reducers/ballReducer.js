import {
    CHOOSE_BALL_SHAPE_START,
    CHOOSE_BALL_SHAPE_DONE,
    CHOOSE_BALL_SHAPE_ERROR,
} from '../actions/actionConstants';

const initialState = {
    shapeChangeLoading: false,
    shapeChangeError: null,
    shapeChangeLoaded: false,
    shape: 'square',
    speedChangeLoading: false,
    speedChangeError: null,
    speedChangeLoaded: false,
    speed: 1,
    directionChangeLoading: false,
    directionChangeError: null,
    directionChangeLoaded: false,
    direction: 'right',
}

const ballReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHOOSE_BALL_SHAPE_START:
            return {
                ...state,
                shapeChangeLoading: true,
                shapeChangeError: null,
                shapeChangeLoaded: false,
            }
        case CHOOSE_BALL_SHAPE_DONE:
        return {
            ...state,
            shapeChangeLoading: false,
            shapeChangeError: null,
            shapeChangeLoaded: true,
            shape: action.payload
        }
        case CHOOSE_BALL_SHAPE_ERROR:
        return {
            ...state,
            shapeChangeLoading: false,
            shapeChangeError: action.payload,
            shapeChangeLoaded: false,
        }
        
        default:
            return state;
    }
};

export default ballReducer;
