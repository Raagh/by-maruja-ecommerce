import { shallow } from 'enzyme';
import React from 'react';
import Accordion from '../../../src/components/shared/accordion';

describe('Accordion component', () => {
  const data = { question: 'Is this testing correctly?', answer: 'Yes, it is.' };

  it('should render', () => {
    const wrapper = shallow(<Accordion question={data.question} answer={data.answer} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render the question passed to props', () => {
    const wrapper = shallow(<Accordion question={data.question} answer={data.answer} />);

    expect(wrapper.text()).toContain(data.question);
  });

  it('should render the answer passed to props', () => {
    const wrapper = shallow(<Accordion question={data.question} answer={data.answer} />);

    expect(wrapper.text()).toContain(data.answer);
  });
});
