import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    //console.log('Action received', action);
    switch (action.type){
        case FETCH_WEATHER:

        //push를 사용하지 말고 concat을 사용하여 새 배열로 반환해라.
        //state의 새 버전을 반환하기 위해서
        //push를 사용하면 배열자체를 변경하는 것이지 state를 변경하는 것이 아니다.

        //return state.push(action.payload.data);
        //return state.concat([action.payload.data]);

        //그런데 이를 ES6버전으로 변경하면 다음과 같다.

        return [ action.payload.data, ...state ];
    }
    return state;
}