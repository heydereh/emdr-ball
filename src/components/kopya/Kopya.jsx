import React from 'react'





const Kopya = () => {
    return (
        <div id="page-top" onload="assignPage('emdr')" style={{height: '100%'}} className>
        <div>
            <div>
                <div id="loader" className="spinner" style={{ position: 'fixed', left: '0px', textAlign: 'center', top: '-100px !important', display: 'none' }}>
                    <div className="double-bounce1" />
                    <div className="double-bounce2" />
                </div>
                <div id="page-tag" className="page-tag">emdr-telehealth</div>
                <div id="emailNotVerified" className="modal fade fixed-top" style={{ zIndex: '99999 !important' }} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header-element">Your email is not verified!</div>
                            <div className="therapy-over-box-subheader text-center">Verify your email to get started
        </div>
                            <div className="modal-body">
                                Check your email for our verification message. If you need to have our message resent, you can do
                                that from the dashboard. This action is in place to prevent spam.
        </div>
                            <div className="modal-footer margin-top-large">
                                <a href="https://www.easy-emdr.com/dashboard.html" className="kill-link-style">
                                    <span className="save-changes-button no-select">Go to dashboard
            </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="paymentModal" className="modal fade fixed-top" style={{ zIndex: '99999 !important' }} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header-element">Your billing information</div>
                            <div className="therapy-over-box-subheader text-center">You're on the final step!</div>
                            <div className="modal-body">
                                Enter your payment information to get started.
                                You will not be billed until the end of your free trial, and your subscription can be
                                easily cancelled anytime.
        </div>
                            <form action="https://www.easy-emdr.com/charge" method="post" id="payment-form">
                                <div className="col col-centered col-11">
                                    <label htmlFor="card-element" style={{ textTransform: 'uppercase', letterSpacing: '2.6px' }}>
                                        Credit/debit card
            </label>
                                    <div id="card-element" className="shadow StripeElement StripeElement--empty"><div className="__PrivateStripeElement" style={{ margin: '0px !important', padding: '0px !important', border: 'none !important', display: 'block !important', background: 'transparent !important', position: 'relative !important', opacity: '1 !important' }}><iframe frameBorder={0} allowTransparency="true" scrolling="no" name="__privateStripeFrame5" allowpaymentrequest="true" src="./Easy EMDR _ EMDR Tool_files/elements-inner-card-7117b627d6fabc5b8f474a6b545a2123.html" title="Secure payment input frame" style={{ border: 'none !important', margin: '0px !important', padding: '0px !important', width: '1px !important', minWidth: '100% !important', overflow: 'hidden !important', display: 'block !important', userSelect: 'none !important', height: '19.2px' }} /><input className="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autoComplete="false" maxLength={1} style={{ border: 'none !important', display: 'block !important', position: 'absolute !important', height: '1px !important', top: '0px !important', left: '0px !important', padding: '0px !important', margin: '0px !important', width: '100% !important', opacity: '0 !important', background: 'transparent !important', pointerEvents: 'none !important', fontSize: '16px !important' }} /></div></div>
                                    <div id="card-errors" role="alert" className="margin-top-tiny" style={{ color: '#EC3C3C' }} />
                                </div>
                                <div className="modal-footer margin-top-large">
                                    <span className="close-button no-select" data-dismiss="modal">Cancel
            </span>
                                    <input className="save-changes-button submit-style no-select" type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Navigation */}
                <span id="mobile-nav">
                    <nav id="navigation" className="d-sm-block animated fadeInDown d-md-none d-lg-none navbar cl-effect-13 navbar-expand-lg navbar-therapy navbar-light fixed-top">
                        <div className="container">
                            <a href="https://www.easy-emdr.com/dashboard.html" className="kill-link-style">
                                <span className="dashboard animated fadeInDown">
                                    <ion-icon name="arrow-round-back" className="dash-arrow hydrated" style={{ color: 'inherit' }} role="img" aria-label="arrow round back" />Dashboard
          </span>
                            </a>
                            <span id="preview-pane-button">
                                <a href="https://www.easy-emdr.com/emdr-telehealth.html#preview-pane" className="js-scroll-trigger animated fadeInDown">
                                    <span className="float-right highlight-color preview-nav">PREVIEW<ion-icon id="eye-icon" name="eye" className="preview-nav-arrow hydrated" role="img" aria-label="eye" /></span>
                                </a>
                            </span>
                        </div>
                    </nav>
                </span>
                <div id="notSignedIn" className="modal fade fixed-top" style={{ zIndex: '99999 !important' }} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header-element col-centered">You are not signed in!</div>
                            <div className="therapy-over-box-subheader col col-11 text-center">If you don't have a pin, you can create an account.</div>
                            <div className="modal-body">
                                Once you are signed into an active account, you will have access to our complete EMDR toolkit,
                                including instructions and
                                tools to help you find a therapist
                                who specializes in EMDR. Or, you can continue with a pin provided by your therapist!
          <div onclick="pinNumber()" className="no-select pin-button margin-top">I have a pin</div>
                            </div>
                            <div className="modal-footer">
                                <a href="https://www.easy-emdr.com/signin.html" className="kill-link-style">
                                    <span className="close-button no-select">Sign
              in</span>
                                </a>
                                <a href="https://www.easy-emdr.com/signup.html" className="kill-link-style">
                                    <span className="save-changes-button no-select">SIGN
              UP</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="pinModal" className="modal fade fixed-top" style={{ zIndex: '99999 !important', display: 'none' }} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header-element col-centered">Enter your pin</div>
                            <div className="therapy-over-box-subheader col col-11 text-center">Ask your therapist for your pin number.</div>
                            <div className="modal-body">
                                <div id="pin-error">
                                </div>
                                <input style={{ marginBottom: '10px' }} placeholder="Enter your pin number" className="pin-input save-input margin-top-tiny" id="pin-number" name="somename" oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="number" maxLength={6} />
                            </div>
                            <div className="modal-footer">
                                <a href="https://www.easy-emdr.com/signin.html" className="hidden kill-link-style">
                                    <span className="close-button no-select">Sign
              in</span>
                                </a>
                                <span onclick="returnToSignIn()" className="close-button no-select">Return to sign in
          </span>
                                <span onclick="submitPin()" className="save-changes-button no-select">SUBMIT PIN
          </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-12">
                    {/* Modal */}
                    <div id="modalCall" className="modal fade fixed-top" style={{ zIndex: '99999 !important' }} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header-element">Edit set</div>
                                <div className="modal-body">
                                    <input id="edit-set-name" maxLength={50} type="text" className="text-input" placeholder="Enter set name" />
                                    <div id="edit-set-failure">
                                    </div>
                                    <textarea id="edit-set-description" maxLength={300} placeholder="Enter set description (optional)" className="text-input textarea margin-top-tiny" defaultValue={""} />
                                </div>
                                <div className="modal-footer">
                                    <span className="close-button no-select" data-dismiss="modal">Close</span>
                                    <span className="save-changes-button no-select" onclick="updatedEditSet()">SAVE CHANGES</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="pauseSession" className="modal fade fixed-top" style={{ zIndex: '99999 !important' }} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header-element">Session paused</div>
                                <div className="therapy-over-box-subheader text-center">You can exit to edit your settings.</div>
                                <div className="modal-body">
                                    You can exit/resume the session by
                                    clicking the buttons below.
            <div>
                                        <label className="hidden margin-top form-check-label no-select" htmlFor="therapyCheckPause">
                                            Save therapy results on exit
              </label>
                                        <input className="hidden form-check-input position-check" type="checkbox" defaultValue id="therapyCheckPause" defaultChecked />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <span className="close-button no-select" onclick="saveTherapyResults('pausedClose')" data-dismiss="modal">End
              Session</span>
                                    <span className="save-changes-button no-select" data-dismiss="modal" onclick="resumeSession()">RESUME
              SESSION</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sessionDetails" className="modal fade fixed-top" style={{ zIndex: '99999 !important' }} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header-element">Therapy details</div>
                                <div id="therapy-date" className="therapy-over-box-subheader text-center">January 7th, 2019</div>
                                <div className="modal-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            Set used: <span id="therapy-set">Quick session</span>
                                        </li>
                                        {/*
                      <li class="list-group-item">Client name: <span id="therapy-client">Zachary Jordan</span>
                      </li>
                  */}
                                        <li className="list-group-item">Sessions completed: <span id="therapy-sessions-completed">2</span>/<span id="therapy-sessions-total">3</span>
                                        </li>
                                        <li className="list-group-item">Notes taken: <span id="therapy-notes-count">3</span></li>
                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <span className="save-changes-button no-select" data-dismiss="modal">CLOSE
            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="nextSession" className="modal fade fixed-top" style={{ zIndex: '99999 !important' }} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content therapy-modal">
                                <div className="therapy-over-box-header">The session is over</div>
                                <div className="therapy-over-box-subheader text-center" style={{ marginBottom: '15px' }}>You can continue whenever you are ready!</div>
                                <div className="hidden modal-body">
                                    <div id="your-mood-box-session">
                                    </div>
                                    <div id="your-recall-box-session">
                                    </div>
                                    <div id="your-suds-box-session">
                                    </div>
                                    <div id="your-VoC-box-session">
                                    </div>
                                    <textarea id="next-set-description" maxLength={300} placeholder="How are you feeling?" className="text-input textarea margin-top" defaultValue={""} />
                                </div>
                                <div className="hidden position-therapy-check">
                                    <label className="form-check-label no-select" htmlFor="sessionCheck">
                                        Save therapy results on exit
            </label>
                                    <input className="form-check-input position-check" type="checkbox" defaultValue id="sessionCheck" defaultChecked />
                                </div>
                                <div className="modal-footer">
                                    <span className="close-button no-select" data-dismiss="modal" onclick="saveTherapyResults('ending')">End
              Therapy</span>
                                    <span className="save-changes-button no-select" onclick="nextSession()">NEXT SESSION</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="therapyOver" className="modal fade fixed-top" style={{ zIndex: '99999 !important' }} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content therapy-modal">
                                <div className="therapy-over-box-header">The therapy is over</div>
                                <div className="therapy-over-box-subheader text-center" style={{ marginBottom: '15px' }}>You can restart or exit from here.</div>
                                <div className="hidden modal-body">
                                    <div id="your-mood-box-therapy">
                                    </div>
                                    <div id="your-recall-box-therapy">
                                    </div>
                                    <div id="your-suds-box-therapy">
                                    </div>
                                    <div id="your-VoC-box-therapy">
                                    </div>
                                    <textarea maxLength={300} id="therapy-input-description" placeholder="How are you feeling?" className="text-input textarea margin-top" defaultValue={""} />
                                </div>
                                <div className="hidden position-therapy-check">
                                    <label className="form-check-label no-select" htmlFor="therapyCheck">
                                        Save therapy results
            </label>
                                    <input className="form-check-input position-check" type="checkbox" defaultValue id="therapyCheck" defaultChecked />
                                </div>
                                <div className="modal-footer">
                                    <span className="close-button no-select" data-dismiss="modal" onclick="saveTherapyResults('end')">End
              Therapy</span>
                                    <span className="save-changes-button no-select" onclick="restartSession()">RESTART
              SESSION</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="therapy-results" className="full-width-emdr col col-12 fluid-container mobile-scroll results-box-inactive">
                        {/* HEADER */}
                        <div className="header bg-dark pb-5 row" style={{ background: '#12253f !important' }}>
                            <div className="container-fluid">
                                {/* Body */}
                                <div className="header-body">
                                    <div className="dashboard-return">
                                        <span className="no-select return-text" onclick="closeTherapyAnalyze()">
                                            <ion-icon className="dashboard-arrow hydrated" name="close-circle" role="img" aria-label="close circle" />
                Close EMDR analysis
              </span>
                                        <span className="float-right">
                                            <span className="float-right entry-write extra-padding no-select" onclick="viewSessionDetails()">View session details
                </span>
                                        </span>
                                    </div>
                                    <div className="emdr-header text-center">
                                        <span className="col-centered" style={{ position: 'relative', top: '30px' }}>
                                            <span className="welcome-dash-sub white col-centered text-center">WELL DONE!</span>
                                            <div className="welcome-dash-header white">SESSION COMPLETE</div>
                                        </span>
                                    </div>
                                </div> {/* / .header-body */}
                                {/* Footer */}
                                <div className="header-footer">
                                    {/* Chart */}
                                    <div className="chart" style={{ position: 'absolute', top: '-500vh' }}>
                                        <div className="full"><canvas id="main-chart" className="full" /></div>
                                        {/*<canvas id="headerChart" class="chart-style"></canvas>*/}
                                        {/*
                              <canvas id="mains-chart" style="height:100%;width:100%;"
                                  class="chart-style"></canvas>
                              */}
                                    </div>
                                </div>
                            </div>
                        </div> {/* / .header */}
                        {/* CARDS */}
                        <div className="container-fluid mt--6">
                            <div className="row">
                                <div className="col-12 col-centered col-xl-11">
                                    {/* Goals */}
                                    <div className="card shadow animated slideInUp" style={{ opacity: '1 !important', paddingBottom: '20px', paddingTop: '10px' }}>
                                        <div className="card-header">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h4 className="card-header-title larger-card-header">
                                                        Your notes
                    </h4>
                                                </div>
                                                <div className="col-auto">
                                                    <span className="float-right no-select goal-button" onclick="restartSession()">Restart
                      session</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="spawnNotes" className="text-center" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div id="analysis-mood" className="col-12 col-md-6 col-xl">
                                    <div className="card shadow e1">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h6 className="card-title text-uppercase text-muted mb-2">
                                                        Your results
                    </h6>
                                                    <span className="h2 mb-0">
                                                        Mood
                    </span>
                                                    <span className="badge badge-soft-success soft-badge-blue mt--1">
                                                        Average mood: <span id="average-mood" className="white">5</span>
                                                    </span>
                                                    <div className="analyze-box-section-choices">
                                                        <span id="lineChart5" className="analyze-box-section-choice analyze-box-section-choice-selected left-round no-select" onclick="changeChart('line5')">Line</span>
                                                        <span id="barChart5" className="analyze-box-section-choice right-round no-select" onclick="changeChart('bar5')">Bar</span>
                                                    </div>
                                                    <div>
                                                        <canvas id="myChart5" height={305} className="margin-top" />
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <span className="h2 fe fe-dollar-sign text-muted mb-0" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="analysis-recall" className="col-12 col-md-6 col-xl">
                                    <div className="card shadow e1">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h6 className="card-title text-uppercase text-muted mb-2">
                                                        Your results
                    </h6>
                                                    <span className="h2 mb-0">
                                                        Recall
                    </span>
                                                    <span className="badge badge-soft-success soft-badge-blue mt--1">
                                                        Average recall: <span id="average-recall" className="white">5</span>
                                                    </span>
                                                    <div className="analyze-box-section-choices">
                                                        <span id="lineChart4" className="analyze-box-section-choice analyze-box-section-choice-selected left-round no-select" onclick="changeChart('line4')">Line</span>
                                                        <span id="barChart4" className="analyze-box-section-choice right-round no-select" onclick="changeChart('bar4')">Bar</span>
                                                    </div>
                                                    <div>
                                                        <canvas id="myChart4" height={305} className="margin-top" />
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <span className="h2 fe fe-dollar-sign text-muted mb-0" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div id="analysis-suds" className="col-12 col-md-6 col-xl">
                                    <div className="card force-card-height shadow e1">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h6 className="card-title text-uppercase text-muted mb-2">
                                                        Your results
                    </h6>
                                                    <span className="h2 mb-0">
                                                        SUDS
                    </span>
                                                    <span className="badge badge-soft-success soft-badge-blue mt--1">
                                                        Average SUDS: <span id="average-suds" className="white">5</span>
                                                    </span>
                                                    <div className="analyze-box-section-choices">
                                                        <span id="lineChart2" className="analyze-box-section-choice analyze-box-section-choice-selected left-round no-select" onclick="changeChart('line2')">Line</span>
                                                        <span id="barChart2" className="analyze-box-section-choice right-round no-select" onclick="changeChart('bar2')">Bar</span>
                                                    </div>
                                                    <div>
                                                        <canvas id="myChart2" height={305} className="margin-top" />
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <span className="h2 fe fe-dollar-sign text-muted mb-0" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="analysis-VoC" className="col-12 col-md-6 col-xl">
                                    <div className="card force-card-height shadow e1">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h6 className="card-title text-uppercase text-muted mb-2">
                                                        Your results
                    </h6>
                                                    <span className="h2 mb-0">
                                                        VoC
                    </span>
                                                    <span className="badge badge-soft-success soft-badge-blue mt--1">
                                                        Average VoC: <span id="average-VoC" className="white">5</span>
                                                    </span>
                                                    <div className="analyze-box-section-choices">
                                                        <span id="lineChart3" className="analyze-box-section-choice analyze-box-section-choice-selected left-round no-select" onclick="changeChart('line3')">Line</span>
                                                        <span id="barChart3" className="analyze-box-section-choice right-round no-select" onclick="changeChart('bar3')">Bar</span>
                                                    </div>
                                                    <div>
                                                        <canvas id="myChart3" height={305} className="margin-top" />
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <span className="h2 fe fe-dollar-sign text-muted mb-0" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-xl">
                                    {/* Card */}
                                    <div className="card shadow e5">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    {/* Title */}
                                                    <h6 className="card-title text-uppercase text-muted mb-2">
                                                        You're finished!
                    </h6>
                                                    {/* Heading */}
                                                    <span className="h2 mb-0">
                                                        What's next?
                    </span>
                                                    <div className="dash-goals eliminate-margin-pad margin-top col col-12 col-md-10 col-lg-10">
                                                        You completed the therapy! You can view your
                                                        previous saved
                      therapy results on the <a href="https://www.easy-emdr.com/emdr-analysis.html" className="link-style">EMDR
                        analysis page</a>, change your EMDR
                      settings, or return to the main dashboard.
                    </div>
                                                    <div className="margin-top-setting">
                                                        <span className="no-select goal-button margin-top-tiny" onclick="closeTherapyAnalyze()">
                                                            Change EMDR settings
                      </span>
                                                        <a href="https://www.easy-emdr.com/dashboard.html" className="hidden kill-link-style">
                                                            <span className="no-select goal-button margin-top-tiny">Back
                                                            to
                          main dashboard</span>
                                                        </a>
                                                        <span className="h2 fe fe-dollar-sign text-muted mb-0" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*
          <div class="col col-8 col-centered text-center">
              <div class="dashboard-back" onclick="closeTherapyAnalyze()">Close EMDR analysis</div>
          </div>
          */}
                    </div>
                    <div className="row therapy-element-height">
                        <div id="gradient2" className="col col-md-6 col-lg-5 session-selection animated fadeInDown green-background">
                            <div className="row dashboard-nav">
                                <span className="dashboard-button dashboard-button-blue no-select" onmouseover="dashBoard('enterBlue')" onmouseout="dashBoard('exitBlue')" onclick="closeSettingsPanel()">
                                    <ion-icon id="dashboard-icon" className="dashboard-icon dashboard-icon-blue white hydrated" name="close-circle" role="img" aria-label="close circle" />
            CANCEL
          </span>
                            </div>
                            <div className="section-selection-header white margin-top">LOAD OPTIONS</div>
                            <div className="therapy-settings-body margin-top-tiny white">Here you can view the saved setting sets that
          you have for this therapy.</div>
                            <div id="therapy-setting-empty" />
                            <div id="therapy-setting-boxes" />
                            <span onmouseover="dashBoard('enterPanel')" onmouseout="dashBoard('exitPanel')" onclick="closeSettingsPanel()" className="dashboard-button go-back-button dashboard-button-blue margin-right margin-top-large no-select">
                                <ion-icon id="dashboard-icon-panel" className="dashboard-icon dashboard-icon-blue white hydrated" name="home" role="img" aria-label="home">
                                </ion-icon>
          GO BACK
        </span>
                            <span onmouseover="dashBoard('enterPanel2')" onmouseout="dashBoard('exitPanel2')" className="dashboard-button go-back-button dashboard-button-blue margin-top-large no-select" onclick="deleteAll()">
                                <ion-icon id="dashboard-icon-panel2" className="dashboard-icon dashboard-icon-blue white hydrated" name="trash" role="img" aria-label="trash">
                                </ion-icon>
          Delete all
        </span>
                        </div>
                        <div id="gradient3" className="col col-md-6 col-lg-5 session-selection animated fadeInDown rubber-band green-background">
                            <div className="row dashboard-nav">
                                <span className="dashboard-button dashboard-button-blue no-select" onmouseover="dashBoard('enterCancel')" onmouseout="dashBoard('exitCancel')" onclick="closeSavePanel()">
                                    <ion-icon id="cancel-panel" className="dashboard-icon dashboard-icon-blue white hydrated" name="close-circle" role="img" aria-label="close circle" />
            CANCEL
          </span>
                            </div>
                            <div className="section-selection-header white margin-top">SAVE OPTIONS</div>
                            <div className="therapy-settings-body margin-top-tiny white">Here you can save different sets of your
                            favorite settings so that
                            you can use them anytime in the future.
        </div>
                            <div id="therapy-setting-box-current" />
                            <div className="therapy-setting-box margin-top shadow">
                                <div className="therapy-setting-box-header">Create a new set</div>
                                <div className="therapy-setting-box-description">Save your settings to use later</div>
                                <input id="set-input" type="text" className="text-input save-input margin-top-tiny" placeholder="Enter set name" />
                                <div id="set-input-error">
                                </div>
                                <textarea maxLength={300} id="set-input-description" className="text-input textarea margin-top-tiny" placeholder="Set description (optional)" defaultValue={""} />
                                <div className="therapy-setting-box-buttons margin-top-setting">
                                    <span className="therapy-setting-box-button no-select" onclick="saveSettings()">Create set
              <ion-icon className="therapy-setting-box-icon margin-right hydrated" name="checkmark-circle-outline" role="img" aria-label="checkmark circle outline">
                                        </ion-icon>
                                    </span>
                                </div>
                            </div>
                            <div id="therapy-setting-boxes-saved" />
                            <span onmouseover="dashBoard('enterBlue1')" onmouseout="dashBoard('exitBlue1')" className="dashboard-button go-back-button dashboard-button-blue margin-right margin-top-large no-select" onclick="closeSavePanel()">
                                <ion-icon id="dash-blue1" className="dashboard-icon dashboard-icon-blue white hydrated" name="home" role="img" aria-label="home" />
          GO BACK
        </span>
                        </div>
                        <div id="gradient" className="col col-12 col-md-6 col-lg-5 settings-panel green-background" style={{ background: '-webkit-gradient(linear, 0% 0%, 100% 0%, from(rgb(54, 231, 182)), to(rgb(67, 243, 141)))' }}>
                            <div className="row dashboard-nav">
                                <a href="https://www.easy-emdr.com/dashboard.html" className="hidden kill-link-style">
                                    <span className="dashboard-button d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block no-select" onmouseover="dashBoard('enter')" onmouseout="dashBoard('exit')">
                                        <ion-icon id="dashboard-icon-home" className="dashboard-icon white hydrated" name="home" role="img" aria-label="home">
                                        </ion-icon>
              Main dashboard
            </span>
                                </a>
                            </div>
                            <div className="therapy-settings-header white therapy-settings-margin">EMDR</div>
                            <div className="therapy-settings-body margin-top-tiny white">EMDR is a therapy used to treat anxiety,
                            OCD,
                            PTSD,
                            and much
          more.  <br />
                                <div className="margin-top-tiny white">You can give
                                us
                                feedback
            on how to improve this tool <a href="mailto:info@easy-emdr.com?subject=Contacting%20Easy%20EMDR" className="link-style-blue highlight-color-blue">here.</a></div>
                            </div>
                            <div className="therapy-settings-useage margin-top white margin-top-tiny pad-right no-select" onclick="startSession()">Start
          session</div>
                            <a className="kill-link-style toggle-element no-select" data-toggle="collapse" href="https://www.easy-emdr.com/emdr-telehealth.html#speedMovement" role="button" aria-expanded="false" aria-controls="speedMovement" onclick="settingDropdown('speedMovement')">
                                <div className="margin-top section-card-header">
                                    Speed and shape
            <ion-icon id="settingArrow1" className="collapse-arrow hydrated" name="arrow-dropup" role="img" aria-label="arrow dropup" />
                                </div>
                            </a>
                            <div id="speedMovement" className="collapse show multi-collapse">
                                <div className="section-card animated fadeIn">
                                    <div className="white">
                                        <div className="setting-category text-left margin-top-setting">SPEED — <span id="speedOutput"><span className="animated fadeIn">3</span></span></div>
                                        <div>
                                            <input id="speedRange" className="range-slider" type="range" min={1} max={10} defaultValue={5} />
                                        </div>
                                        <div className="presets">
                                            <div id="speed-slow" className="preset-item no-select margin-left-right inline-block preset-item-selected" onclick="speed('3')">Slow</div>
                                            <div id="speed-medium" className="preset-item no-select inline-block" onclick="speed('5')">Medium</div>
                                            <div id="speed-fast" className="preset-item no-select inline-block" onclick="speed('7')">
                                                Fast</div>
                                        </div>
                                        <div className="setting-category margin-top-setting margin-top-large">ELEMENT SHAPE</div>
                                        <div>
                                            <span id="shape-category-circle" className="shape-category margin-top-tiny" onmouseover="shapeCategoryEnter('circle')" onmouseout="shapeCategoryExit('circle')" onclick="shapeCategorySelect('circle')">
                                                <span id="shape-circle" className="circle" />
                                            </span>
                                            <span id="shape-category-square-rounded" className="shape-category margin-left-right-large margin-top-tiny shape-active-selected" onmouseover="shapeCategoryEnter('squareRounded')" onmouseout="shapeCategoryExit('squareRounded')" onclick="shapeCategorySelect('squareRounded')">
                                                <span id="shape-square-rounded" className="square-rounded shape-active-selected-white" />
                                            </span>
                                            <span id="shape-category-square" className="shape-category margin-left-right-large margin-top-tiny" onmouseover="shapeCategoryEnter('square')" onmouseout="shapeCategoryExit('square')" onclick="shapeCategorySelect('square')">
                                                <span id="shape-square" className="square" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="kill-link-style toggle-element relative no-select" data-toggle="collapse" href="https://www.easy-emdr.com/emdr-telehealth.html#theming" role="button" aria-expanded="false" aria-controls="speedMovement" onclick="settingDropdown('theming')">
                                <div className="margin-top section-card-header">
                                    Theming and sounds
            <ion-icon id="settingArrow2" className="collapse-arrow hydrated" name="arrow-dropup" role="img" aria-label="arrow dropup" />
                                </div>
                            </a>
                            <div id="theming" className="collapse show multi-collapse">
                                <div className="section-card animated fadeIn">
                                    <div className=" white">
                                        <div>
                                            <div>
                                                <div className="setting-category margin-top-setting">BACKGROUND — </div>
                                                <input className="color-pick" id="background-color" type="color" name="color" defaultValue="#2c415a" onchange="updateBackground()" />
                                            </div>
                                            <div>
                                                <div className="setting-category margin-top-setting">ELEMENT — </div>
                                                <input className="color-pick" id="element-color" type="color" name="color" defaultValue="#ea5452" onchange="updateElement()" />
                                            </div>
                                        </div>
                                        <div className="setting-category margin-top-setting">PRESETS</div>
                                        <div className="presets">
                                            <div>
                                                <div id="ruby" className="preset-item no-select preset-item-selected inline-block" onclick="theme('ruby')" style={{ marginRight: '5px' }}>Ruby</div>
                                                <div id="light" className="preset-item no-select inline-block" onclick="theme('light')">
                                                    Light</div>
                                                <div id="dark" className="preset-item no-select margin-left-right inline-block" onclick="theme('dark')">Dark</div>
                                            </div>
                                            <div>
                                                <div id="aqua" className="preset-item no-select inline-block" onclick="theme('aqua')">
                                                    Aqua</div>
                                                <div id="contrast" className="preset-item no-select margin-left-right inline-block" onclick="theme('contrast')">Contrast</div>
                                                <div id="custom" className="preset-item no-select inline-block" onclick="theme('custom')">Custom</div>
                                            </div>
                                            <span id="theme-extra-text" className="hidden">
                                                <div>
                                                    <div id="sunshine" className="preset-item no-select inline-block" onclick="theme('sunshine')">Sunshine</div>
                                                    <div id="chestnut" className="preset-item no-select margin-left-right inline-block" onclick="theme('chestnut')">Chestnut</div>
                                                    <div id="royal" className="preset-item no-select inline-block" onclick="theme('royal')">Royal</div>
                                                </div>
                                                <div>
                                                    <div id="forest" className="preset-item no-select inline-block" onclick="theme('forest')">Forest</div>
                                                    <div id="lilac" className="preset-item no-select margin-left-right inline-block" onclick="theme('lilac')">Lilac</div>
                                                    <div id="sand" className="preset-item no-select inline-block" onclick="theme('sand')">Sand</div>
                                                </div>
                                            </span>
                                        </div>
                                        <div id="theme-load-text">
                                            <span className="animated fadeIn">
                                                <span className="load-more-text no-select" onclick="loadThemeSelection()">Show
                    more</span>
                                            </span>
                                        </div>
                                        <div className="setting-category margin-top-large">SWITCH DIRECTION SOUND <span className="information-circle" onclick="information('switchDirection')"><span className="question-mark no-select">?</span></span></div>
                                        <div className="presets">
                                            <div>
                                                <div id="none-direction" className="preset-item no-select preset-item-selected inline-block" onclick="switchDirection('none')">None</div>
                                                <div id="drop" className="preset-item no-select inline-block" onclick="switchDirection('drop')">Raindrop</div>
                                                <div id="ding" className="preset-item no-select margin-left-right inline-block" onclick="switchDirection('ding')">Ding</div>
                                                {/*
                              <div id="click" class="preset-item no-select inline-block"
                                  onclick="switchDirection('click')">Coin</div>
                                  */}
                                            </div>
                                            {/*
                          <span id="switch-direction-load" class="hidden">
                              <div>
                                
                                  <div id="ding" class="preset-item no-select margin-left-right inline-block"
                                      onclick="switchDirection('ding')">Ding</div>
                                
                                      <div id="beep" class="preset-item no-select inline-block"
                                      onclick="switchDirection('beep')">Beep</div>
                          
                                  <div id="buzz" class="preset-item no-select margin-left-right inline-block"
                                      onclick="switchDirection('buzz')">Buzz</div>
                              </div>
                       
                          </span>
                             */}
                                            {/*
                          <span id="switch-direction-load-text">
                              <span class="animated fadeIn">
                                  <span class="load-more-text no-select" onclick="loadSwitchDirection()">Show
                                      more</span>
                              </span>
                          </span>
                      */}
                                        </div>
                                        <div className="setting-category margin-top-large">Bilateral or mono audio <span className="information-circle" onclick="information('bilateralOrMono')"><span className="question-mark no-select">?</span></span></div>
                                        <div className="presets">
                                            <div>
                                                <div id="bilateral-option" className="preset-item no-select preset-item-selected inline-block" onclick="audioType('bilateral')">Bilateral</div>
                                                <div id="mono-option" className="preset-item no-select inline-block" onclick="audioType('mono')">Mono</div>
                                            </div>
                                        </div>
                                        <span style={{ display: 'none' }}>
                                            <div className="setting-category margin-top-large">BACKGROUND SOUNDS</div>
                                            <div className="presets">
                                                <div>
                                                    <div id="none" className="preset-item no-select preset-item-selected inline-block" onclick="backgroundSound('none')">None</div>
                                                    <div id="ambient" className="preset-item no-select margin-left-right inline-block" onclick="backgroundSound('ambient')">Ambient</div>
                                                    <div id="waves" className="preset-item no-select inline-block" onclick="backgroundSound('waves')">Waves</div>
                                                </div>
                                                <div>
                                                    <div id="outdoors" className="preset-item no-select inline-block" onclick="backgroundSound('outdoors')">Outdoors</div>
                                                    <div id="space" className="preset-item no-select margin-left-right inline-block" onclick="backgroundSound('space')">Space</div>
                                                    <div id="piano1" className="preset-item no-select inline-block" onclick="backgroundSound('piano1')">Piano
                      1</div>
                                                </div>
                                                <span id="background-sound-load" className="hidden">
                                                    <div>
                                                        <div id="piano2" className="preset-item no-select inline-block" onclick="backgroundSound('piano2')">Piano
                        2</div>
                                                        <div id="orchestra1" className="preset-item no-select margin-left-right inline-block" onclick="backgroundSound('orchestra1')">Orchestra
                        1</div>
                                                        <div id="orchestra2" className="preset-item no-select inline-block" onclick="backgroundSound('orchestra2')">Orchestra
                        2</div>
                                                    </div>
                                                    <div>
                                                        <div id="nighttime" className="preset-item no-select inline-block" onclick="backgroundSound('nighttime')">Nighttime
                      </div>
                                                        <div id="wind" className="preset-item no-select margin-left-right inline-block" onclick="backgroundSound('wind')">Wind</div>
                                                        <div id="heartbeat" className="preset-item no-select inline-block" onclick="backgroundSound('heartbeat')">Heartbeat</div>
                                                    </div>
                                                </span>
                                                <span id="background-sound-load-text">
                                                    <span className="animated fadeIn">
                                                        <span className="load-more-text no-select" onclick="loadBackgroundSounds()">Show
                        more</span>
                                                    </span>
                                                </span>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <a className="kill-link-style toggle-element no-select" data-toggle="collapse" href="https://www.easy-emdr.com/emdr-telehealth.html#session" role="button" aria-expanded="false" aria-controls="speedMovement" onclick="settingDropdown('session')">
                                <div className="margin-top section-card-header">
                                    Time settings <ion-icon id="settingArrow4" className="collapse-arrow hydrated" name="arrow-dropup" role="img" aria-label="arrow dropup">
                                    </ion-icon>
                                </div>
                            </a>
                            <div className="collapse show multi-collapse" id="session">
                                <div className="section-card animated fadeIn">
                                    <div className="white">
                                        <div className="setting-category margin-top-setting">NUMBER OF ROUNDS</div>
                                        <div>
                                            <div id="session1" className="preset-item no-select inline-block" onclick="sessionCount('one')">1</div>
                                            <div id="session3" className="preset-item no-select preset-item-selected inline-block" onclick="sessionCount('three')">3</div>
                                            <div id="session5" className="preset-item no-select inline-block" onclick="sessionCount('five')">5</div>
                                            <div id="sessionUnlimited" className="preset-item no-select inline-block" onclick="sessionCount('unlimited')">Unlimited</div>
                                            <div id="sessionCustom" className="preset-item no-select inline-block" onclick="sessionCount('custom')">Custom</div>
                                        </div>
                                        <div id="custom-session-time" className="hidden">
                                            <input id="session-count" type="number" placeholder="Number of rounds" className="number-input-style" min={1} />
                                        </div>
                                        <div className="setting-category margin-top-large">SESSION LENGTH (IN SECONDS)</div>
                                        <div>
                                            <div id="time30" className="preset-item no-select inline-block" onclick="timeCount('thirty')">30</div>
                                            <div id="time45" className="preset-item no-select inline-block preset-item-selected" onclick="timeCount('fourtyFive')">45</div>
                                            <div id="time60" className="preset-item no-select inline-block" onclick="timeCount('sixty')">60</div>
                                            <div id="timeUnlimited" className="preset-item no-select inline-block" onclick="timeCount('unlimited')">Unlimited</div>
                                            <div id="timeCustom" className="preset-item no-select inline-block" onclick="timeCount('custom')">Custom</div>
                                        </div>
                                        <div id="custom-session-length" className="hidden">
                                            <input id="session-length" type="number" placeholder="Enter length" className="number-input-style" min={1} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="kill-link-style toggle-element no-select" data-toggle="collapse" href="https://www.easy-emdr.com/emdr-telehealth.html#path" role="button" aria-expanded="true" aria-controls="speedMovement" onclick="settingDropdown('path')">
                                <div className="margin-top section-card-header">
                                    Path and easing <ion-icon id="settingArrow3" className="collapse-arrow hydrated" name="arrow-dropup" role="img" aria-label="arrow dropup" />
                                </div>
                            </a>
                            <div id="path" className="multi-collapse collapse show" style={{}}>
                                <div className="section-card animated fadeIn">
                                    <div className="white">
                                        <div className="setting-category margin-top">ELEMENT PATH</div>
                                        <div>
                                            <div id="leftright" className="preset-item inline-block no-select preset-item-selected inline-block" onclick="myPathing('leftright')">Left/Right</div>
                                            <div id="topbottom" className="preset-item inline-block no-select margin-left-right inline-block" onclick="myPathing('topbottom')">Top/Bottom</div>
                                            {/*
                          <div id="diagonal" class="preset-item inline-block no-select inline-block" onclick="myPathing('diagonal')">Diagonal</div>
                          */}
                                        </div>
                                        <div className="setting-category text-left margin-top-large">EASING — <span id="easingOutput"><span className="animated fadeIn">STANDARD</span></span>
                                            <span className="information-circle" onclick="information('easing')"><span className="question-mark no-select">?</span></span>
                                        </div>
                                        <div className="presets">
                                            <div>
                                                <div id="standard" className="preset-item inline-block no-select preset-item-selected" onclick="easing('easeInOutQuad')">Standard</div>
                                                <div id="circ" className="preset-item inline-block no-select margin-left-right" onclick="easing('easeInOutCubic')">Smooth</div>
                                                <div id="cubic" className="preset-item inline-block no-select" onclick="easing('easeInOutQuart')">Stretch</div>
                                            </div>
                                            <div>
                                                <div id="sine" className="preset-item inline-block no-select" onclick="easing('easeInOutQuint')">Quick</div>
                                                <div id="linear" className="preset-item inline-block no-select margin-left-right" onclick="easing('linear')">None</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="hidden kill-link-style toggle-element no-select" data-toggle="collapse" href="https://www.easy-emdr.com/emdr-telehealth.html#advanced" role="button" aria-expanded="false" aria-controls="speedMovement" onclick="settingDropdown('advanced')">
                                <div className="margin-top section-card-header">
                                    Tracking options <ion-icon id="settingArrow5" className="collapse-arrow arrow-down hydrated" name="arrow-dropup" role="img" aria-label="arrow dropup" />
                                </div>
                            </a>
                            <div className="hidden collapse multi-collapse" id="advanced">
                                <div className="section-card animated fadeIn">
                                    <div className="white">
                                        <div className="setting-category margin-top">INCLUDE MOOD SCALE <span className="information-circle" onclick="information('mood')"><span className="question-mark no-select">?</span></span></div>
                                        <div>
                                            <div id="moodNo" className="preset-item inline-block no-select" onclick="mood('no')">No
                </div>
                                            <div id="moodYes" className="preset-item inline-block no-select margin-left-right preset-item-selected" onclick="mood('yes')">Yes</div>
                                        </div>
                                        <div id="moodInput" className="visible margin-top-medium">
                                            <input onfocusout="valueCheck('mood')" id="mood-initial" type="number" placeholder="Initial mood (1-10)" className="number-input-style" min={1} />
                                        </div>
                                        <div className="setting-category margin-top-large">INCLUDE RECALL SCALE <span className="information-circle" onclick="information('recall')"><span className="question-mark no-select">?</span></span></div>
                                        <div>
                                            <div id="recallNo" className="preset-item inline-block no-select preset-item-selected" onclick="recall('no')">No</div>
                                            <div id="recallYes" className="preset-item inline-block no-select margin-left-right" onclick="recall('yes')">Yes</div>
                                        </div>
                                        <div id="recallInput" className="hidden margin-top-medium">
                                            <input onfocusout="valueCheck('recall')" id="recall-initial" type="number" placeholder="Initial recall (1-10)" className="number-input-style" min={1} />
                                        </div>
                                        <div className="setting-category margin-top-large">INCLUDE SUDS SCALE <span className="information-circle" onclick="information('suds')"><span className="question-mark no-select">?</span></span></div>
                                        <div>
                                            <div id="sudsNo" className="preset-item inline-block no-select preset-item-selected" onclick="suds('no')">No</div>
                                            <div id="sudsYes" className="preset-item inline-block no-select margin-left-right" onclick="suds('yes')">Yes</div>
                                        </div>
                                        <div id="sudsInput" className="hidden">
                                            <input onfocusout="valueCheck('suds')" id="suds-initial" type="number" placeholder="Initial SUDS (1-10)" className="number-input-style" min={1} />
                                        </div>
                                        <div className="setting-category margin-top-large">INCLUDE VoC SCALE <span className="information-circle" onclick="information('VoC')"><span className="question-mark no-select">?</span></span></div>
                                        <div>
                                            <div id="VoCNo" className="preset-item inline-block no-select preset-item-selected" onclick="VoC('no')">No</div>
                                            <div id="VoCYes" className="preset-item inline-block no-select margin-left-right" onclick="VoC('yes')">Yes</div>
                                        </div>
                                        <div id="VoCInput" className="hidden">
                                            <input onfocusout="valueCheck('VoC')" id="VoC-initial" type="number" placeholder="Initial VoC (1-7)" className="number-input-style" min={1} />
                                        </div>
                                        {/*
                      <div class="hidden setting-category margin-top-large">SET CLIENT NAME <span
                              class="information-circle" onclick="information('client')"><span
                                  class="question-mark no-select">?</span></div>*/}
                                        <div className="hidden">
                                            <div id="clientNo" className="hidden preset-item inline-block no-select preset-item-selected" onclick="client('no')">No</div>
                                            <div id="clientYes" className="hidden preset-item inline-block no-select margin-left-right" onclick="client('yes')">Yes</div>
                                        </div>
                                        <div id="clientInput" className="hidden">
                                            <input id="client-initial" type="text" placeholder="Enter client name" className="number-input-style" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="margin-top">
                                <div className="therapy-settings-useage white margin-top-tiny pad-right no-select" onclick="startSession()">Start
            session</div>
                                <div className="hidden therapy-settings-useage white margin-top-tiny no-select" onclick="saveSettingsBox()">
                                    Save
            settings</div>
                            </div>
                        </div>
                        <div id="preview-pane" className="vertical-center col col-12 col-md-6 col-lg-7 pad-preview preview-pane" style={{ backgroundColor: 'rgb(44, 65, 90)' }}>
                            <span id="preview-pane-secondary" style={{ position: 'absolute', top: '-58px' }} />
                            <div onclick="pausePreview()" style={{ zIndex: '2 !important' }} className="pause-preview-button text-left animated fadeInDown delay1Therapy">
                                <span id="preview-pause-status-icon" style={{ color: 'inherit' }}><ion-icon className="pause-outline-box hydrated" name="pause" role="img" aria-label="pause" /> Pause EMDR preview</span>
                                <div className="hidden preview-text-subheader">Set: <span id="active-set">none</span></div>
                            </div>
                            <span id="alternateBox">
                                <div id="alternate"><span className="animated fadeIn">                        <div id="element" className="emdr-element el element-duration circle-start rounded-square" style={{ backgroundColor: 'rgb(234, 84, 82)', transform: 'translateX(596.908px)' }} />                  </span></div>
                            </span>
                            <div id="paused-preview" className="text-center col vertical-center col-12 paused-preview" style={{ backgroundColor: 'rgb(44, 65, 90)' }}>
                                <span id="paused-preview-element" className="paused-preview-element" style={{ backgroundColor: 'rgb(234, 84, 82)', borderRadius: '10px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="emdr-box" className="emdr-box" style={{ overflowY: 'hidden', zIndex: 3 }}>
                    <div id="emdr-box-buttons" className="emdr-box-buttons">
                        <div className="emdr-box-button margin-right-larger no-select" onclick="endSession()">End Therapy</div>
                        <span id="session-pause">
                            <div className="emdr-box-button no-select pause" onclick="pauseSession()">Pause Session</div>
                        </span>
                        <div id="current-session-count" className="current-session-count no-select">Session <span id="your-current-session" className="inherit">1</span>/<span className="inherit" id="your-total-sessions">5</span></div>
                        <ion-icon name="arrow-dropup" className="emdr-hide-button no-select hydrated" onclick="hideSessionSettings()" style={{ zIndex: '999!important' }} role="img" aria-label="arrow dropup" />
                    </div>
                    <div id="top-bottom-line" className="top-bottom-line animated fadeOut" />
                    <span id="spawn-show-controls" />
                    <div id="therapy-main-box" style={{ paddingLeft: '10px !important', paddingTop: '10px !important' }}>
                    </div>
                </div>
                <div id="instructions-panel" className="gradient-box rubber-band analysis-box analysis-box-hidden">
                    <div className="exit-button no-select" onclick="closeInstructions()">
                        <ion-icon className="dashboard-arrow hydrated" name="close-circle" role="img" aria-label="close circle" />
      Close instructions
    </div>
                    <div className="customize-dash-header">EMDR INSTRUCTIONS</div>
                    <div className="col col-centered col-11 text-center white col-lg-8 margin-top-tiny customize-dash-body">
                        Some thoughts to keep in mind when using our tool
    </div>
                    <div className="margin-top-large col col-12 col-centered category-width">
                        <div className="row slight-border">
                        </div>
                    </div>
                    <div className="col white col-11 col-centered">
                        <div className="row">
                            <div className="col col-12 text-center margin-top-large">
                                <div className="instructions-box shadow">
                                    <div className="instructions-numbers col-centered">1</div>
                                    <div className="instructions-text-header">FINDING A THERAPIST</div>
                                    <div className="instructions-text margin-top darker-text-style">Before you begin your first EMDR
                                    session, it is
              <b className="darker-text-style">extremely</b> important that you meet with a licensed
              professional.
              The easiest way to do this is through using the EMDR international association's free tool.
              You can filter by location
              in order to find therapists in your area who are trained in EMDR.
              <br />
                                        <a href="https://www.emdria.org/search/default.asp" target="_blank" className="kill-link-style">
                                            <div className="start-session-button margin-top">Find a therapist</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 text-center margin-top-large">
                                <div className="instructions-image shadow instructions1">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col white col-11 col-centered">
                        <div className="row">
                            <div className="col col-12 text-center margin-top-large">
                                <div className="instructions-box shadow">
                                    <div className="instructions-numbers col-centered">2</div>
                                    <div className="instructions-text-header">CONFIGURING YOUR SESSION</div>
                                    <div className="instructions-text margin-top darker-text-style">Once in session with an EMDR
                                    therapist, you can then
                                    begin adjusting the tool to be most comfortable for you.
                                    Change the speed, theming, and path of the elements until you feel ready to begin. The speed
                                    of the element should be towards the faster side
                                    of what you can manage comfortably.
            </div>
                                </div>
                            </div>
                            <div className="col col-12 text-center margin-top-large">
                                <div className="instructions-image shadow instructions2">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col white col-11 col-centered">
                        <div className="row">
                            <div className="col col-12 text-center margin-top-large">
                                <div className="instructions-box shadow">
                                    <div className="instructions-numbers col-centered">3</div>
                                    <div className="instructions-text-header">SAVING YOUR CONFIGURATION</div>
                                    <div className="instructions-text margin-top darker-text-style">
                                        You can save your configuration to easily load it later. All of your configurations will
                                        sync across your desktop, phone, tablet, and more.
            </div>
                                </div>
                            </div>
                            <div className="col col-12 text-center margin-top-large">
                                <div className="instructions-image shadow instructions3">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col white col-11 col-centered">
                        <div className="row">
                            <div className="col col-12 text-center margin-top-large">
                                <div className="instructions-box shadow">
                                    <div className="instructions-numbers col-centered">4</div>
                                    <div className="instructions-text-header">THERAPY CONTROLS</div>
                                    <div className="instructions-text margin-top darker-text-style">During the therapy, track the
                                    element with your eyes and follow
                                    the guidance of your therapist. You can end or pause the therapy using the buttons in the
                                    top left corner, or
                                    hide the toolbar by clicking the button in the top right corner.
            </div>
                                </div>
                            </div>
                            <div className="col col-12 text-center margin-top-large">
                                <div className="instructions-image shadow instructions4">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col white col-11 col-centered">
                        <div className="row">
                            <div className="col col-12 text-center margin-top-large">
                                <div className="instructions-box shadow">
                                    <div className="instructions-numbers col-centered">5</div>
                                    <div className="instructions-text-header">AFTER A SESSION</div>
                                    <div className="instructions-text margin-top darker-text-style">
                                        After you have completed a session,
                                        fill in the data when prompted to track progress over the course of several sessions. You
                                        can also fill in notes on how you were
                                        feeling during the session. It is possible to save your data and exit the tool at this
                                        point.
            </div>
                                </div>
                            </div>
                            <div className="col col-12 text-center margin-top-large">
                                <div className="instructions-image shadow instructions5">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col white col-11 col-centered">
                        <div className="row">
                            <div className="col col-12 text-center margin-top-large">
                                <div className="instructions-box shadow">
                                    <div className="instructions-numbers col-centered">5</div>
                                    <div className="instructions-text-header">SESSION ANALYSIS</div>
                                    <div className="instructions-text margin-top darker-text-style">
                                        All of the data and notes entered during a session are visually represented here. You can
                                        view
                                        how things progressed over the course of a session, and all of your results are saved in the
                                        EMDR
                                        analysis page.
              <br />
                                        <a href="https://www.easy-emdr.com/emdr-analysis.html" className="kill-link-style">
                                            <div className="start-session-button margin-top">ANALYZE SESSIONS</div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col col-12 text-center margin-top-large">
                                    <div className="instructions-image shadow instructions6">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-centered text-center margin-top-large">
                            <div className="start-session-button no-select force-top margin-top-tiny" onclick="closeInstructions()">
                                Close
          instructions</div>
                        </div>
                    </div>
                </div>
                {/* Bootstrap core JavaScript */}
                {/* Plugin JavaScript */}
                {/**/}
                {/* */}
                <style dangerouslySetInnerHTML={{ __html: "\n    button,\n    input[type=\"submit\"],\n    input[type=\"reset\"] {\n        background: none;\n        color: inherit;\n        border: none;\n        padding: 0;\n        font: inherit;\n        cursor: pointer;\n        outline: inherit;\n    }\n\n    .awesome {\n        border: 0px;\n        margin: 0px;\n        padding: 0px;\n\n    }\n" }} />
                {/* Custom scripts for this template */}
            </div>

        </div>
        </div>
    )
}

export default Kopya;