import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    state = {
        newSmurf: {
        name: '',
        age:'',
        height:''
        }
    }

    handleChange = e => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        });
    }

    handleFriendForm = e => {
        e.preventDefault();
        this.props
          .addSmurf(this.state.newSmurf)

          

    }

    render() {
        return (
            <form onSubmit={this.handleFriendForm}>
                <input
                type='text'
                name='name'
                value={this.state.newSmurf.name}
                onChange={this.handleChange}
                placeholder='Name'
                />
                    <input
                type='text'
                name='age'
                value={this.state.newSmurf.age}
                onChange={this.handleChange}
                placeholder='Age'
                />
                    <input
                type='text'
                name='height'
                value={this.state.newSmurf.height}
                onChange={this.handleChange}
                placeholder='Height'
                />
                <button>Add New Smurf</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps, { addSmurf }
)(SmurfForm)