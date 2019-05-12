import React from 'react';
import { connect } from 'react-redux';

class Note extends React.Component {
  
  render() {
    let note = '';

    if (this.props.auth) {
      note = <div className='container'>
        <div className='alert alert-warning text-center' role="alert">
          NOTE: The 'Update My Info' link is disabled because this is the only account for this application.
        </div>
      </div>
    }

    return (
      note
    )
  }
}

const mapStateToProps = state => ({
  auth: state.plates.auth
})

export default connect(mapStateToProps)(Note)