/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSession } from "../../actions/sessionActions";
import Cookies from "js-cookie";

import background from "./bg-masthead.jpg";
import { colorButton, colorNavbar } from "../../helpers/colors";
import "./home.css";
import { hours } from "../../helpers/timeConversions";

const Home = () => {
  const history = useHistory();
  // const sessionId = "1584986021338";

  const pushTo = (someWhere) => history.push(someWhere);
  const dispatch = useDispatch();

  const hasSessionCreated = useSelector(
    (state) => state.currentSession.sessionCreateLoaded
  );
  const newSessionId = useSelector((state) => state.currentSession.sessionId);

  // const [errorString, setErrorString] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [drName, setDrName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [patient, setPatientName] = useState("");

  useEffect(() => {
    if (hasSessionCreated && newSessionId !== -1) {
      pushTo(`/admin/${newSessionId}`);
    }
  });

  const oldSessions = Object.entries(Cookies.get());
  // her bir entry si yine array bu array in 2. elemani bize lazim olan obje
  const oldSessionsArrayOfObject = [];
  // yukarida cookielerin hepsi alindigi icin parse edilebilir olanlari almam gerekti
  oldSessions.map((sessionStringArray) => {
    let parsedJson = "";
    try {
      parsedJson = JSON.parse(sessionStringArray[1]);
      oldSessionsArrayOfObject.push(parsedJson);
      return true;
    } catch (error) {
      return false;
    }
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("HANDLE SUBMIT");
    // console.log(drName);
    // console.log(patient);

    dispatch(
      createSession({
        drName: drName.toLowerCase().trim(),
        patient: patient.toLowerCase().trim(),
      })
    );
  };

  return (
    <div style={{}}>
      <div className="row " style={{height: "auto"}}>
        <div className="col" >
          <header
            className="text-white text-center d-flex align-items-center justify-content-center"
            style={{
              background: `url(${background})no-repeat center center`,
              backgroundSize: "cover",
              height: "auto",
              minHeight: "50vh"
            }}
          >
            <div className="overlay"  />
            <div className="" >
              <div className="row" >
                <div className="col mt-2 ml-1">
                  <h6 style={{ fontSize: "2rem" }} className="">
                    EMDRTR'ye Hoş Geldiniz...
                  </h6>
                </div>
              </div>
              {/* FORM START */}
              <div className="container align-items-center mt-2">
                <div className="row" >
                  <div className="col-sm mt-2">
                    <div className="card mb-3">
                      <div
                        className="card-header "
                        style={{ backgroundColor: colorNavbar }}
                      >
                        <h3 style={{ fontSize: "1.4rem" }} className="pt-1">Seans Oluştur</h3>
                      </div>
                      <div className="card-body h-auto">
                        <form onSubmit={handleSubmit}>
                          <h4 style={{ fontSize: "1rem" }} className="text-secondary text-left">
                            Ekranda Görünecek İsimler
                          </h4>
                          <input
                            type="text"
                            placeholder="Adınız.."
                            maxLength={20}
                            className="form-control mt-2"
                            required
                            onChange={(e) => setDrName(e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Danışanınızın Adı.."
                            maxLength={20}
                            className="form-control mt-3"
                            required
                            onChange={(e) => setPatientName(e.target.value)}
                          />
                          <button
                            href=""
                            type="submit"
                            className="btn btn-primary mt-3"
                            style={{ backgroundColor: colorButton }}
                          >
                            Oluştur
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  {oldSessionsArrayOfObject.length > 0 && <div className="col-sm mt-2">
                    <div className="card mb-3">
                      <div
                        className="card-header"
                        style={{ backgroundColor: colorNavbar }}
                      >
                        <h5 className="pt-2">
                          Son 24 saat içerisindeli seanslarınız.
                        </h5>
                      </div>
                      <div
                        className=""
                        style={{ maxHeight: "210px", overflowY: "scroll" }}
                      >
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
                                className="list-group-item list-group-item-action border-bottom"
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
                  </div>}

                </div>
              </div>
              {/* FORM END */}
            </div>
          </header>
        </div>
      </div>
      <div className="row " style={{height: "auto"}}>
        <div className="col">
        <section
          className="features-icons bg-light text-center"
          style={{ height: "auto" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                  <div className="d-flex features-icons-icon">
                    <i className="icon-screen-desktop m-auto text-primary" />
                  </div>
                  <h3>Mobil ya da PC'den Seans İmkanı</h3>
                  <p className="lead mb-0">
                    Seanslarınızı mobil cihazınızdan ya da masaüstü
                    bilgisayarınızdan oluşturmak ya da seansa katılmak çok kolay{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                  <div className="d-flex features-icons-icon">
                    <i className="icon-layers m-auto text-primary" />
                  </div>
                  <h3>Ücretsiz</h3>
                  <p className="lead mb-0">
                    EMDRTR'de seans oluşturmak tamamen ücresizdir.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                  <div className="d-flex features-icons-icon">
                    <i className="icon-check m-auto text-primary" />
                  </div>
                  <h3>Kolay Kullanım</h3>
                  <p className="lead mb-0">
                    Bir kaç tıkla seans oluşturmak ve danışanınızı seansa dahil
                    etmek mümkündür.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
