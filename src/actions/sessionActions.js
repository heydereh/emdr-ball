import {
  SESSION_CREATE,
  GET_SESSION_INFO,
  UPDATE_SESSION,
  UPDATE_BALL_SPEED,
  UPDATE_SESSION_WITH_SOCKET_START,
  UPDATE_SESSION_WITH_SOCKET_DONE,
  UPDATE_SESSION_WITH_SOCKET_ERROR,
  SERVER_URL,
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
        console.log(result);
        
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

export const getSessionInfo = (sessionId, noSound) => {
  console.log("GET SESSION ACTION");
  let meta = null;

  if (noSound) {
    meta = {
      onSuccess: (result, getState) => {
        updateSession(
          { sound: "off",isActive: false, _id: result.data.data._id },
          sessionId
        );
      },
      // TODO  surekli ayni action ı kullanmak hatalı ileride iptal ettiğimde içeriğine bakmadan tümünü iptal edebilir. Farklı action lar oluştur.
      // onFinish: (result, getState) => {
      //   updateSession(
      //     { sound: "off",isActive: false, _id: result.data.data._id },
      //     sessionId
      //   );
      // }
    };
  }

  return {
    type: GET_SESSION_INFO,
    promise: axios.get(`${SERVER_URL}/api/v1/sessions/${sessionId}`),
    meta: meta,
  };

};


export const updateSession = (options, sessionId) => {
  return {
    type: UPDATE_SESSION,
    promise: axios.put(`${SERVER_URL}/api/v1/sessions/${sessionId}`, options),
  };

};

export const updateBallSpeed = (options, sessionId) => {
  console.log(options);
  
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
