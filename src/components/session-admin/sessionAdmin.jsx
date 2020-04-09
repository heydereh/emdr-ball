import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";
import { Pause, Play, XSquare, Music } from "react-feather";
import {
  updateSession,
  getSessionInfo,
  deleteSession,
} from "../../actions/sessionActions";
import socketIOClient from "socket.io-client";
import { Session } from "../session/Session";
import { DeleteModal } from "../Modals/DeleteModal";
import { colorButton } from "../../helpers/colors";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import copy from "copy-to-clipboard";

export const SessionAdmin = () => {
  let history = useHistory();
  let match = useRouteMatch();
  // console.log(window.location.origin);

  const sessionId = match.params.sessionId;
  const socket = socketIOClient(`http://localhost:5050`);
  socket.on("connect", () => {
    console.log("Socket Bağlantısı : " + socket.connected);
  });
  // yukarıdaki ve bu calisiyor
  socket.on("disconnect", () => {
    console.log("Socket Bağlantısı : " + socket.connected);
  });

  const dispatch = useDispatch();

  // ComponentDidMount
  useEffect(() => {
    dispatch(getSessionInfo(sessionId));
  }, []);

  const {
    ballShape,
    ballSpeed,
    sessionDeleteLoaded,
    sound,
    isSoundPlaying,
  } = useSelector((state) => ({
    id: state.currentSession._id,
    patient: state.currentSession.patient,
    ballShape: state.currentSession.ballShape,
    direction: state.currentSession.direction,
    ballSpeed: state.currentSession.ballSpeed,
    hasBallStarted: state.currentSession.hasBallStarted,
    sessionDeleteLoaded: state.currentSession.sessionDeleteLoaded,
    sound: state.currentSession.sound,
    isSoundPlaying: state.currentSession.isSoundPlaying,
  }));
  // bunu yukarıdaki gruba ekleyince alamadı bi türlü
  const id = useSelector((state) => state.currentSession._id);
  console.log("sound " + sound + " " + isSoundPlaying);

  /**
   * Burada saçma işler döndü ben de tam anlamadım özetle
   * storedaki data ile state i güncelleme yapıldı
   * önce store datası default olarak veriliyor. sonra use effectle
   * shouldcomponentupdate alternatifi hook ile yeni render da state güncelleniyor
   */
  const [speedOfBall, setSpeed] = useState(ballSpeed);

  // ShouldComponentMount
  useEffect(() => {
    setSpeed(ballSpeed);
  }, [ballSpeed]);

  // ComponentDidUpdate
  useEffect(() => {
    if (sessionDeleteLoaded) {
      history.push("/admin");
    }
  });

  const [modal, toggleModal] = useState(false);

  const handleOpenModal = () => {
    toggleModal(true);
  };
  const handleCloseModal = () => {
    console.log("modal closed");

    toggleModal(false);
  };

  const deleteSessionConfirmed = () => {
    console.log("SESSION DELETED");

    dispatch(deleteSession({ _id: id }, sessionId));
  };

  const [sessionIdCopyBtnText, setSessionIdCopyBtnText] = useState("Copy");
  const [sessionLinkCopyBtnText, setSessionLinkCopyBtnText] = useState("Copy");

  const handleSessionIdCopyToClipboard = () => {
    setSessionIdCopyBtnText("Copied");
    copy(sessionId);
  };
  const handleSessionLinkCopyToClipboard = () => {
    setSessionLinkCopyBtnText("Copied");
    copy(shareUrlString);
  };

  const shareUrlString = `${window.location.origin}/${sessionId}`;

  return (
    <div className="color-background">
      <div
        className="row"
        style={{ height: "100vh", marginRight: "0px", marginLeft: "0px" }}
      >
        <div className="col-4 border border-dark">
          <div className="ml-2">
            <h6 className="mt-2">SEANS NO</h6>
            <div className="input-group mb-3">
              <input type="text" className="form-control" value={sessionId} />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handleSessionIdCopyToClipboard}
                >
                  {sessionIdCopyBtnText}
                </button>
              </div>
            </div>

            <div className="input-group mb-3">
              <input
              style={{backgroundColor: "inherit", borderStyle: "none"}}
                type="text"
                className="form-control over-flow"
                value="Seans Linkini kopyala.."
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handleSessionLinkCopyToClipboard}
                >
                  {sessionLinkCopyBtnText}
                </button>
              </div>
            </div>
          </div>
          <h6 className="ml-2">Diğer platformlardan paylaş..</h6>
          <div className="ml-2">
            <EmailShareButton
              subject="Emdr Eye Theraphy Seans giriş linki"
              url={shareUrlString}
            >
              <EmailIcon size={32} />
            </EmailShareButton>
            <FacebookShareButton url={shareUrlString}>
              <FacebookIcon size={32} />
            </FacebookShareButton>
            <WhatsappShareButton url={shareUrlString}>
              <WhatsappIcon size={32} />
            </WhatsappShareButton>
            <LinkedinShareButton url={shareUrlString}>
              <LinkedinIcon size={32} />
            </LinkedinShareButton>
          </div>
          <div className="ml-2 mt-3">
            <div className="mt-2">{`SET SPEED [${speedOfBall}]`}</div>
            <div className="mt-2" id="speed-slider">
              <input
                style={{}}
                type="range"
                min="0"
                max="9"
                value={speedOfBall}
                className="slider w-100"
                onChange={(e) => setSpeed(e.target.value)}
                id="myRange"
              />
              <button
                style={{ backgroundColor: colorButton }}
                className="btn text-light"
                onClick={() =>
                  dispatch(
                    updateSession(
                      { ballSpeed: speedOfBall, _id: id },
                      sessionId
                    )
                  )
                }
              >
                Apply Speed
              </button>
              <div>
                <span>
                  <label
                    className="text-danger"
                    style={{ fontSize: "smaller" }}
                  >
                    <sub>*Animasyonu yeniden başlatmanız tavsiyet olunur</sub>
                  </label>
                </span>
              </div>
            </div>
            <div className="mt-2">SET SHAPE</div>
            <div
              className="mt-2 ml-2"
              id="shapeRadioGroup"
              onChange={(e) =>
                dispatch(
                  updateSession(
                    { ballShape: e.target.value, _id: id },
                    sessionId
                  )
                )
              }
            >
              <div className="row">
                <div className="col-sm">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shapRadios"
                      id="squareRadio"
                      value="square"
                      defaultChecked={ballShape === "square"}
                    />
                    <label className="form-check-label" htmlFor="squareRadio">
                      Square
                    </label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shapRadios"
                      id="circleRadio"
                      value="circle"
                      defaultChecked={ballShape === "circle"}
                    />
                    <label className="form-check-label" htmlFor="circleRadio">
                      Circle
                    </label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shapRadios"
                      id="heartRadio"
                      value="diamond"
                      defaultChecked={ballShape === "diamond"}
                    />
                    <label className="form-check-label" htmlFor="diamondRadio">
                      Diamond
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">SET SOUND</div>
            <div
              className="mt-2 ml-2 mr-3"
              id="soundRadioGroup"
              onChange={(e) =>
                dispatch(
                  updateSession({ sound: e.target.value, _id: id }, sessionId)
                )
              }
            >
              <div className="row">
                <div className="col-sm">
                  <div className="form-check">
                    {/* default check calismadi mecbut boyle uzun yoldan yaptim */}
                    {sound === "drip" ? (
                      <input
                        className="form-check-input"
                        type="radio"
                        name="soundRadios"
                        id="dripRadio"
                        value="drip"
                        defaultChecked
                      />
                    ) : (
                      <input
                        className="form-check-input"
                        type="radio"
                        name="soundRadios"
                        id="dripRadio"
                        value="drip"
                      />
                    )}
                    <label className="form-check-label" htmlFor="dripRadio">
                      Drip
                    </label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-check">
                    {/* default check calismadi mecbut boyle uzun yoldan yaptim */}
                    {sound === "drop" ? (
                      <input
                        className="form-check-input"
                        type="radio"
                        name="soundRadios"
                        id="dropRadio"
                        value="drop"
                        defaultChecked
                      />
                    ) : (
                      <input
                        className="form-check-input"
                        type="radio"
                        name="soundRadios"
                        id="dropRadio"
                        value="drop"
                      />
                    )}
                    <label className="form-check-label" htmlFor="dropRadio">
                      Drop
                    </label>
                  </div>
                </div>
                <div className="col-sm">
                  <button
                    type="button"
                    className="btn btn-outline-info btn-sm"
                    onClick={() =>
                      dispatch(
                        updateSession(
                          { isSoundPlaying: !isSoundPlaying, _id: id },
                          sessionId
                        )
                      )
                    }
                  >
                    <span>
                      <Music />
                    </span>
                    <span>
                      {isSoundPlaying ? (
                        <Pause size={20} />
                      ) : (
                        <Play size={20} />
                      )}
                    </span>{" "}
                    {isSoundPlaying ? "Off" : "On"}
                  </button>
                </div>
              </div>
            </div>{" "}
            {/** sound radio group end */}
            <div className="mt-3 mb-2 mr-2 btn-group">
              <button
                type="button"
                className="btn btn-outline-info btn-sm"
                onClick={() =>
                  dispatch(
                    updateSession({ isActive: false, _id: id }, sessionId)
                  )
                }
              >
                <span>
                  <Pause size={20} />
                </span>{" "}
                Pause
              </button>
              <button
                type="button"
                className="btn btn-outline-info ml-2 btn-sm"
                onClick={() =>
                  dispatch(
                    updateSession({ isActive: true, _id: id }, sessionId)
                  )
                }
              >
                <span>
                  <Play size={20} />{" "}
                </span>
                Resume
              </button>
              <button
                type="button"
                className="btn btn-outline-danger ml-2 btn-sm"
                onClick={handleOpenModal}
              >
                <span>
                  <XSquare size={20} />{" "}
                </span>
                Çıkış
              </button>
            </div>
          </div>
        </div>
        {/* SAĞ TARAF */}
        <div className="col-8 border border-dark">
          <Session admin={true} />
        </div>
      </div>
      <DeleteModal
        show={modal}
        title={"Seansı"}
        handleCloseModal={handleCloseModal}
        deleteComfirmed={deleteSessionConfirmed}
      />
    </div>
  );
};
