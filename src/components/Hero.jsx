import React from 'react';
import HeroImage from './HeroImage.jsx';

const Hero = (props) => {
    return (
        <div>
            <HeroImage title={props.title} />
        </div>
    );
};

export default Hero;