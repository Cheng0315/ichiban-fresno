const uploadImg = (imgFile) => dispatch => {
  
  dispatch({
    type: 'UPLOAD_IMG',
    payload: imgFile.target.files[0]
  })
}

export default uploadImg;