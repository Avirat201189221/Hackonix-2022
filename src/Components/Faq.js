import React from 'react';

function Faq(props) {
    return (
        <div>
            <section className="faq" id="faq">

                <div className="backgroundfaq">
                    <div className="faq_area section_padding_130" id="faq">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-sm-8 col-lg-6">

                                    <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s"
                                        style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                        <h3><span>Frequently </span> Asked Questions (FAQ's)</h3>

                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">

                                <div className="col-12 col-sm-10 col-lg-8">
                                    <div className="accordion faq-accordian" id="faqAccordion">
                                        <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s"
                                            style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                            <div className="card-header" id="headingOne">
                                                <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseOne"
                                                    aria-controls="collapseOne">What are the different
                                                    events under colloquium?<span className="lni-chevron-up"></span></h6>
                                            </div>
                                            <div className="collapse" id="collapseOne" aria-labelledby="headingOne"
                                                data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    <p>There are three events under it this year, i.e., Prophylaxis, Clueless,
                                                        and Code Conquer.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 wow fadeInUp" data-wow-delay="0.3s"
                                            style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                            <div className="card-header" id="headingTwo">
                                                <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTwo"
                                                    aria-controls="collapseTwo">Will it be an online or
                                                    offline event?<span className="lni-chevron-up"></span></h6>
                                            </div>
                                            <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo"
                                                data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    <p>It will be an online event seeing the current situation.</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 wow fadeInUp" data-wow-delay="0.4s"
                                            style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                            <div className="card-header" id="headingThree">
                                                <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThree"
                                                    aria-controls="collapseThree">Is there any registration
                                                    fees?<span className="lni-chevron-up"></span></h6>
                                            </div>
                                            <div className="collapse" id="collapseThree" aria-labelledby="headingThree"
                                                data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    <p> No, there is no such fee. It is entirely free.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 wow fadeInUp" data-wow-delay="0.5s"
                                            style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                            <div className="card-header" id="headingFour">
                                                <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseFour"
                                                    aria-controls="collapseFour">Do I need a team to take
                                                    part in Code Conquer?<span className="lni-chevron-up"></span></h6>
                                            </div>
                                            <div className="collapse" id="collapseFour" aria-labelledby="headingFour"
                                                data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    <p> No, you don't need a team. It will be individual participation.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 wow fadeInUp" data-wow-delay="0.5s"
                                            style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                            <div className="card-header" id="headingFive">
                                                <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseFive"
                                                    aria-controls="collapseFive"> What are the team sizes
                                                    for Prophylaxis and Clueless?<span className="lni-chevron-up"></span></h6>
                                            </div>
                                            <div className="collapse" id="collapseFive" aria-labelledby="headingFive"
                                                data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    <p>You can have a team of 1-3 members for Prophylaxis and 1-4 for Clueless.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 wow fadeInUp" data-wow-delay="0.5s"
                                            style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                            <div className="card-header" id="headingSix">
                                                <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseSix"
                                                    aria-controls="collapseSix">Is intercollege
                                                    participation allowed?<span className="lni-chevron-up"></span></h6>
                                            </div>
                                            <div className="collapse" id="collapseSix" aria-labelledby="headingSix"
                                                data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    <p>Definitely yes.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 wow fadeInUp" data-wow-delay="0.5s"
                                            style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                            <div className="card-header" id="headingSeven">
                                                <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseSeven"
                                                    aria-controls="collapseSeven"> Is there any eligibility
                                                    criteria?<span className="lni-chevron-up"></span></h6>
                                            </div>
                                            <div className="collapse" id="collapseSeven" aria-labelledby="headingSeven"
                                                data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    <p>No, there is no such criteria. Our event is open for all.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 wow fadeInUp" data-wow-delay="0.5s"
                                            style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                            <div className="card-header" id="headingEight">
                                                <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseEight"
                                                    aria-controls="collapseEight">Being a beginner at
                                                    coding, should I participate in Code Conquer?<span
                                                        className="lni-chevron-up"></span></h6>
                                            </div>
                                            <div className="collapse" id="collapseEight" aria-labelledby="headingEight"
                                                data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    <p>Surely you should participate in it. Nothing is more expensive than a
                                                        missed opportunity.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 wow fadeInUp" data-wow-delay="0.5s"
                                            style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                            <div className="card-header" id="headingNine">
                                                <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseNine"
                                                    aria-controls="collapseNine">Got any more
                                                    questions?<span className="lni-chevron-up"></span></h6>
                                            </div>
                                            <div className="collapse" id="collapseNine" aria-labelledby="headingNine"
                                                data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    <p id="last">Contact us on our social media handles given below.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Faq;