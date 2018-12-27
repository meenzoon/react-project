import { combineReducers } from 'redux';

import header from './header/header';
import history from './history/history';

// 여러 개의 파일로 분리된 reducer 병합
const reducers = combineReducers({
    header,
    history
});

export default reducers;