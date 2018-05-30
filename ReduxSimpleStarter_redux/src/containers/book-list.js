import React , { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList() {
         return this.props.books.map((book) => {
            return (
                <li 
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //여기서 반환되는 것이 무엇이든지 booklist 안의 props로 보여질 것이다.
    return {
        books: state.books
    };
}

//Action Creator는 정확히 누구인가?


//Action Creator는 selectBook
//이 함수로 반환받은 것이 BookList 컨테이너의 props로 연결 될 것
function mapDispatchToProps(dispatch) {
    // selectBook 호출 될 때마다, 결과는 리듀서로 전달되어야 한다.
    // bindActionCreators와 dispatch가 위의 행동을 하기 위한 하는 역할을 맡고 있다.
    
    // bindActionCreators를 통해 반환된 객체가 Action
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// (리듀서)(리액트)를 연결하는 메소드 connect
// 즉, 리듀서와 리액트는 다르다.
// 리듀서는 데이터를 관리하는 부분, 리액트는 뷰를 관리하는 부분
export default connect(mapStateToProps, mapDispatchToProps)(BookList);