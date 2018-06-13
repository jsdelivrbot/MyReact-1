import * as types from './ActionTypes';

// increment 같은 함수가 액션 생성자
// { type: types.INCREMENT } 객체가 액션
export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

// 다른 액션 생성자들과 달리, 파라미터를 갖고있습니다
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});