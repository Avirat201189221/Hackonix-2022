import React from 'react'

function Events(props) {
    return (
        <div>
            <section className="events" id="event">

                <div className="container1">
                    <div className="row">
                        <h1>Events</h1>
                        <div className="card col-md-3 col-12">
                            <div className="box">
                                <div className="content">
                                    <h2><i className="fas fa-code"></i></h2>
                                    <h3>Prophylaxis</h3>
                                    <p>A call to all technophiles to test their programming knowledge encompassing analytical
                                        and logical skills to detect the bugs and fix them efficiently. A challenge that gives
                                        you the opportunity to stand out of the crowd and gain a competitive edge.</p>
                                    <p style={{ fontWeight: "bold", color: "red" }}>*Registerations Closed</p>
                                </div>
                            </div>
                        </div>



                        <div className="card col-md-3 col-12">
                            <div className="box">
                                <div className="content ">
                                    <h2><i className="fas fa-code-branch"></i></h2>
                                    <h3>Code conquer</h3>
                                    <p>A contest with a blend of treasure hunt and coding skills. A thought-provoking storyline
                                        is waiting for you to crack the codes with an exponential rise in the level of
                                        difficulty to figure out the treasure. Accept the challenge and crack it! </p>
                                    <p style={{ fontWeight: "bold", color: "red" }}>*Registerations Closed</p>
                                </div>
                            </div>
                        </div>

                        <div className="card col-md-3 col-12">
                            <div className="box">
                                <div className="content">
                                    <h2><i className="fas fa-dice"></i></h2>
                                    <h3>Clueless</h3>
                                    <p>
                                        A blend of brain- twisting riddles and a murder mystery, Clueless is all about figuring
                                        out the murderer and the weapon.
                                        Get ready to experience something enthralling and brain-exercising that will delve you
                                        into new dimension.
                                    </p>
                                    <p style={{ fontWeight: "bold", color: "red" }}>*Registerations Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Events