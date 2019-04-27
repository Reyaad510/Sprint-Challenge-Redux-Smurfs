import React from 'react';


class EditForm extends React.Component {

    state = {
        newSmurf: this.props.smurf
    }


    handleChange = e => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        });
    }

    editSmurf = e => {
        this.props.editSmurf(e, this.state.newSmurf);
    }

    render() {
        return (
            <form className='edit-form' onSubmit={this.editSmurf}>
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
            <button>Edit Smurf</button>
        </form>
        );
    }
}



export default EditForm;