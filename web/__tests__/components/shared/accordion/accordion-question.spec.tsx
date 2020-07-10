import { shallow } from 'enzyme';
import React from 'react';
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
});
