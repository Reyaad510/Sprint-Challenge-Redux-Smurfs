import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';


class Smurfs extends React.Component {

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            
            <div className='smurfs'>
            {this.props.smurfs.map(smurf => {
                return (
                    <div className='smurf-info'>
                    <i class="fas fa-times"></i>
                    <h3>{smurf.name}</h3>
                    <p>
                        <strong>Age:</strong> {smurf.age}
                    </p>
                    <p>
                        <strong>Height:</strong> {smurf.height}
                    </p>
                    </div>

                );
            })}
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetchingData: state.fetchingData
})

export default connect(mapStateToProps, { getSmurfs })(Smurfs)