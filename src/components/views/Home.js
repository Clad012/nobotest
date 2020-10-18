import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Row align="center" className="justify-content-center align-items-center">
                    <Col xs={6}>
                    <   Image src="
                        adel.PNG" />
                    </Col>
                    <Col xs={6}>
                        <Image src="nobo.png" />
                    </Col>
                </Row>
                
                <p className="mt-4">
                Bonjour! Ce test est réalisé par <strong className="nobo badge">Adel Boushih</strong> dans le cadre du test technique de <strong className="nobo badge">Nobo</strong>.
                Dans cette application vous pouvez : <br /></p>
               <ul>
                    <li>Cliquer sur Programme 1 pour le tester</li>
                    <li>Cliquer sur Programme 2 pour le tester</li>
                    <li>Cliquer sur historique pour voir voir le trace de tous les activités réalisés dans l'applications</li>
                </ul>
              
                <p>
                     Ce test intègre ainsi un <strong className="nobo badge">Chatbot intélligent</strong> qui peut vous guider ainsi exécuter les programmes à votre place, cliquez sur le bouton en bas à droite pour commencer!
                </p>
            </div>
        )
    }
}
