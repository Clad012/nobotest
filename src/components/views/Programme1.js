import React, { Component } from 'react'
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

import { programme1 } from '../../store/actions/programmes'

import {
    useHistory,
    useParams
  } from "react-router-dom";
class Programme1 extends Component {
    componentDidMount(){

    }
    constructor(props) {
        super(props);
        this.state = {
            chaine: "",
            nombre: 0,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.nombre)
        this.props.programme1(`chaine=${this.state.chaine}&nombre=${this.state.nombre}`);
    }
    render() {
        return (
            
            <div>
                <h4 className="nobo badge">Programme 1
                </h4>
                <p>
                    Retourne le résultat de la division entre la longueur de la chaîne de caractère et le
                    nombre fournis.
                </p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="chaine">
                        <Form.Label>Chaîne de caractères</Form.Label>
                        <Form.Control type="text" placeholder="Entrer une chaine." onChange={this.handleInputChange} name="chaine" required/>
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="number" placeholder="Entrer un nombre entre 0 et 20." onChange={this.handleInputChange} name="nombre" min="0" max="20" required/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Envoyer
                    </Button>
                </Form>
                <div>
                    {this.props.loading && (<div className="loading"><Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner></div>)}

                    {this.props.resulA && (
                            <div className="result mt-2">
                                <Alert variant="primary">
                                    {this.props.errors}
                                </Alert>
                            </div>)}
                    {this.props.errors && (
                            <div className="result mt-2">
                                <Alert variant="warning">
                                    {this.props.errors}
                                </Alert>
                            </div>)}
                </div>
            </div>

        )
    }
}
Programme1.propTypes = {

}
const mapStateToProps = ({ programmes }) => ({
  loading: programmes.loading,
  errors: programmes.errorA,
  resulA: programmes.programAresult,
});
  

export default connect(mapStateToProps, { programme1  })(Programme1);