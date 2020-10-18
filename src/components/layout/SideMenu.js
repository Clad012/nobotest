import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
export default class SideMenu extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Link to="/" className="nav-link">Accueil</Link>
                            <Link to="/programme-1" className="nav-link">Programme 1</Link>
                            <Link to="/programme-2" className="nav-link">Programme 2</Link>
                            <Link to="/historique" className="nav-link">Historique</Link>
                            
                        </Nav>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
