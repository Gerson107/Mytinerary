import axios from "axios";

const commentAction = {
  addComment: (comment) => {
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      const res = await axios.post(
        "https://mitinerary.herokuapp.com/api/v1/itinerarios/comment",
        { comment },
        { headers: { Authorization: `Bearer  ${token}` } }
      );
      console.log(res)
      dispatch({
        type: "message",
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success,
        },
      });
      return res.data.response;
    };
  },
  deleteComment: (comment) => {
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      const res = await axios.post(
        "https://mitinerary.herokuapp.com/api/v1/itinerarios/deletecomment/",
        { comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(res)
      dispatch({
        type: "message",
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success,
        },
      });
      return res.data.response;
    };
  },

  updateComment: (comment) => {
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      const res = await axios.put(
        "https://mitinerary.herokuapp.com/api/v1//itinerarios/comment",
        { comment },
        { headers: { Authorization: "Bearer " + token } }
      );
      dispatch({
        type: "message",
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success,
        },
      });
      return res.data.response;
    };
  },
};
export default commentAction;
