import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions/index';

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

    render() {
        const { post } = this.props;
        if (!post) {
            return (<div>
                Loading....
            </div>);
        }
        return (
            <div>
                <Link to="/">Show all posts</Link>
                {/* {console.log(post)} */}
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

export default connect(mapStateToProps, { fetchPost })(PostShow);