import React from 'react';
import { connect } from 'react-redux';

class Note extends React.Component {
  
  render() {
    let note = '';

    if (this.props.auth) {
      note = <div className='container'>
        <div className='alert alert-warning text-center' role="alert">
          NOTE: The 'Update My Info' link is disabled to prevent the 
          change of the email or password of this account, as this is 
          the only account in this application. If the email or 
          password changed, other users will not be able to log in.
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