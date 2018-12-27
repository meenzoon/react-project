import * as types from '../../actions/ActionTypes';

// store value
const initialState = {
    visible: true
};

const header = (state = initialState, action) => {
    switch (action.type) {
        // Header 페이지 표시 여부 관련 데이터 변경 함수
        case types.SET_HEADER_VISIBILITY:
            return {
                ...state,
                visible: action.value
            };
        default:
            return state;
    }
};

export default header;