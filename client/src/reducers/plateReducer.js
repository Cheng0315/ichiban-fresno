import {FETCH_PLATES, NEW_PLATE} from '../actions/types'

const initialState = {
  plates: [],
  sortedPlates: []
}

export default function plateReducer(state = initialState, action) {
  console.log('yo')
  switch(action.type){
    case 'FETCH_PLATES':
      return {...state, plates: action.payload}
    case 'NEW_PLATE':
      return {
        ...state, 
        plates: [...state.plates, action.platesData]}
    default: 
      return state
  }
}