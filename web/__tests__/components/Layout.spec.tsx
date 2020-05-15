import { shallow } from 'enzyme';
import React from 'react';
import Layout from '../../src/components/Layout';

describe("Layout", () => {
    it('renders', () => {
        const wrapper = shallow(<Layout />);

        expect(wrapper.exists()).toBe(true);
    });
});