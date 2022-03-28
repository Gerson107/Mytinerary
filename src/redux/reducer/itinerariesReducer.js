const initialState = {
  itinera: [],
  auxiliar: [],
};

const itinerariosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch":
      return {
        ...state,
        itinera: action.payload,
        auxiliar: action.payload,
      };
    default:
        return state
  }
};
export default itinerariosReducer;
