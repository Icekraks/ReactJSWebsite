import React from 'react';
import logo from './Assets/Logo.png';
import './css/App.css';
import {Header} from "./Components/header";
import {Body} from "./Components/Body";

const items = [
    {Buttonlabel: 'Home', id: 'navButton', link: null},
    {Buttonlabel: 'Youtube', id: 'navButton', link: 'https://www.youtube.com/c/IcekraksOfficial'},
    {Buttonlabel: 'Instagram', id: 'navButton', link: 'https://www.instagram.com/icekraks/'},
    {Buttonlabel: 'Twitter', id: 'navButton', link: 'https://twitter.com/OfficialIcekrak'},
    {Buttonlabel: 'Github', id: 'navButton', link: 'https://github.com/Icekraks'}
];
const itemsM = [
    {Buttonlabel: 'Home', id: 'navButtonM', link: null},
    {Buttonlabel: 'Youtube', id: 'navButtonM', link: 'https://www.youtube.com/c/IcekraksOfficial'},
    {Buttonlabel: 'Instagram', id: 'navButtonM', link: 'https://www.instagram.com/icekraks/'},
    {Buttonlabel: 'Twitter', id: 'navButtonM', link: 'https://twitter.com/OfficialIcekrak'},
    {Buttonlabel: 'Github', id: 'navButtonM', link: 'https://github.com/Icekraks'}
];

export class App extends React.Component {

    render(){
        return(
            <div className="App">
                <Header logo={logo}/>
                <Body>

                </Body>
            </div>
        );
    }
}
