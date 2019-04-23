import {FETCH_PLATES, NEW_PLATE} from '../actions/types'

const initialState = {
  plates: [],
  sortedPlates: []
}

export default function plateReducer(state = initialState, action) {
  switch(action.type){
    case 'FETCH_PLATES':
      return {...state, plates: action.payload, sortedPlates: action.payload.filter(function(ele){return ele.category_id === 1})}
    case 'SORT_PLATES':
      return {...state, sortedPlates: action.payload}
    case 'NEW_PLATE':
      return {
        ...state, 
        plates: [...state.plates, action.platesData]}
    default: 
      return state
  }
}