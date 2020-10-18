import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Routes from '../../routes'
export default class SideMenu extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Routes />
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
