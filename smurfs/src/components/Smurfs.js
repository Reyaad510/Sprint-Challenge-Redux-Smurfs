import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs, deleteFriends } from '../actions';


class Smurfs extends React.Component {


    componentDidMount() {
        this.props.getSmurfs();
    }

    deleteFriend = id => {
        this.props.deleteFriends(id);
    }

    render() {
        return (
            
            <div className='smurfs'>
            {this.props.smurfs.map(smurf => {
                return (
                    <div className='smurf-info'>
                    <i class="fas fa-times" onClick={() => this.deleteFriend(smurf.id)}></i>
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
    fetchingData: state.fetchingData,
    deletingSmurf: state.deletingSmurf
})

export default connect(mapStateToProps, { getSmurfs, deleteFriends })(Smurfs)