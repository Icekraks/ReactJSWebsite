import React from 'react';
import logo from './Logo.png';
import logo2 from './Assets/meme.jpg';
import './App.css';
import {Button} from './Button';
import {Sidebar} from './Sidebar';
// const baseURL = "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=";
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

//body, Everything below the header/banner is contained in the body class.
export class App extends React.Component {

    constructor() {
        super();

        this.state = {
            navBarVisible: false
        };
    }

    toggleNavBar = () => {
        this.setState({
            navBarVisible: !this.state.navBarVisible

        });
    };

    // async rsStats (){
    //     var result = await fetch(baseURL+encodeURIComponent("IcekraksIG")).then(res => {return res.text()});
    //     return result;
    // }
    function openNav(){

    }
    function closeNav(){

    }
    render() {
        // console.log(this.rsStats());
        return (
            <div className="App">
                <div className="App-header">

                    <img src={logo} className="App-logo" alt="logo"/>

                </div>

                <div className="body">
                        <div className='nav-bar'>
                            <Sidebar className='sidebar-Buttons' items={items}/>
                        </div>
                        <div className='nav-bar-mobile'>
                            <img src={logo2} className="App-logo2" alt="logo" onClick={this.toggleNavBar}/>
                            {!this.state.navBarVisible && <Sidebar className='sidebar-Buttons-mobile' items={itemsM}/>}
                        </div>
                    <div className="columnBody">
                        <div className="rowBody">
                            <div className="columnBody">

                            </div>
                            <div className="columnBody">
                                <Button id="RSButton" label="Play Fucking Runescape."
                                    link="https://oldschool.runescape.com/"/>
                            </div>
                        </div>
                        <div className="rowBody">
                            <Button id="RSButton" label="Click for Meme." link="http://www.jsfuck.com/"/>
                        </div>
                        <div className="rowBody" >
                            <div className="columnBody">
                            <iframe title="video" className="myVideo" src="https://www.youtube-nocookie.com/embed/h9y2FXOcZl0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>

                            </iframe>
                            </div>
                            <div className="columnBody">
                            <iframe title="video2" className="myVideo" src="https://www.youtube-nocookie.com/embed/jDH-Pn58TYU?"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>

                            </iframe>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

