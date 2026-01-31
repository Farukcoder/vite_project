import React from 'react';
import Menu from '../components/Menu';
import {useParams} from 'react-router-dom';
const Product = () => {

    let {id, name} = useParams();

    return (
        <div>
            <Menu />
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <h1>This is Product Page</h1>
        </div>
    );
};

export default Product;