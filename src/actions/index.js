import axios from 'axios';

export const TYPES = {
  CREATE_POSTS: 'CREATE_POSTS',
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  DELETE_POST: 'DELETE_POST',
};

const API_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=4242'

export function fetchPosts() {
  const request = axios.get(`${API_URL}/posts${API_KEY}`);

  return {
    type: TYPES.FETCH_POSTS,
    payload: request,
  };
}

export function createPost(values) {
  const request = axios.post(`${API_URL}/posts${API_KEY}`, values);

  return {
    type: TYPES.CREATE_POSTS,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${API_URL}/posts/${id}${API_KEY}`);

  return {
    type: TYPES.FETCH_POST,
    payload: request,
  }
}

export async function deletePost(id) {
  const request = await axios.delete(`${API_URL}/posts/${id}${API_KEY}`);

  return {
    type: TYPES.DELETE_POST,
    payload: {
      id,
      request
    }
  }
}
