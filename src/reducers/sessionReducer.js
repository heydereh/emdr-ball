import {
  UPDATE_SESSION_WITH_SOCKET_START,
  UPDATE_SESSION_WITH_SOCKET_DONE,
  UPDATE_SESSION_WITH_SOCKET_ERROR,
  GET_SESSION_INFO,
  GET_SESSION_INFO_FROM_SESSION,
  SESSION_CREATE,
  UPDATE_BALL_SPEED,
  START_STOP_ACTION,
} from "../actions/actionConstants";
import { handle } from "redux-pack";

const initialState = {
  _id: "",
  sessionCreateLoading: false,
  sessionCreateError: null,
  sessionCreateLoaded: false,
  sessionId: -1,
  createdAt: null,
  patient: null,
  ballShape: "square",
  direction: "right",
  ballSpeed: "9",
  isActive: false,
  getSessionLoading: false,
  getSessionError: null,
  getSessionLoaded: false,
  hasBallStarted: false,
  isSoundPlaying: false,
  sessionDeleteLoading: false,
  sessionDeleteLoaded: false,
  sessionDeleteError: null,
  sessionUpdateLoading: false,
  sessionUpdateLoaded: false,
  sessionUpdateError: null,
  ballSpeedUpdateLoading: false,
  ballSpeedUpdateLoaded: false,
  ballSpeedUpdateError: null,
  startStopLoading: false,
  startStopLoaded: false,
  startStopError: null,
};

const sessionReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case SESSION_CREATE:
      return handle(state, action, {
        start: (prevState) => {
          return {
            ...prevState,
            sessionCreateLoading: true,
            sessionCreateError: null,
            sessionCreateLoaded: false,
            sessionId: -1,
            createdAt: null,
            patient: null,
            ballShape: "square",
            direction: "right",
            ballSpeed: "0",
            isActive: false,
            getSessionLoading: false,
            getSessionError: null,
            getSessionLoaded: false,
            sessionDeleteLoading: true,
            sessionDeleteLoaded: false,
            sessionDeleteError: null,
            updating: false,
            updated: true,
            updateError: null,
          };
        },
        success: (prevState) => {
          return {
            ...prevState,
            sessionCreateLoaded: true,
            sessionCreateLoading: false,
            sessionCreateError: null,
            sessionId: action.payload.data.data.sessionId,
            createdAt: Date.now(),
            patient: action.payload.data.data.patient,
            ballShape: action.payload.data.data.ballShape,
            direction: action.payload.data.data.direction,
            ballSpeed: action.payload.data.data.ballSpeed,
            isActive: action.payload.data.data.isActive,
          };
        },
        failure: (prevState) => {
          return {
            ...prevState,
            sessionCreateLoading: false,
            sessionCreateError:
              (action.payload &&
                action.payload.response &&
                action.payload.response.data &
                  action.payload.response.data.error &&
                action.payload.response.data.error) ||
              "baglanti hatasi",
          };
        },
        finish: (prevState) => {
          return {
            ...prevState,
          };
        },
      });
    /* case UPDATE_SESSION:
      return handle(state, action, {
        start: (prevState) => {
          return {
            ...prevState,
            sessionUpdateLoading: true,
            sessionUpdateLoaded: false,
            sessionUpdateError: null,
          };
        },
        success: (prevState) => {
          return {
            ...prevState,
            sessionUpdateLoaded: true,
            ballShape: action.payload.data.data.ballShape,
            direction: action.payload.data.data.direction,
            ballSpeed: action.payload.data.data.ballSpeed,
            isActive: action.payload.data.data.isActive,
            isSoundPlaying: action.payload.data.data.isSoundPlaying,
            sound: action.payload.data.data.sound,
          };
        },
        failure: (prevState) => {
          return {
            ...prevState,
            sessionUpdateLoading: false,
            sessionUpdateError:
              (action.payload &&
                action.payload.response &&
                action.payload.response.data &
                  action.payload.response.data.error &&
                action.payload.response.data.error) ||
              "baglanti hatasi",
          };
        },
        finish: (prevState) => {
          return {
            ...prevState,
          };
        },
      }); */
    case GET_SESSION_INFO:
      return handle(state, action, {
        start: (prevState) => ({
          ...prevState,
          getSessionLoading: false,
          getSessionError: null,
          getSessionLoaded: false,
        }),
        success: (prevState) => {
          return {
            ...prevState,
            getSessionLoaded: true,
            _id: action.payload.data.data._id,
            getSessionLoading: false,
            sessionId: action.payload.data.data.sessionId,
            createdAt: action.payload.data.data.createdAt,
            patient: action.payload.data.data.patient,
            ballShape: action.payload.data.data.ballShape,
            direction: action.payload.data.data.direction,
            ballSpeed: action.payload.data.data.ballSpeed,
            isActive: action.payload.data.data.isActive,
            hasBallStarted: action.payload.data.data.hasBallStarted,
            drName: action.payload.data.data.drName,
            isSoundPlaying: action.payload.data.data.isSoundPlaying,
            sound: action.payload.data.data.sound,
          };
        },
        failure: (prevState) => {
          return {
            ...prevState,
            getSessionLoading: false,
            getSessionError:
              (action.payload &&
                action.payload.response &&
                action.payload.response.data &
                  action.payload.response.data.error &&
                action.payload.response.data.error) ||
              "baglanti hatasi",
            getSessionLoaded: false,
          };
        },
        finish: (prevState) => ({
          ...prevState,
        }),
      });
      case GET_SESSION_INFO_FROM_SESSION:
      return handle(state, action, {
        start: (prevState) => ({
          ...prevState,
          getSessionLoading: false,
          getSessionError: null,
          getSessionLoaded: false,
        }),
        success: (prevState) => {
          return {
            ...prevState,
            getSessionLoaded: true,
            _id: action.payload.data.data._id,
            getSessionLoading: false,
            sessionId: action.payload.data.data.sessionId,
            createdAt: action.payload.data.data.createdAt,
            patient: action.payload.data.data.patient,
            ballShape: action.payload.data.data.ballShape,
            direction: action.payload.data.data.direction,
            ballSpeed: action.payload.data.data.ballSpeed,
            isActive: action.payload.data.data.isActive,
            hasBallStarted: action.payload.data.data.hasBallStarted,
            drName: action.payload.data.data.drName,
            isSoundPlaying: action.payload.data.data.isSoundPlaying,
            sound: action.payload.data.data.sound,
          };
        },
        failure: (prevState) => {
          return {
            ...prevState,
            getSessionLoading: false,
            getSessionError:
              (action.payload &&
                action.payload.response &&
                action.payload.response.data &
                  action.payload.response.data.error &&
                action.payload.response.data.error) ||
              "baglanti hatasi",
            getSessionLoaded: false,
          };
        },
        finish: (prevState) => ({
          ...prevState,
        }),
      });
    case UPDATE_BALL_SPEED:
      console.log(state);
      console.log(action);
      return handle(state, action, {
        start: (prevState) => {
          console.log("SPEED START");

          return {
            ...prevState,
            ballSpeedUpdateLoading: true,
            ballSpeedUpdateLoaded: false,
            ballSpeedUpdateError: null,
          };
        },
        success: (prevState) => {
          // console.log("SPEED SUCCESS");

          return {
            ...prevState,
            ballSpeedUpdateLoading: false,
            ballSpeedUpdateLoaded: true,
          };
        },
        failure: (prevState) => {
          console.log("SPEED FAILURE");

          return {
            ...prevState,
            ballSpeedUpdateError:
              (action.payload &&
                action.payload.response &&
                action.payload.response.data &
                  action.payload.response.data.error &&
                action.payload.response.data.error) ||
              "baglanti hatasi",
          };
        },
      });
    case START_STOP_ACTION:
      return handle(state, action, {
        start: (prevState) => { return {...prevState, startStopLoading: true,
          startStopLoaded: false,
          startStopError: null,}},
        success: (prevState) => { return {...prevState, startStopLoading: false, startStopLoaded: true, startStopError: null}},
        failure: (prevState) => { return {...prevState, startStopLoading: false, startStopError: "Bağlantı Hatası"}},
      })
    case UPDATE_SESSION_WITH_SOCKET_START:
      return {
        ...state,
        updating: true,
      };
    case UPDATE_SESSION_WITH_SOCKET_DONE:
      return {
        ...state,
        updating: false,
        updated: true,
        updateError: null,
        ...action.payload,
      };
    case UPDATE_SESSION_WITH_SOCKET_ERROR:
      return {
        ...state,
        updating: false,
        updated: false,
        updateError: action.payload,
      };

    default:
      return state;
  }
};
export default sessionReducer;
