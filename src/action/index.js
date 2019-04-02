import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());
  console.log(getState().posts);
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// const _fetchUser = _.memoize(async (id,dispatch) => {
//   const response = await jsonPlaceholder.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
