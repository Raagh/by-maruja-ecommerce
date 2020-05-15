import { shallow } from 'enzyme';
import React from 'react';
import NavBar from '../../../src/components/shared/navBar';

describe("NavBar", () => {
    it('renders', () => {
        const wrapper = shallow(<NavBar />);

        expect(wrapper.exists()).toBe(true);
    });

    it('displays the menu, the logo and the bag', () => {
        const wrapper = shallow(<NavBar />);

        expect(wrapper.find('img').length).toEqual(3);
    });
});
