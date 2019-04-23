const sortPlates = (categoryId) => dispatch => {
  fetch('/api/plates')
    .then(response => response.json())
    .then(platesData => 
      dispatch({
        type: 'SORT_PLATES',
        payload: platesData.filter(function(ele){return ele.category_id === categoryId})
    }))
    .catch(error => console.log(error))
}

export default sortPlates;