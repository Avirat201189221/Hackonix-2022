import React from 'react';

function About(props) {
    return (
        <div>
            <section className="about" id="about">
                <div className="container glassEffect">
                    <div className="row">
                        <h1>About Us</h1>
                        <div className="col-md-6 col-12">
                            <img src="iste_logo_white.png" alt=""></img>
                        </div>
                        <div className="col-md-6 col-12">
                            <p style={{ textAlign: "justify", margin: "2% 10%" }}>The Indian Society for Technical Education (ISTE)
                                is the leading national professional non-profit organization devoted to the overall development
                                of our Technical Education System. With its government recognition and a legacy of 50 years, we
                                feel that we can provide a highly constructive environment for someone who is driven by the will
                                to make a mark.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default About;