const initialState = {
  plates: [],
  sortedPlates: [],
  auth: !!sessionStorage.getItem('token'),
  selectedFile: null
}

export default function plateReducer(state = initialState, action) {
  switch(action.type){
    case 'FETCH_PLATES':
      return {...state, plates: action.payload, sortedPlates: action.payload.filter(function(ele){return ele.category_id === 1})}
    case 'FETCH_NEW_PLATES':
      return {...state, plates: action.payload, sortedPlates: action.payload.filter(function(ele){return ele.category_id === action.lastPlateCategoryId})}
    case 'SORT_PLATES':
      return {...state, sortedPlates: action.payload}
    case 'UPDATE_PLATES':
      return {...state, plates: action.payload, sortedPlates: action.payload.filter(function(ele){return ele.category_id === action.updatedPlateCategoryId})}
    case 'UPDATE_AUTH': 
      return {...state, auth: action.payload}
    case 'UPLOAD_IMG':
      return {...state, selectedFile: action.payload}
    default: 
      return state
  }
}