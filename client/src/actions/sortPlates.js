const sortPlates = () => dispatch => {
  fetch('/api/plates')
    .then(response => response.json())
    .then(platesData => 
      dispatch({
        type: 'SORT_PLATES',
        payload: platesData.filter(function(ele){return ele.category_id === 1})
    }))
    .catch(error => console.log(error))
}

export default sortPlates;