import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { programme2 } from '../../store/actions/programmes'


import {
    useHistory,
    useParams
  } from "react-router-dom";
class Programme2 extends Component {
    componentDidMount(){

    }
    constructor(props) {
        super(props);
        this.state = {
            date_debut: "",
            date_fin: null,
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
        let dateFin = this.state.date_fin ? '&date_fin='+this.state.date_fin : '';
        this.props.programme2(`chaine=${this.state.date_debut}${dateFin}`);
    }
    render() {
        return (

            <div>
                <h5 className="nobo badge">Programme 2
                </h5>
                <p>Retourne le nombre de jour entre le 1er jour du mois de la date de début  + le nombre de jours entre le dernier jour du mois de la date de fin et la date de fin.</p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="date_debut">
                        <Form.Label>Date de début</Form.Label>
                        <Form.Control type="date" placeholder="Entrer une chaine." onChange={this.handleInputChange} name="date_debut" required/>
                    </Form.Group>

                    <Form.Group controlId="date_fin">
                        <Form.Label>Date de fin</Form.Label>
                        <Form.Control type="date" placeholder="Entrer un nombre entre 0 et 20." onChange={this.handleInputChange} name="date_fin"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Envoyer
                    </Button>
                </Form>
                <div>
                    {this.props.loading && (<div className="loading"><Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner></div>)}

                    {this.props.resulB && (
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
Programme2.propTypes = {

}
const mapStateToProps = ({ programmes }) => ({
  loading: programmes.loading,
  errors: programmes.errorB,
  result: programmes.programBresult,});
  

export default connect(mapStateToProps, { programme2 })(Programme2);