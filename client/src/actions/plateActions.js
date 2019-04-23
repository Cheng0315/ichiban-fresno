import {FETCH_PLATES, NEW_PLATE} from '../actions/types'

const fetchPlates = () => dispatch => {
  console.log('hi')
  fetch('/api/plates')
    .then(response => response.json())
    .then(platesData => dispatch({
      type: FETCH_PLATES,
      payload: platesData
    }))
    .catch(error => console.log(error))
}

export default fetchPlates