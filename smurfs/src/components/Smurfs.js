import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs, deleteFriends } from '../actions';
import EditForm from './EditForm';


class Smurfs extends React.Component {

    state =  {
        editingSmurfId: null
    }


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
                if(this.state.editingSmurfId === smurf.id) {
                    return <EditForm smurf={smurf} />
                    
                } 
                return (
                    <div className='smurf-info'>
                    <i class="fas fa-pencil-alt" onClick={() => this.setState({ editingSmurfId: smurf.id })}/>
                    <i class="fas fa-times" onClick={() => this.deleteFriend(smurf.id)}/>
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