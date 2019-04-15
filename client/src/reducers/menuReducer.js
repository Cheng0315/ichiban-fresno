export default function menuReducer(state={plates: [],sortedPlates: [], category: 1}, action) {
  switch(action.type){
    case 'INCREASE_COUNT':
      return {...state, category: state.category + 1}
    case 'GET_ALL_PLATES':
      
      return {
        ...state, 
        plates: [...state.plates, action.platesData]}
    default: 
      return state
  }
}