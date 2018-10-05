import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost,deletePost } from '../actions/index';

class PostShow extends Component {

    componentDidMount() {
        //in order to not download twice see network for additional request if if is not here
        if (!this.props.post) {
            //provided by react-router params object contains all wild cards inside a url
            const { id } = this.props.match.params;
            // console.log(this.props.match);

            this.props.fetchPost(id);
        }
    }
    onDeleteClick(){
        const { id } = this.props.match.params;
        this.props.deletePost(id,()=>{
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;
        if (!post) {
            return (<div>
                Loading....
            </div>);
        }
        return (
            <div>
                 {/* {console.log(post)} */}
                <Link to="/">Show all posts</Link>
                <button className='btn btn-danger pull-xs-right' 
                        onClick={this.onDeleteClick.bind(this)}>
                    Delete post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

//take posts from state first argument is app state second arg ownProps this.props===ownProps
function mapStateToProps({ posts }, ownProps) {
    //select just one post not all list of posts
    return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost,deletePost })(PostShow);