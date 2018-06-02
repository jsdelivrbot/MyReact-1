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

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="posts/new" className="btn btn-primary">Add a Post</Link>
                </div>
                List of blog posts...
            </div>
        )
    }
}

// 아래 함수는 connect의 축약법에 따라 필요 없어짐.
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchPosts}, dispatch);
// }
// export default connect(null, mapDispatchToProps)(PostIndex);

export default connect(null, { fetchPosts })(PostIndex);