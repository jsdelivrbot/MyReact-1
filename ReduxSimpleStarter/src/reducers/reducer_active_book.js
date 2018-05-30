//리듀서는 state와 action을 가진다.
//리듀서는 action이 일어날 때 호출이 된다.

//스테이트 요소는 어플리케이션 스테이트가 아니고, 오직 스테이트는 리듀서가 권한을 가지고 있다.
export default function(state = null, action) {
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;

        //그리고 리듀서로부터 반환되는 객체는 언제나 원본 오브젝트를 반환해야 한다.
        //밑에는 잘못된 예시
        //state.title = book.title
        //return state
    }

    // action.type이 없을 때에는 state를 기본으로 전달한다.
    // 리덕스는 리듀서가 undeifined를 반환하는 것을 허락하지 않는다. => 에러
    return state;
}

//리듀서는 index.js 안의 conbineReducers 구문으로 연결이 필요하다.
