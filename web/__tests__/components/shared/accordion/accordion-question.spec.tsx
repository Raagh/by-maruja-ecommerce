import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import AccordionQuestion from '../../../../src/components/shared/accordion/accordion-question';

describe('AccordionQuestion component', () => {
  const data = { question: 'Is this testing correctly?', open: true, handleClick: () => (data.open = !data.open) };

  it('should render', () => {
    const wrapper = shallow(<AccordionQuestion question={data.question} open={data.open} handleClick={data.handleClick} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render the question passed to props', () => {
    const wrapper = shallow(<AccordionQuestion question={data.question} open={data.open} handleClick={data.handleClick} />);

    expect(wrapper.text()).toContain(data.question);
  });

  it('should render the chevron normally if open', () => {
    const wrapper = mount(<AccordionQuestion question={data.question} open={data.open} handleClick={data.handleClick} />);

    expect(wrapper.find('img').first()).not.toHaveStyleRule('transform', `scaleY(-1)`);
  });

  it('should render the chevron upside down if closed', () => {
    const wrapper = mount(<AccordionQuestion question={data.question} open={!data.open} handleClick={data.handleClick} />);

    expect(wrapper.find('img').first()).toHaveStyleRule('transform', `scaleY(-1)`);
  });
});
