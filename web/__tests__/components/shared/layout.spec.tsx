import { shallow, mount } from 'enzyme';
import React from 'react';
import Layout from '../../../src/components/shared/layout';
import NavBar from '../../../src/components/shared/navbar';
import Footer from '../../../src/components/shared/footer/footer';
import { mock as categoriesMock } from '../../../__mocks__/categories-configuration.mock';

describe('Layout component', () => {
  it('should render', () => {
    const wrapper = shallow(<Layout categories={categoriesMock} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render Child components when passed as a parameter', () => {
    const Child = () => {
      return <div />;
    };

    const wrapper = shallow(
      <Layout categories={categoriesMock}>
        {' '}
        <Child />{' '}
      </Layout>
    );
    expect(wrapper.find(Child)).toHaveLength(1);
  });

  it('should render NavBar component', () => {
    const wrapper = mount(<Layout categories={categoriesMock} />);

    expect(wrapper.find(NavBar).length).toBe(1);
  });

  it('should render NavBar component', () => {
    const wrapper = mount(<Layout categories={categoriesMock} />);

    expect(wrapper.find(Footer).length).toBe(1);
  });
});
