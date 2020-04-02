import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getSessionInfo } from '../../actions/sessionActions'
import background from './bg-masthead.jpg'
import './home.css'


const Home = () => {

    // const sessionId = "1584986021338";
    const dispatch = useDispatch();


    const [sessionId, setsessionId] = useState("")
    // TODO buraya textbox ko
    console.log(sessionId);
    return (
        <div >
            <div /* style={{height: '500rem'}} */>
                <header className="masthead text-white text-center" style={{ background: `url(${background})no-repeat center center`, backgroundSize: 'cover', /* height: '50vh' */ }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <h1 className="mb-5">EMDR Eye Theraphy'e Hoş Geldiniz...</h1>
                            </div>
                            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                <form>
                                    <div className="form-row">
                                        <div className="col-12 col-md-9 mb-2 mb-md-0"><input onChange={(event) => setsessionId(event.target.value)} type="email" className="form-control form-control-lg" placeholder="Seans numaranızı giriniz..." /></div>
                                        <div className="col-12 col-md-3"><button className="btn btn-primary btn-block btn-lg" type="submit">
                                            <Link
                                                className=""
                                                style={{ textDecoration: "inherit", color: "inherit", }}
                                                to={location => { dispatch(getSessionInfo(sessionId)); return { ...location, pathname: `/${sessionId}` } }}
                                            >Seans'a Giriş</Link></button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
            <div>
                <section className="features-icons bg-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                    <div className="d-flex features-icons-icon"><i className="icon-screen-desktop m-auto text-primary" /></div>
                                    <h3>Mobil ya da PC'den Seans İmkanı</h3>
                                    <p className="lead mb-0">Seanslarınızı mobil cihazınızdan ya da masaüstü bilgisayarınızdan oluşturmak ya da seansa katılmak çok kolay </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                    <div className="d-flex features-icons-icon"><i className="icon-layers m-auto text-primary" /></div>
                                    <h3>Ücretsiz</h3>
                                    <p className="lead mb-0">EMDr Eye Theraphy kullanımı tamamen ücresizdir.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                    <div className="d-flex features-icons-icon"><i className="icon-check m-auto text-primary" /></div>
                                    <h3>Kolay Kullanım</h3>
                                    <p className="lead mb-0">Bir kaç tıkla seans oluşturmak ve danışanınızı seansa dahil etmek mümkündür.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default Home;