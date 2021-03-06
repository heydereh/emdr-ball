/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import {
  getSessionInfo,
  updateSessionWithSocket,
} from "../../actions/sessionActions";
import injectStyle from "../../helpers/incejctStyle";
import socketIOClient from "socket.io-client";
// import drip from "./drip.mp3";
// import drop from "./drop.mp3";
import ReactInterval from "react-interval";
import useWindowSize from "../../helpers/useWindowSize";
import { SERVER_URL_SOCKET } from "../../actions/actionConstants";
import { useState } from "react";
import { Helmet } from "react-helmet";
// eslint-disable-next-line no-unused-vars
import {Howl, Howler} from 'howler';
import Cookies from 'js-cookie'
import useNoSleep from "use-no-sleep";



export const Session = (props) => {
  let match = useRouteMatch();
  // console.log(props);
  const socket = socketIOClient(`${SERVER_URL_SOCKET}`);

  const dispatch = useDispatch();

  // mapStateToProps alternatifi hook
  const {
    patient,
    ballShape,
    drName,
    ballSpeed,
    isActive,
    sound,
    _id,
  } = useSelector((state) => {
    // console.log(state);
    return {
      patient: state.currentSession.patient,
      drName: state.currentSession.drName,
      ballShape: state.currentSession.ballShape,
      direction: state.currentSession.direction,
      ballSpeed: state.currentSession.ballSpeed,
      isActive: state.currentSession.isActive,
      _id: state.currentSession._id,
      sound: state.currentSession.sound,
    };
  });
  // console.log(ballSpeed);

  const keyframesStyle = `
    @keyframes mymoveSession {
        0%   {left: 0px; }
        50% {left: 90%;}
        100% {left: 0px;}
    }
`;
  // Keyframes inject
  injectStyle(keyframesStyle);

  // socket.on("disconnect", () => {
  //   // console.log("socket bağlantısı " + socket.connected);
  // });

  // ComponentDidMount
  useEffect(() => {
    // console.log(socket);
    if (_id) {

      socket.on(_id, (data) => {
        if (data) {
          dispatch(updateSessionWithSocket(data));
        }
        socket.on('disconnect', () => console.log("socket disconnect"))
      });
    }

    dispatch(getSessionInfo(match.params.sessionId));

    return () => {
      socket.close();
    };
  }, [_id]);

  const speedArray = [0, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.8, 0.5];
  const style = {
    container: {
      height: "100%",
      width: "100%",
    },
  };

  const soundToPlay = new Howl({
    src: sound === 'drip' ? `${process.env.PUBLIC_URL}/drip.mp3` : `${process.env.PUBLIC_URL}/drop.mp3`,
    

  });

  const playSound = () => {
    soundToPlay.play();
  };
  const pauseSound = () => {
    soundToPlay.pause();
  };

  const [play, setPlay] = useState(Cookies.get('allowSound') || false);

  useEffect(() => {
    if (Cookies.get('allowSound') === true) {
      if (play === false) {
        console.log("COOKIE DEN SETPLAY");
        
        setPlay(true)
      }
    }
  })

  const handleSound = () => {
    Cookies.set('allowSound', !play)
    setPlay(!play);
  };

  useEffect(() => {
    // console.log("PLAY IN EFFECT : " + play);
    // console.log("sound " + sound);
    if (play && (sound !== 'off')) {
      playSound();
    }
    if (!play || (sound !== 'off')) {
      pauseSound();
    }
  }, [play, sound]);

  const shape = new Map();
  const marginTopp = "";

  shape.set("square", {
    marginTop: marginTopp,
    opacity: "1",
    width: "5rem",
    height: "5rem",
    background: "#990000",
    position: "relative",
    WebkitAnimation: `${isActive ? "mymoveSession" : "moveSessionStop"} ${
      ballSpeed && speedArray[ballSpeed]
    }s infinite linear` /* infinite */,
    animationDirection: "normal",
    animationTimingFunciton: "linear",
  });
  shape.set("circle", {
    marginTop: marginTopp,
    width: "6rem",
    height: "6rem",
    background: "#990000",
    borderRadius: "50%",
    position: "relative",
    WebkitAnimation: `${isActive ? "mymoveSession" : "moveSessionStop"} ${
      ballSpeed && speedArray[ballSpeed]
    }s infinite linear` /* infinite */,
    animationDirection: "normal",
    animationTimingFunciton: "linear",
  });
  shape.set("diamond", {
    marginTop: marginTopp,
    position: "relative",
    backgroundColor: "#990000",
    height: "5rem",
    transform: "rotate(-45deg)",
    width: "5rem",
    WebkitAnimation: `${isActive ? "mymoveSession" : "moveSessionStop"} ${
      ballSpeed && speedArray[ballSpeed]
    }s infinite linear` /* infinite */,
    animationDirection: "normal",
    animationTimingFunciton: "linear",
  });

  // admin or patient page

  const inAdminPage = (
    <div className="ml-3">
      Danışan adı: <strong className="text-capitalize">{patient}.</strong>
    </div>
  );
  const inSessionPage = (
    <div className="">
      <p className="border-bottom-dark ml-3">
        Sayın <strong className="text-capitalize">{patient}</strong>, seansınıza
        hoşgeldiniz. Terapistiniz birazdan seansı başlatacaktır.
      </p>
      <p className="ml-3 mt-0">
        Terapist adı: <strong className="text-capitalize">{drName}.</strong>
      </p>
    </div>
  );

  // Scroll to animation component
  const useScroll = () => {
    const htmlElRef = useRef(null);
    const executeScroll = () =>
      window.scrollTo({ behavior: "smooth", top: htmlElRef.current.offsetTop });

    return [executeScroll, htmlElRef];
  };
  const [executeScroll, htmlElRef] = useScroll();
  useEffect(() => {
    const timer = setTimeout(() => {
      executeScroll();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    return executeScroll;
  }, [props.cinemaMod]);
  // Scroll to animation component end

  // window size for add container class for widescreen
  const size = useWindowSize();
  // console.log(size);

  const [screen, setScreenAwake] = useState(false)
  useNoSleep(screen)
  return (
    <div
      className={`${size.width > 999 ? "container" : ""}`}
      style={{ height: "100vh" }}
    >
      {!props.admin && (
        <Helmet>
          <title>EMDRTR Göz Terapi Seansınıza hoş geldiniz</title>
          <meta
            name="description"
            content="Emdr Göz Terapisi terapistiniz ile online emdr seansı yapabilmenize olanak sağlar "
          />
          <meta name="keywords" content="emdr,terapi,top,göz,seans" />
        </Helmet>
      )}
      <div
        ref={htmlElRef}
        className="border border-dark border-top-0 border-left-0 border-right-0 mb-1 mt-3"
      >
        {props.admin ? inAdminPage : inSessionPage}
      </div>
      <div>
        {!props.admin && (
          <div className="d-flex">
            <button
              style={{ position: "relative", display: "flex" }}
              className={`btn text-light ${
                props.cinemaMod ? "color-cinemamod-btn" : "color-navbar"
              } mx-auto`}
              onClick={(e) => {
                e.preventDefault();
                props.toggleCinemaMod(!props.cinemaMod);
              }}
            >
              {`Turn Focus Mod ${props.cinemaMod ? "Off" : "On"}`}
            </button>
            <button
              type="button"
              className="btn btn-outline-info btn-sm mr-2"
              onClick={handleSound}
            >
              {`Sesi ${!!play ? "kapat" : "aç"}`}
            </button>
            <button
              type="button"
              className="btn btn-outline-info btn-sm mr-2"
              onClick={() => setScreenAwake(!screen)}
            >
              {`Ekranı açık tut - ${!!screen ? "kapat" : "aç"}`}
            </button>
          </div>
        )}
      </div>
      <div className="pt-4 pl-1 pr-4" style={style.container}>
        <div className="mt-4" style={shape.get(`${ballShape}`)}></div>
      </div>
      <ReactInterval
        timeout={(speedArray[ballSpeed] * 1000) / 2}
        enabled={!props.admin ? (isActive && (sound !== 'off') && play) ? true : false : (isActive && (sound !== 'off')) ? true : false }
        callback={() => {
          // console.log((speedArray[ballSpeed] * 1000) / 2);
          playSound();
        }}
      />
    </div>
  );
};
