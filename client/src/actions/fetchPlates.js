const fetchPlates = () => dispatch => {
  dispatch({type: 'START_ADDING_PLATES'});
  fetch('/api/plates')
    .then(response => response.json())
    .then(platesData => 
      dispatch({
        type: 'FETCH_PLATES',
        payload: platesData
    }))
    .catch(error => console.log(error))
}

export default fetchPlates;