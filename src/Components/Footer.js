import React from 'react';

function Footer(props) {
    return (
        <div>
            <section className="footer" id="footer" style={{ marginBottom: "0%" }}>
                <footer className="foot ">
                    <div className="mb-4">
                        <div className="container2">
                            <div className="row py-4 d-flex align-items-center">
                                <div className="col-md-12 text-center">
                                    <span className="follow"> Follow us :</span>
                                    <a href="https://www.facebook.com/ISTE.Thapar"><i className="fab fa-facebook-f social"></i></a>
                                    <a href="https://www.instagram.com/iste_tiet/"><i className="fab fa-instagram social"></i></a>
                                    <a href="https://www.linkedin.com/company/iste-thapar-chapter/mycompany/"><i
                                        className="fab fa-linkedin social"></i></a>
                                    <a href="mailto:iste@thapar.edu"><i className="far fa-envelope social"></i></a>
                                    <p style={{ marginTop: "1rem" }}> © ISTEThapar2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    );
}

export default Footer;