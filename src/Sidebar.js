import React from 'react';
import {Button} from './Button';
import {Container, Col, Row} from 'reactstrap';


/*
    Creates a sidebar based on an array of values, parsed into the class and creates an array of buttons.
 */
export class Sidebar extends React.Component{

    render(){
        let buttons=[];
        for(let i=0;i<this.props.items.length;i++){
            buttons.push(<Button id={this.props.items[i].id} label={this.props.items[i].Buttonlabel} link={this.props.items[i].link}/>)
        }
    return(
        <Container>
            <Row>
            <Col>
                {buttons}
            </Col>
            </Row>
        </Container>

        );
    }
}
