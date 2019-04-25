const deletePlates = (closeModal, plateId, categoryId) => dispatch => {

  fetch('/api/delete_plates', {
    method: 'DELETE',
    body: JSON.stringify({id: plateId}), 
    headers: {
      'Content-Type': 'application/json',
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
      updatedPlateCategoryId: categoryId
    })
  })
  .catch(error => console.log(error))
}

export default deletePlates;