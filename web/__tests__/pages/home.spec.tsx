import { shallow } from 'enzyme';
import React from 'react';
import Home from '../../src/pages/home';

describe("Home", () => {
    it('renders', () => {
        const wrapper = shallow(<Home />);

        expect(wrapper.exists()).toBe(true);
    });
});
