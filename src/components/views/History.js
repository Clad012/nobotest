import React, { Component } from 'react'
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

import { getProgrammes } from '../../store/actions/programmes'

import {
    useHistory,
    useParams
  } from "react-router-dom";
class Programme1 extends Component {
    componentDidMount(){

    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            {this.props.loading && (<div className="loading"><Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
            </Spinner></div>)}
                <h4 className="nobo badge">Historique
                </h4>
                <p>
                    Vous trouvez ci-dessous la liste des activités réalisées.
                </p>
            <Table striped  hover>
            <thead>
                <tr>
                <th>Programme</th>
                <th>Données</th>
                <th>Résultat</th>
                <th>Date</th>
                </tr>
            </thead>
                <tbody>
                  {this.props.programmes.map(programme => (
                    <tr key={programme.date}>
                        <td>{programme.programme}</td>
                        <td>{programme.donnee}</td>
                        <td>{programme.resultat}</td>
                        <td>{programme.date}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            </div>
        )
    }
}
Programme1.propTypes = {

}
const mapStateToProps = ({ programmes }) => ({
  loading: programmes.loading,
  programmes: programmes.programmes,
});
  

export default connect(mapStateToProps, { getProgrammes  })(Programme1);