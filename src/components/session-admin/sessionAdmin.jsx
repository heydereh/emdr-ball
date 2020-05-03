import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Pause, Play } from "react-feather";
import {
  updateSession,
  getSessionInfoWithNoSound,
} from "../../actions/sessionActions";
import { Session } from "../session/Session";
import { colorButton } from "../../helpers/colors";
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";
import copy from "copy-to-clipboard";
import { Helmet } from "react-helmet";
import { useRef } from "react";

export const SessionAdmin = () => {
  let match = useRouteMatch();

  const sessionId = match.params.sessionId;

  const dispatch = useDispatch();

  // ComponentDidMount
  useEffect(() => {
    dispatch(getSessionInfoWithNoSound(sessionId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { ballShape, ballSpeed } = useSelector((state) => ({
    ballShape: state.currentSession.ballShape,
    direction: state.currentSession.direction,
    ballSpeed: state.currentSession.ballSpeed,
    isSoundPlaying: state.currentSession.isSoundPlaying,
  }));
  // bunu yukarıdaki gruba ekleyince alamadı bi türlü
  const id = useSelector((state) => state.currentSession._id);
  // console.log("sound " + sound + " " + isSoundPlaying);

  /**
   * Burada saçma işler döndü ben de tam anlamadım özetle
   * storedaki data ile state i güncelleme yapıldı
   * önce store datası default olarak veriliyor. sonra use effectle
   * shouldcomponentupdate alternatifi hook ile yeni render da state güncelleniyor
   */
  const [speedOfBall, setSpeed] = useState(ballSpeed);
  const speedOfBallRef = useRef(speedOfBall);
  speedOfBallRef.current = speedOfBall;
  // bunu page kapanınca tekrar update edeceğim için ayrı aldım
  const sound = useSelector((state) => state.currentSession.sound);
  // ShouldComponentMount
  useEffect(() => {
    setSpeed(ballSpeed);
  }, [ballSpeed]);

  const handleSpeed = (e) => {
    console.log(e.target.value);
    setSpeed(e.target.value);
    
  };

  /**
   * Slider ın değerine göre otomatik hızı uyguluyor ama şu an çok fazla request atıyor ve sayfa
   * yenilenince animasyonu başlatıyor. 
   */
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     dispatch(updateSession({ isActive: false, _id: id }, sessionId));
  //     dispatch(
  //       updateSession(
  //         { ballSpeed: speedOfBallRef.current, isActive: true, _id: id },
  //         sessionId
  //       )
  //     );
  //   }, 2000);
  //   return () => clearTimeout(timeout);
  // }, [speedOfBall]);

  const handleSound = (e) => {
    console.log(e.target.value);

    dispatch(updateSession({ sound: e.target.value, _id: id }, sessionId));
  };

  const [sessionLinkCopyBtnText, setSessionLinkCopyBtnText] = useState(
    "Kopyala"
  );

  const handleSessionLinkCopyToClipboard = () => {
    setSessionLinkCopyBtnText("Kopyalandı");
    copy(shareUrlString);
  };

  // paylaşım için full url path
  const shareUrlString = `${window.location.origin}/${sessionId}`;

  return (
    <div>
      <Helmet>
        <title>EMDRTR Göz Terapi Seans Konsolu</title>
        <meta
          name="description"
          content="Emdr Göz Terapisi seans konsolu ile kolayca seansınızı kontrol edebilirsiniz."
        />
        <meta name="keywords" content="emdr,terapi,top,göz,seans" />
      </Helmet>
      <div
        className="row"
        style={{ height: "110vh", marginRight: "0px", marginLeft: "0px" }}
      >
        <div
          className="col-4 border border-dark"
          style={{ maxHeight: "100vh", overflowY: "scroll" }}
        >
          <div className="ml-2 ">
            <h6 className="mt-3">SEANS PAYLAŞIM LİNKİ</h6>

            <div className="input-group mb-3">
              <input
                style={{
                  backgroundColor: "inherit",
                  borderStyle: "none",
                  paddingLeft: "0px",
                }}
                type="text"
                className="form-control over-flow"
                value={shareUrlString}
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
          </div>
          {/* HIZ AYARI  */}
          <div className="ml-2 mt-3">
            <div className="mt-2">{`SET SPEED [${speedOfBall}]`}</div>
            <div className="mt-2" id="speed-slider">
              <input
                style={{}}
                type="range"
                min="1"
                max="9"
                value={speedOfBall}
                className="slider w-100"
                onChange={handleSpeed}
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
                Hızı Ayarla
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
            {/* HIZ AYARI SON */}
            {/* ŞEKLİ AYARLA */}
            <div className="mt-2">ŞEKLİ SEÇ</div>
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
                      Kare
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
                      Daire
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
                      Baklava
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* ŞEKLİ AYARLA SON */}
            {/* soundRadioGroup */}
            <div className="mt-2">SESİ AYARLA</div>
            <div
              className="mt-2 ml-2 mr-3"
              id="soundRadioGroup"
              onChange={handleSound}
            >
              <div className="row d-flex align-items-center">
                <div className="col-sm">
                  <div className="form-check">
                    {/* default check calismadi mecbur boyle uzun yoldan yaptim */}
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
                  <div className="form-check">
                    {/* default check calismadi mecbut boyle uzun yoldan yaptim */}
                    {sound === "off" ? (
                      <input
                        className="form-check-input"
                        type="radio"
                        name="soundRadios"
                        id="offRadio"
                        value="off"
                        defaultChecked
                      />
                    ) : (
                      <input
                        className="form-check-input"
                        type="radio"
                        name="soundRadios"
                        id="offRadio"
                        value="off"
                      />
                    )}
                    <label className="form-check-label" htmlFor="dropRadio">
                      Off
                    </label>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/** sound radio group end */}
            <div className="row mt-3 mb-2 mr-2 btn-group d-flex">
              <button
                type="button"
                className="btn btn-outline-info col-sm"
                onClick={() =>
                  dispatch(
                    updateSession({ isActive: false, _id: id }, sessionId)
                  )
                }
              >
                <span>
                  <Pause size={20} />
                </span>{" "}
                Duraklat
              </button>
              <button
                type="button"
                className="btn btn-outline-info btn-sm col-sm mb-2"
                onClick={() =>
                  dispatch(
                    updateSession({ isActive: true, _id: id }, sessionId)
                  )
                }
              >
                <span>
                  <Play size={20} />{" "}
                </span>
                Başlat
              </button>
            </div>
          </div>
        </div>
        {/* SAĞ TARAF */}
        <div
          className="col-8 border border-dark"
          style={{ maxHeight: "100vh", overflowY: "unset" }}
        >
          <Session admin={true} />
        </div>
      </div>
    </div>
  );
};
