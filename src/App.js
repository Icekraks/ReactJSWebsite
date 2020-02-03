import React from 'react';
import logo from './Logo.png';
// import logo2 from './Assets/meme.jpg';
import './App.css';
import {Button} from './Button';
import {Sidebar} from './Sidebar';

const items = [
    {Buttonlabel: 'Home',id:'navButton',link: null},
    {Buttonlabel: 'Youtube',id:'navButton',link: 'https://www.youtube.com/c/IcekraksOfficial'},
    {Buttonlabel: 'Instagram',id:'navButton',link: 'https://www.instagram.com/icekraks/'},
    {Buttonlabel: 'Twitter',id:'navButton',link:'https://twitter.com/OfficialIcekrak'}
];
function App() {
    return (
        <div className="App">
            <div className="App-header">

                <img src={logo} className="App-logo" alt="logo" />

            </div>
            /*
             * body, Everything below the header/banner is contained in the body class.
             */
            <div className="body">
                <div className='nav-bar'>
                    <Sidebar items={items}/>
                    {/*<img src={logo2} className="App-logo2" alt="logo" />*/}
                </div>
                <div className="columnBody">
                    <div className="rowBody">
                        <Button id="RSButton" label="Play Fucking Runescape." link ="https://oldschool.runescape.com/"/>
                    </div>
                    <div className="rowBody">
                        <Button id="RSButton" label="Click for Meme." link = "https://i.kym-cdn.com/photos/images/original/001/700/569/1c4.jpg"/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default App;
