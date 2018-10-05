import { FETCH_POSTS, FETCH_POST } from './../actions/index';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
        // console.log(action.payload.data);
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState= {...state};
            // //create new property id with value post
            // newState[post.id]=post;
            // return newState;

            //ES6 we are making key interpolation
            return {...state,[action.payload.data.id]:action.payload.data}
        default:
            return state;
    }

}
