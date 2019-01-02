import header from './header';

describe('header test', () => {
    // SET HEADER VISIBILITY
    it('SET HEADER VISIBILITY', () => {
        const state = {};
        const action = {
            type: 'SET_HEADER_VISIBILITY',
            visible: false
        };

        const result = header(state, action);

        expect(result).toEqual({
            visible: false
        });
    });
})
