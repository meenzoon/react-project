import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Previous from './Previous';

describe('Previous UI Component', () => {
    describe('react-test-renderer ', () => {
        let component = null;

        it('renders correctly', () => {
            component = renderer.create(<Previous />);
        });
    
        it('matches snapshot', () => {
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('enzyme - shallow test', () => {
        let component = null;
        it('shallow Next Component', () => {
            component = shallow(<Previous />).html();
        });
        
        it('shallow Previous Component Snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
