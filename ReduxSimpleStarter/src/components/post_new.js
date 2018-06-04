
import React, { Component } from 'react';
// PropTypes 참조시 에러발생해서 주석처리
// import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

    // PropTypes 참조시 에러발생해서 주석처리
    // static contextTypes = {
    //     // 부모의 컴포넌트의 접근하고 싶을 때 선언
    //     router: PropTypes.object
    // };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                // post가 정상적으로 실행되었을 때 경로이동을 하기 위한 로직
                // Link를 쓰지 않고 context 프로퍼티를 통해 router를 실행
                this.context.router.push('/');
            });
    }

    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className={`form-group ${title.touched && title.valid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.valid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.valid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea type="text" className="form-control" />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    // 현재 redux-form이 input에 {...title} 이런식으로 property 전달이 제대로 안되어서
    // 정상기능을 하지 않아 주석처리

    // if (!values.title) {
    //     errors.title = "Enter a userName";
    // }

    // if (!values.categories) {
    //     errors.categories = 'Enter a categories';
    // }

    // if (!values.content) {
    //     errors.content = 'Enter some content';
    // }

    return errors;
}

// connect 함수처럼 쓴다.
// connect 함수는 ( mapStatetoProps, mapDispatchToProps ) 이런식으로 넘긴다.
// 그러나 reduxForm은 ( config, mapStatetoProps, mapDispatchToProps) 이런식의 인자로 넘긴다.
export default reduxForm({
    form: 'PostNewForm',
    fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew)