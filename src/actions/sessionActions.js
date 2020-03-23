import { 
    SESSION_CREATE_START,
    SESSION_CREATE_ERROR,
    SESSION_CREATE_DONE,
    GET_SESSION_INFO_START,
    GET_SESSION_INFO_DONE,
    GET_SESSION_INFO_ERROR,
    SERVER_URL,
 } from '../actions/actionConstants';
import axios from 'axios';

const pseudoOptions = {
    sessionId: Date.now(),
    patient: "Hasta 1",
    ballShape: "circle",
    direction: "right",
    ballSpeed: 5,
    isActive: true,
}

 export const createSession = (options = pseudoOptions) => {
    // const sessionId = Date.now()
    // console.log(`SESSION ID: ${sessionId} START`);

    return async dispatch => {

        dispatch({
            type: SESSION_CREATE_START,

        })

        await axios
            .post(`${SERVER_URL}/api/v1/sessions`, options)
            .then(({ data }) => {
                if (data.success) {
                    dispatch({
                        type: SESSION_CREATE_DONE,
                        payload: data
                    })
                } else {
                    // Bu kısımlar sonra
                    throw new Error(data.error)
                }
            })
            .catch(error => {
                dispatch({
                    type: SESSION_CREATE_ERROR,
                    payload: error
                });
            });
    }
 }
 
 export const getSessionInfo = (sessionId) => {

    return async dispatch => {

        dispatch({
            type: GET_SESSION_INFO_START,

        })

        await axios
            .get(`${SERVER_URL}/api/v1/sessions/${sessionId}`)
            .then(({ data }) => {
                console.log(data);
                
                if (data.success) {
                    dispatch({
                        type: GET_SESSION_INFO_DONE,
                        payload: data.data
                    })
                } else {
                    // Bu kısımlar sonra
                    throw new Error(data.error)
                }
            })
            .catch(error => {
                dispatch({
                    type: GET_SESSION_INFO_ERROR,
                    payload: error
                });
            });
    }
 }

 