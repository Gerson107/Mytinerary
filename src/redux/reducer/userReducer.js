const initialState = {
  user: null,
  message: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user":
      return {
        ...state,
        user: action.payload.response.userData,
        message: action.payload.message,
      };
    case "message":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
