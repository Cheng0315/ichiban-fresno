const createNewPlate = (fd, closeModal) => dispatch => {
  dispatch({type: 'START_ADDING_PLATES'});
  fetch('/api/create_plate', {
    method: 'post',
    body: fd,
    headers: {
      'token': sessionStorage.getItem('token'),
      'Authorization': `Token ${sessionStorage.getItem('token')}`
    },
  })
  .then(response => response.json())
  .then(platesData => {
    closeModal();
    dispatch({
      type: 'FETCH_NEW_PLATES',
      payload: platesData,
      lastPlateCategoryId: platesData[Object.keys(platesData)[Object.keys(platesData).length - 1]].category_id
  })
  })
  .catch(error => console.log(error))
}

export default createNewPlate;