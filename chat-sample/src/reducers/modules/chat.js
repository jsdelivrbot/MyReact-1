import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import * as SendBird from '../../actions/SendBirdService';

const initialState = {
    error: '',
    chatInfo: null
}

// 액션 생성자 비동기 처리
export const sendbirdLogin = createAction(SendBird.SENDBIRD_ACCESS, SendBird.sbConnect);

// 리듀서
export default handleActions({
    ...pender({
        type: SendBird.SENDBIRD_ACCESS,
        onSuccess: (state, action) => {
            return {
                ...state,
                chatInfo: action.payload,
            };
        },
    }),
}, initialState)