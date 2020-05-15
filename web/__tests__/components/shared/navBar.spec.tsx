import { shallow } from 'enzyme';
import React from 'react';
import NavBar from '../../../src/components/shared/navBar';

describe("NavBar", () => {
    it('renders', () => {
        const wrapper = shallow(<NavBar />);

        expect(wrapper.exists()).toBe(true);
    });
});