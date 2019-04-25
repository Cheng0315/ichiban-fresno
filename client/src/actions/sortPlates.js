const sortPlates = (categoryId, plates) => dispatch => {
  
  dispatch({
    type: 'SORT_PLATES',
    payload: plates.filter(function(ele){return ele.category_id == categoryId})
  })

}

export default sortPlates;