
import React from 'react';
import { render, shallow } from 'enzyme';
import TodoList from './index';
import renderer from "react-test-renderer"


const props = {
  list: ['first', 'second'],
  deleteTodo: jest.fn(),
};

const setup = () => {
  const wrapper = shallow(<TodoList {...props} />);
  return {
    props,
    wrapper,
  };
};

const setupByRender = () => {
  const wrapper = render(<TodoList {...props} />);
  return {
    props,
    wrapper,
  };
};

const setupByMount = () => {
  const wrapper = mount(<TodoList {...props} />);
  return {
    props,
    wrapper,
  };
};


it('renders correctly', () => {
  setup();
  console.log(TodoList, 22);
  const tree = renderer.create(<TodoList {...props} />)
          .toJSON();

  expect(tree).toMatchSnapshot();
});
