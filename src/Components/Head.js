import React from 'react';

function Head(props) {
    return (

        <div className="anima">
            <div className="logo">
                <img style={{ width: "50%" }} src="Logo.jpg"></img>
                <div className="text">Late August FOR NOW</div>
                <div className="container">
                    <div className="layer"></div>
                </div>
                <div className="frame">
                    <a href="#event"><button type="button" className="btn btn-outline-secondary btn-lg">Register
                        Now</button></a>
                </div>
            </div>
        </div>
    );
}

export default Head;