import React, { Component } from 'react';
import {connect} from 'react-redux';
import{fetchPost} from '../actions/index';

class PostShow extends Component{
    componentDidMount(){
        //provided by react-router params object contains all wild cards inside a url
        const {id}=this.props.match.params.id;
        console.log( this.props.match);

        this.props.fetchPost(id);
    }
    render(){
        return(
            <diV>
                Post Show
            </diV>
        );
    }
} 

//take posts from state first argument is app state second arg ownProps this.props===ownProps
function mapStateToProps({posts},ownProps){
    //select just one post not all list of posts
 return{post:ownProps.match.params.id}
}

export default connect(mapStateToProps,{fetchPost})(PostShow);