import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import Accordion from '../../../../src/components/shared/accordion/accordion';
import AccordionQuestion from '../../../../src/components/shared/accordion/accordion-question';

describe('Accordion component', () => {
  const data = { question: 'Is this testing correctly?', answer: 'Yes, it is.' };

  it('should render', () => {
    const wrapper = shallow(<Accordion question={data.question} answer={data.answer} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render AccordionQuestion component', () => {
    const wrapper = mount(<Accordion question={data.question} answer={data.answer} />);

    expect(wrapper.find(AccordionQuestion).length).toEqual(1);
  });

  it('should render the answer passed to props', () => {
    const wrapper = shallow(<Accordion question={data.question} answer={data.answer} />);

    expect(wrapper.text()).toContain(data.answer);
  });

  it('should not display content by default', () => {
    const wrapper = mount(<Accordion question={data.question} answer={data.answer} />);

    expect(wrapper.find('p').last()).toHaveStyleRule('display', `block`);
  });

  it('should display content after clicking on the question', () => {
    const wrapper = mount(<Accordion question={data.question} answer={data.answer} />);

    wrapper.find('div').first().simulate('click');

    expect(wrapper.find('p').last()).toHaveStyleRule('display', `hidden`);
  });
});
