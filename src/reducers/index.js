import * as types from '../actions/ActionTypes';

const initialState = {
    header: {
        visible: true
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_HEADER_VISIBILITY:
            return {
                ...state,
                header: {
                    ...state.header,
                    visible: action.visible
                }
            };
        default:
            return state;
    }
}
