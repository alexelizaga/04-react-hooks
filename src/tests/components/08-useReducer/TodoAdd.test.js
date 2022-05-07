import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Test <TodoAdd />', () => {
  const props = {
    handleAddTodo: jest.fn(),
  }
  test('should render correctly', () => {
    const tree = renderer.create(<TodoAdd {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should not call handleAddTodo', () => {
    render(<TodoAdd {...props} />);

    const formSubmit = screen.getByTestId('TodoAddForm');

    fireEvent.submit(formSubmit);

    expect(props.handleAddTodo).toBeCalledTimes(0);

  });

  test('should call handleAddTodo', () => {
    render(<TodoAdd {...props} />);

    const input = screen.getByTestId('TodoAddInput');
    fireEvent.change(input, {
      target: {
        value: 'Aprende React',
        name: 'description',
      }
    });
    expect(input.getAttribute('value')).toBe('Aprende React');

    const formSubmit = screen.getByTestId('TodoAddForm');
    fireEvent.submit(formSubmit, {});
    expect(props.handleAddTodo).toBeCalledTimes(1);
    expect(props.handleAddTodo).toBeCalledWith(expect.any(Object));
    expect(props.handleAddTodo).toBeCalledWith({
      desc: "Aprende React",
      done: false,
      id: expect.any(Number),
    });
    expect(input.getAttribute('value')).toBe('');

  });


});