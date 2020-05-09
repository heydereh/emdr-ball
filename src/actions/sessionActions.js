import {
  SESSION_CREATE,
  GET_SESSION_INFO,
  UPDATE_SESSION,
  UPDATE_BALL_SPEED,
  UPDATE_SESSION_WITH_SOCKET_START,
  UPDATE_SESSION_WITH_SOCKET_DONE,
  UPDATE_SESSION_WITH_SOCKET_ERROR,
  SERVER_URL,
  START_STOP_ACTION,
  SET_SOUND_ACTION,
  SET_SHAPE_ACTION,
  GET_SESSION_INFO_FROM_SESSION,
} from "../actions/actionConstants";
import axios from "axios";
import Cookies from "js-cookie";

export const updateSessionWithSocket = (options) => {
  
  return async (dispatch) => {
    // console.log(options);

    dispatch({
      type: UPDATE_SESSION_WITH_SOCKET_START,
    });
    if (options) {
      dispatch({
        type: UPDATE_SESSION_WITH_SOCKET_DONE,
        payload: options,
      });
    } else {
      dispatch({
        type: UPDATE_SESSION_WITH_SOCKET_ERROR,
        payload: new Error("Güncellenecek veri yok"),
      });
    }
  };
};

export const createSession = (options) => {
  const newSessionId = Date.now();
  options.sessionId = newSessionId;
  // console.log(options);
  
  return {
    type: SESSION_CREATE,
    promise: axios.post(`${SERVER_URL}/api/v1/sessions`, options),
    meta: {
      onSuccess: (result, getState) => {
        
        const forCookie = JSON.stringify({
          patient: result.data.data.patient,
          sessionId: result.data.data.sessionId,
          createdAt: result.data.data.createdAt,
        });
        Cookies.set(`${result.data.data.sessionId}`, forCookie, { expires: 1 });
      },
    }
  };

};

export const getSessionInfo = (sessionId) => {

  // SESSION ILK CREATE OLDUGUNDA SIKINTI YOK AMA SAYFA YENILENDIGINDE SADECE SADECE PAUSE REQ GIDIYO GIBI -> reducerdaki if (action.data) yüzündenmiş
  const promise = axios.get(`${SERVER_URL}/api/v1/sessions/${sessionId}`)
                  .then(sessionResponse => {
                    return axios.put(`${SERVER_URL}/api/v1/sessions/${sessionId}`, { isActive: false, _id: sessionResponse.data.data._id })
                  }).catch(err => console.log(err))
  return {
    type: GET_SESSION_INFO,
    promise: promise
  };

};
export const getSessionInfoFromSession = (sessionId) => {
                  
  return {
    type: GET_SESSION_INFO_FROM_SESSION,
    promise: axios.get(`${SERVER_URL}/api/v1/sessions/${sessionId}`)
  };

};


export const updateSession = (options, sessionId) => {
  return {
    type: UPDATE_SESSION,
    promise: axios.put(`${SERVER_URL}/api/v1/sessions/${sessionId}`, options),
  };

};

export const startStopAction = (options, sessionId) => {
  return {
    type: START_STOP_ACTION,
    promise: axios.put(`${SERVER_URL}/api/v1/sessions/${sessionId}`, options),
  };

};
export const setSoundAction = (options, sessionId) => {
  const pauseAnimation = { isActive: false, _id: options._id };
  const promise = axios.put(`${SERVER_URL}/api/v1/sessions/${sessionId}`, pauseAnimation)
                  .then(pauseResponse => {
                    return axios.put(`${SERVER_URL}/api/v1/sessions/${sessionId}`, options)
                  }).catch(err => console.log(err))
  return {
    type: SET_SOUND_ACTION,
    promise
  };
};
export const setShapeAction = (options, sessionId) => {
  return {
    type: SET_SHAPE_ACTION,
    promise: axios.put(`${SERVER_URL}/api/v1/sessions/${sessionId}`, options),
  };
};

export const updateBallSpeed = (options, sessionId) => {
  
  const pauseAnimation = { isActive: false, _id: options._id };
  const promise = axios.put(`${SERVER_URL}/api/v1/sessions/${sessionId}`, pauseAnimation)
                  .then(pauseResponse => {
                    return axios.put(`${SERVER_URL}/api/v1/sessions/${sessionId}`, options)
                  }).catch(err => console.log(err))

  return {
    type: UPDATE_BALL_SPEED,
    promise: promise
  }
}

// İPTAL
// export const deleteSession = (body, sessionId) => {
//   return async (dispatch) => {
//     console.log(body);
//     console.log(sessionId);

//     dispatch({
//       type: DELETE_SESSION_START,
//     });

//     await axios
//       .delete(`${SERVER_URL}/api/v1/sessions/${sessionId}`, {
//         data: body,
//       })
//       .then(({ data }) => {
//         if (data.success) {
//           dispatch({
//             type: DELETE_SESSION_DONE,
//             payload: data.data /** deleted data */,
//           });
//         } else {
//           // Bu kısımlar sonra
//           throw new Error(data.error);
//         }
//       })
//       .catch((err) => {
//         dispatch({
//           type: DELETE_SESSION_ERROR,
//           payload: err,
//         });
//       });
//   };
// };
