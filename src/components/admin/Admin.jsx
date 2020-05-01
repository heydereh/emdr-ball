import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSession } from "../../actions/sessionActions";
import { useHistory } from "react-router-dom";
import EyePhoto from "./eye-macro.jpg";
import Cookies from "js-cookie";
import { colorNavbar } from "../../helpers/colors";
import { hours } from "../../helpers/timeConversions";
import { Helmet } from "react-helmet";

import "./admin.css";

export const Admin = () => {
  // mapStateToProps alternatifi hook
  let history = useHistory();
  const hasSessionCreated = useSelector(
    (state) => state.currentSession.sessionCreateLoaded
  );
  const newSessionId = useSelector((state) => state.currentSession.sessionId);
  // mapDispatchToProps alternatifi hook
  const dispatch = useDispatch();

  // const [sessionId, setsessionId] = useState("")
  // console.log(sessionId);

  const [drName, setDrName] = useState("");
  const [patient, setPatientName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createSession({
        drName: drName.toLowerCase().trim(),
        patient: patient.toLowerCase().trim(),
      })
    );
  };

  useEffect(() => {
    // console.log(
    //   `session created?${hasSessionCreated} newSessionId: ${newSessionId}`
    // );
    if (hasSessionCreated && newSessionId !== -1) {
      // console.log(
      //   `session created?${hasSessionCreated} newSessionId: ${newSessionId}`
      // );
      history.push(`/admin/${newSessionId}`);
    }
  });

  // Bu object array i donuyor
  // console.log(Object.entries(Cookies.get()));

  const oldSessions = Object.entries(Cookies.get());
  // her bir entry si yine array bu array in 2. elemani bize lazim olan obje
  const oldSessionsArrayOfObject = [];
  // yukarida cookielerin hepsi alindigi icin parse edilebilir olanlari almam gerekti
  oldSessions.map((sessionStringArray) => {
    let parsedJson = "";
    try {
      parsedJson = JSON.parse(sessionStringArray[1])
      oldSessionsArrayOfObject.push(parsedJson);
      return true
    } catch (error) {
      return false
    }
    
  });
  // console.log(oldSessionsArrayOfObject);

  // const oldDate = new Date.prototype.constructor(
  //   Date.parse(oldSessionsArrayOfObject[0].createdAt)
  // );

  return (
    <div /* style={{height: "100%"}} */>
      <Helmet>
        <title>EMDRTR Göz Terapi Seans Oluştur</title>
        <meta name="description" content="Emdr Göz Terapisi ücretsiz olarak uzaktan göz terapi seansları oluşturup danışanlarınızda seans yapabileceğiniz bir platform sunar." />
        <meta name="keywords" content="emdr,terapi,top,göz,seans" />
      </Helmet>
      <div className="container-lg container-md container-sm container-xl">
        <div className="row mh-100vh">
          <div
            className="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0"
            id="login-block"
          >
            <div className="m-auto w-lg-75 w-xl-50">
              <h2 className="text-info font-weight-light mb-5">
                <i className="fa fa-diamond" />
                &nbsp;Seans Oluştur
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="text-secondary">
                    Adınız
                    <span>
                      <label style={{ fontSize: "smaller" }}>
                        <sub style={{color: "red"}}>* Danışanınızın ekranında görünecek isminiz</sub>
                      </label>
                    </span>
                  </label>
                  <input
                    maxLength={20}
                    className="form-control"
                    type="text"
                    required
                    onChange={(e) => setDrName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="text-secondary">
                    Danışan Adı
                    <span>
                      <label style={{ fontSize: "smaller" }}>
                        <sub style={{color: "red"}}>* Danışanınız bu isimle karşılanacaktır..</sub>
                      </label>
                    </span>
                  </label>
                  <input
                    maxLength={20}
                    className="form-control"
                    type="text"
                    required
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </div>
                <button className="btn btn-info mt-2" type="submit">
                  Oluştur
                </button>
              </form>
              {/* Old Sessions List Start */}
              <div className="list-group mt-3">
                <div
                  style={{
                    backgroundColor: colorNavbar,
                    borderColor: colorNavbar,
                  }}
                  className="list-group-item list-group-item-action active d-flex w-100 justify-content-between"
                >
                  <h6 className="mb-1">
                    Son 24 saat içerisindeki seanslarınız..
                  </h6>
                </div>
                <div style={{ maxHeight: "10rem", overflowY: "scroll" }}>
                  {oldSessionsArrayOfObject
                    .reverse()
                    .map((oldSession, index) => {
                      const createdDateInstance = new Date.prototype.constructor(
                        Date.parse(oldSession.createdAt)
                      );
                      const difference = hours(
                        new Date() - createdDateInstance
                      );

                      return (
                        <a
                          key={index}
                          href={`/admin/${oldSession.sessionId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="list-group-item list-group-item-action"
                        >
                          <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{oldSession.patient}</h5>
                            <small className="text-muted ml-1">
                              {difference} saat önce
                            </small>
                          </div>
                        </a>
                      );
                    })}
                </div>
              </div>
              {/* Old Sessions List End */}
            </div>
          </div>
          <div
            className="col-lg-6 d-flex align-items-end"
            id="bg-block"
            style={{
              backgroundImage: `url(${EyePhoto})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <p className="ml-auto small text-dark mb-2">
              <em>Photo by&nbsp;</em>
              <a
                className="text-dark"
                href="https://unsplash.com/photos/v0zVmWULYTg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
              >
                <em>Aldain Austria</em>
              </a>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
