import axios from "axios";

export function createBlogPost(userData) {
  return dispatch => {
    return axios.post("/api/blog", userData);
  };
}
