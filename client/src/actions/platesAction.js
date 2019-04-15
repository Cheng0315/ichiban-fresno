export const fetchAllPlates = (platesData) => {
  return  {
    type: 'GET_ALL_PLATES',
    platesData
  }
}