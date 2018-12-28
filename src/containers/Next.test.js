import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Next from './Next';

describe('Next UI Component', () => {
    describe('react-test-renderer ', () => {
        let component = null;

        it('renders correctly', () => {
            component = renderer.create(<Next />);
        });
    
        it('matches snapshot', () => {
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('enzyme - shallow test', () => {
        let component = null;
        it('shallow Next Component', () => {
            component = shallow(<Next />).html();
        });
        
        it('shallow Next Component Snapshot', () => {
            //expect(true).toEqual(true);
            expect(component).toMatchSnapshot();
        });
    });
});
