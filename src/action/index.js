import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholder.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: "FETCH_POST", payload: response.data });
  };

  export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
