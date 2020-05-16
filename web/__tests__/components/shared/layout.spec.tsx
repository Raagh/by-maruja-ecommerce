import { shallow } from 'enzyme';
import React from 'react';
import Layout from '../../../src/components/shared/layout';

describe("Layout component", () => {
    it('should render', () => {
        const wrapper = shallow(<Layout />);

        expect(wrapper.exists()).toBe(true);
    });

    it('should render Child components when passed as a parameter', () => {
        const Child = () =>{return (<div></div>)}

        const wrapper = shallow(<Layout> <Child/> </Layout>);
        expect(wrapper.find(Child)).toHaveLength(1);
      });
});

