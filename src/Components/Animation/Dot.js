import React, { useState } from 'react';

function Dot(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    setTimeout(() => { changePosition(setX, setY) }, 3)
    return (
        <div style={{
            height: "3px",
            width: "3px",
            borderRadius: "3px",
            transition: "all 1s ease",
            position: "fixed",
            background: "white",
            left: x,
            top: y
        }}>
        </div>
    );
}

function changePosition(setX, setY) {
    let y = Math.random() * window.innerHeight;
    let x = Math.random() * window.innerWidth;
    setX(x);
    setY(y);
}

export default Dot;