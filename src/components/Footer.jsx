import React from 'react';

const Footer = (props) => {
    return (
        <div>
            <p>All rights reserved.</p>
            <button onClick={props.childButton}>click me</button>          
        </div>
    );
};

export default Footer;