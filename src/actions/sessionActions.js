import { 
    SESSION_CREATE_START,
    SESSION_CREATE_ERROR,
    SESSION_CREATE_DONE,
    GET_SESSION_INFO_START,
    GET_SESSION_INFO_DONE,
    GET_SESSION_INFO_ERROR,
    UPDATE_SESSION_START,
    UPDATE_SESSION_DONE,
    UPDATE_SESSION_ERROR,
    DELETE_SESSION_START,
    DELETE_SESSION_DONE,
    DELETE_SESSION_ERROR,
    SERVER_URL,
 } from '../actions/actionConstants';
import axios from 'axios';
import Cookies from 'js-cookie';


 export const createSession = (options) => {
    const newSessionId = Date.now()
    options.sessionId = newSessionId
    // console.log(options);
    
    return async dispatch => {
        // console.log(options);
        
        dispatch({
            type: SESSION_CREATE_START,

        })

        await axios
            .post(`${SERVER_URL}/api/v1/sessions`, options)
            .then(({ data }) => {
                if (data.success) {
                    dispatch({
                        type: SESSION_CREATE_DONE,
                        payload: data.data
                    })
                    const forCookie = JSON.stringify({
                        patient: data.data.patient,
                        sessionId: data.data.sessionId,
                        createdAt: data.data.createdAt,
                    })
                    Cookies.set(`${data.data.sessionId}`, forCookie, { expires: 1 });
                    
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
                // console.log(data);
                
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

 export const updateSession = (options, sessionId) => {
    

    return async dispatch => {
        console.log(options);
        
        dispatch({
            type: UPDATE_SESSION_START,
        })

        await axios
            .put(`${SERVER_URL}/api/v1/sessions/${sessionId}`, options)
            .then(({ data }) => {
                if (data.success) {
                    dispatch({
                        type: UPDATE_SESSION_DONE,
                        // burada donen data kullanılmıyor socketten update edildi bilgisi karsi tarafa gonderilip yeniden session bilgisi cektiriliyor
                        payload: data.data
                    })
                } else {
                    // Bu kısımlar sonra
                    throw new Error(data.error)
                }
            })
            .catch(error => {
                dispatch({
                    type: UPDATE_SESSION_ERROR,
                    payload: error /* su an exception handling 0 DAHA SONRA DUZELT!!*/
                });
            });
    }
 }

 export const deleteSession = (body, sessionId) => {
    
    

    return async dispatch =>  {
        console.log(body);
        console.log(sessionId);

            dispatch({
            type: DELETE_SESSION_START
        })

        await axios
        .delete(`${SERVER_URL}/api/v1/sessions/${sessionId}`, {
            data: body
        })
        .then(({ data }) => {
            if (data.success) {
                dispatch({
                    type: DELETE_SESSION_DONE,
                    payload: data.data /** deleted data */
                })
            } else {
                // Bu kısımlar sonra
                throw new Error(data.error)
            }
        })
        .catch(err => {
            dispatch({
                type: DELETE_SESSION_ERROR,
                payload: err
            })
        })
    }
 }

 