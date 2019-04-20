import React from 'react';
import { connect } from 'react-redux';


class Smurfs extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            
            <div className='smurfs'>
            <h1> I am smurfs </h1>
            </div>
            
        )
    }
}

export default connect(null, {})(Smurfs)