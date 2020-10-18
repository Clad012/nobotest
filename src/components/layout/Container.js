import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideMenu from './SideMenu'
import RoutesHolder from './RoutesHolder'
export default class ContainerHolder extends Component {
    render() {
        return (
            <Container  className="mainContainer">
                <Row align='left'>
                    <Col xs={12} md={4}> <SideMenu /></Col>
                    <Col xs={12} md={8}><RoutesHolder /></Col>
                </Row>
            </Container>
        )
    }
}
