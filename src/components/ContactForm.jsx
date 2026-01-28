import React from 'react';

const ContactForm = (props) => {
    return (
        <div>
            <h1>{props.item.name}</h1>
            <p>Price: ${props.item.price}</p>
            <p>Description: {props.item.description}</p>
        </div>
    );
};

export default ContactForm;