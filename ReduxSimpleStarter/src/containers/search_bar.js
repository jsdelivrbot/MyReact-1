import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        //JSX나 DOM에서 이벤트에서 콜백할 때 바인딩을 해줘야함
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        //form이 submit 되는 것을 막기 위해 사용
        event.preventDefault();

        //날씨를 가져오는 부분
        this.props.fetchWeather(this.state.term);
        //검색후 초기화
        this.setState({term: ''});
    }

    render() {
        return (
            // onSubmit을 써서 submit 기능을 막을 건데 div나 다른 태그 안쓰고 form태그를 쓰는 이유는
            // submit되는 경우는 click 혹은 엔터 기타 등등 다양한 경우가 있는데, form태그를 사용하면
            // 다양한 경우를 축소해서 어떻게 폼을 submit 하는지 우려할 필요가 없게 된다.
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                placeholder="Get a five-day forecast in your favorite cities."
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

// 리덕스에 주입하는 부분?
// fetchWeather가 액션 생성자
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

// react와 redux 연결하는 부분
// 첫번째가 null 인 이유 : 리덕스가 스테이트를 유지하고 있지 말고, 컨테이너가 여기에 신경쓸 필요 없다는 것을 의미
export default connect(null, mapDispatchToProps)(SearchBar);


