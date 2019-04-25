const updatePlates = (fd, closeModal) => dispatch => {
  fetch('/api/edit_plate', {
    method: 'patch',
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
      type: 'UPDATE_PLATES',
      payload: platesData,
      lastPlateCategoryId: platesData[Object.keys(platesData)[Object.keys(platesData).length - 1]].category_id
  })
  })
  .catch(error => console.log(error))
}

export default updatePlates;