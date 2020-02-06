import React from 'react';
import '../css/header.css';

export const Header = props => (
    <div className="App-header">
        <img src={props.logo} className="Bannerlogo" alt="logo"/>
    </div>
);
