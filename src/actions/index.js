import * as types from './ActionTypes';

export const setHeaderVisibility = (visible) => ({
    type: types.SET_HEADER_VISIBILITY,
    visible
});