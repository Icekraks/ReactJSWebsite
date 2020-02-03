import React from 'react';

/*
    Button Class, gives the button tag a bit more functionality and practical usability.
 */
export class Button extends React.Component {
    render() {
        return (
            <a href={this.props.link}>
                <button className={this.props.id}>{this.props.label}</button>
            </a>
        );
    }
}
