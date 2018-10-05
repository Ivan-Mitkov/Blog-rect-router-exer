import axios from 'axios';

export const FETCH_POSTS='fetch_posts';
export const FETCH_POST='fetch_post';
export const CREATE_POST='create_post';

const ROOT_URL='http://reduxblog.herokuapp.com/api';
const API_KEY='?key=kolio1234';

export function fetchPosts(){
    const request=axios.get(`${ROOT_URL}/posts${API_KEY}`);
    // console.log(request);
    return{
        type:FETCH_POSTS,
        payload:request
       
    }
}

export function createPost(values,callback){
    //add promise for waiting the callback see POST_NEW
    //request is a promise so after it resolve we are calling the callback
    const request=axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
    //inside here we are calling the callback from POST_NEW
        .then(()=>callback());
    // console.log(request);
    return{
        type:CREATE_POST,
        payload:request
       
    }
}

export function fetchPost(id){
    const request=axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return{
        type:FETCH_POST,
        payload:request
    }
}