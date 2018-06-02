// 액션 생성자
import { FETCH_POSTS } from '../actions/index';

// all은 포스트의 리스트 목록
// post는 단일 포스트
const INITIAL_STATE = { all:[], post: null}

// 리듀서
// state는 현재 스테이트
// action은 request로 가져온 액션 객체
export default function(state = INITIAL_STATE, action){
    switch(action.type) {
    case FETCH_POSTS:
        return { ...state, all: action.payload.data };

    default:
        return state;
    }
}