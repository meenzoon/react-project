import * as types from '../../actions/ActionTypes';

import header from './header';

describe('header test', () => {
    // SET_HEADER_VISIBILITY
    it('SET_HEADER_VISIBILITY', () => {
        const state = {}
        const action = {
            type: types.SET_HEADER_VISIBILITY,
            visible: false
        }

        const result = header(state, action);

        expect(result).toEqual({
            visible: false
        });
    });
});