import React from 'react';

export class Button extends React.Component {
    render() {
        return (
            <a href={this.props.link}>
                <button className={this.props.id}>{this.props.label}</button>
            </a>
        );
    }
}