import axios from 'axios';
import setAuthorizationToken from '../../../utils/setAuthorizationToken';

export function userLoginRequest(userData) {
  return dispatch => {
    return axios.post('/api/users/returninguser', userData); 
  }
}