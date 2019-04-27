const updatePlates = (fd, closeModal, categoryId) => dispatch => {

  fetch('/api/update_plates', {
    method: 'PATCH',
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
      updatedPlateCategoryId: parseInt(categoryId)
    })
  })
  .catch(error => console.log(error))
}

export default updatePlates;