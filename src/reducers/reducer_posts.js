import { TYPES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case TYPES.FETCH_POSTS:
      if (action.payload.status === 200) {
        const posts = {};
        for (let post of action.payload.data) {
          posts[post.id] = post;
        }
        return posts;
      }
    case TYPES.FETCH_POST:
      const post = action.payload.data;
      if (action.payload.status === 200) {
        return {...state, [post.id]: post};
      }
    case TYPES.DELETE_POST:
      const posts = Object.assign({}, state);
      delete posts[action.payload];
      return posts;
  }

  return state;
}
