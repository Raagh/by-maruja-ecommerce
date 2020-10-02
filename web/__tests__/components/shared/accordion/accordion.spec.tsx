import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jest-styled-components';
import Accordion from '../../../../src/components/shared/accordion/accordion';
import AccordionQuestion from '../../../../src/components/shared/accordion/accordion-question';

describe('Accordion component', () => {
  const data = { question: 'Is this testing correctly?', answer: '<AccordionQuestion />Yes, it is.', index: 1 };

  it('should render', () => {
    const wrapper = shallow(<Accordion title={data.question} index={data.index} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render AccordionQuestion component', () => {
    const wrapper = mount(<Accordion title={data.question} index={data.index} />);

    expect(wrapper.find(AccordionQuestion).length).toEqual(1);
  });

  it('should render the answer passed to props', () => {
    const wrapper = shallow(
      <Accordion title={data.question} index={data.index}>
        <p>Yes, it is.</p>
      </Accordion>
    );

    expect(wrapper.text()).toContain(data.answer);
  });

  it('should not display content', () => {
    const wrapper = mount(<Accordion title={data.question} index={data.index} initialHiddenStatus={true} />);

    expect(wrapper.find('div').last()).toHaveStyleRule('display', 'none');
  });

  it('should display content by default', () => {
    const wrapper = mount(<Accordion title={data.question} index={data.index} />);

    expect(wrapper.find('div').last()).toHaveStyleRule('display', 'block');
  });

  it('should not display content after clicking on the question', () => {
    const wrapper = mount(<Accordion title={data.question} index={data.index} />);

    wrapper.find('div').first().simulate('click');

    expect(wrapper.find('div').last()).toHaveStyleRule('display', `none`);
  });
});
