import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {

    // 역시 PropTypes를 가져올 때 에러가 나서 주석처리
    // static contextTypes = {
    //     router: PropTypes.object
    // }

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        console.log(this.props);
        this.props.deletePost(this.props.params.id)
            .then(() => {
                this.context.router.push('/');
            })
    }

    render() {
        const { post } = this.props;

        if(!this.props.post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/">back to index</Link>
                <button 
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
        
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post}
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);