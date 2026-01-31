import React from 'react';
import Menu from '../components/Menu';
import {useParams} from 'react-router-dom';

const ProfilePage = () => {

    let {facebookID, youtubeID} = useParams();

    return (
        <div>
            <Menu /> 
            <p>Facebook ID: {facebookID}</p>
            <p>YouTube ID: {youtubeID}</p>  
            <h1>This is Profile Page</h1>
        </div>
    );
};

export default ProfilePage;