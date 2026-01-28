import React from 'react';

const HeroImage = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src="https://picsum.photos/id/1/200/300" alt="" />
        </div>
    );
};

export default HeroImage;