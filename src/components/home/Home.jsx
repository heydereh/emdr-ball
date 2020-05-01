/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSessionInfo } from "../../actions/sessionActions";
import background from "./bg-masthead.jpg";
import { colorButton } from "../../helpers/colors";
import "./home.css";

const Home = () => {
  const history = useHistory();
  // const sessionId = "1584986021338";

  const pushTo = (someWhere) => history.push(someWhere)
  const dispatch = useDispatch();

  const [sessionId, setsessionId] = useState("");
  // console.log(sessionId);

  const { getSessionError, getSessionLoaded, loadedSessionId } = useSelector(
    (state) => {
      // console.log(state);

      return {
        getSessionLoaded: state.currentSession.getSessionLoaded,
        getSessionError: state.currentSession.getSessionError,
        loadedSessionId: state.currentSession.sessionId,
      };
    }
  );
  // console.log(getSessionError);
  // console.log(getSessionLoaded);
  
  const [errorString, setErrorString] = useState("")

  useEffect(() => {
    if (getSessionLoaded) {
      pushTo(`/${loadedSessionId}`);
    }
    if (getSessionError) {
        setErrorString(getSessionError.response.data.error)
    }
  }); // burada eslint hata veriyodu kaldirttim

  const handleSubmit = (e) => {
    dispatch(getSessionInfo(sessionId));
  };

  return (
    <div>
      <div style={{ height: "50vh" }}>
        <header
          className="masthead text-white text-center"
          style={{
            background: `url(${background})no-repeat center center`,
            backgroundSize: "cover",
            height: "100%",
          }}
        >
          <div className="overlay" />
          <div className="">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h6 style={{ fontSize: "2rem" }} className="mb-5">
                  EMDRTR'ye Hoş Geldiniz...
                </h6>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input
                        onChange={(event) => setsessionId(event.target.value)}
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Seans numaranızı giriniz..."
                      />
                    </div>
                    <div className="col-12 col-md-3">
                      <button
                        className="btn btn-block btn-lg"
                        type=""
                        style={{
                          backgroundColor: colorButton,
                          color: "inherit",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubmit();
                        }}
                      >
                        Giriş
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>


            {getSessionError && getSessionError.response &&
          getSessionError.response.data &&
          getSessionError.response.data.error && <div className="row">
              <div className="col-xl-7 col-lg-8 col-md-10 mx-auto">
                <div className="alert alert-danger fluid" role="alert">
                {errorString}
                </div>
              </div>
            </div>}


          </div>
        </header>
      </div>
      <div style={{ height: "50vh" }}>
        <section
          className="features-icons bg-light text-center"
          style={{ height: "100%" }}
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
  );
};

export default Home;
