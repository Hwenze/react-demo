import { createStore } from 'redux';
import methods from './methods';
import state from './state';

// 初始化数据
const data = state;

// 初始化方法
const ActionFnObj = methods;

function reducer(state = data, action) {
    if (action.type.indexOf('redux') === -1) {
        state = ActionFnObj[action.type](state, action)
        return { ...state }
    } else {
        return state
    }
}

const store = createStore(reducer);

export default store