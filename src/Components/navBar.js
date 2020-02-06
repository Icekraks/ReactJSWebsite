import React from 'react';
import '../css/navBar.css';
import {Button} from "./Button";

export class NavBar extends React.Component {
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
    render() {
        let buttons=[];
        for(let i=0;i<this.props.items.length;i++){
            buttons.push(<Button id={this.props.items[i].id} label={this.props.items[i].Buttonlabel} link={this.props.items[i].link}/>)
        }
        return (
            <div className="navBar">
                {buttons}
            </div>
        );
    }
}
