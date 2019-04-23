const updateAuth = (authToken) => dispatch => {
  dispatch({
    type: 'UPDATE_AUTH',
    payload: authToken
  })

}

export default updateAuth;