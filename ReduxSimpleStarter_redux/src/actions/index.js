export function selectBook(book){
    // selectBook은 액션 생성자, 액션 반환이 필요하다.
    // 타입 프로퍼티 오브젝트이다.
    // 액션은 두개의 값인데 1. 타입 2. 페이로드
    // 모든 액션은 목적에 따른 타입을 가지고 있어야만 한다.
    
    // 페이로드 : 사용에 있어서 전송되는 데이터를 뜻
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
