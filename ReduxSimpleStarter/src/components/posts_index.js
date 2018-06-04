import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreator } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {

    // 컴포넌트가 처음 DOM에 렌더링 되자마자 출력되는 메소드
    // 리랜더링 될 때 다시 호출되지 않음.
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                        <span className="pull-xs-right"></span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="posts/new" className="btn btn-primary">Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { posts: state.posts.all };
}

// 아래 함수는 connect의 축약법에 따라 필요 없어짐.
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchPosts}, dispatch);
// }
// export default connect(null, mapDispatchToProps)(PostIndex);

export default connect(mapStateToProps, { fetchPosts })(PostIndex);