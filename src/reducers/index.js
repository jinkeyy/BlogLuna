import { combineReducers } from 'redux';
import reducersPost from './reducersPost';
import token from "./token"
export default combineReducers({
    posts: reducersPost,
    token: token
});
