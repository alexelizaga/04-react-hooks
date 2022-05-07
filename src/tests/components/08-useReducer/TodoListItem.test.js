import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test <TodoListItem />', () => {

  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const props = {
    index: 0,
    todo: demoTodos[0],
    handleToggle,
    handleDelete,
  }
  

  test('should render correctly', () => {
    const tree = renderer.create(<TodoListItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should call handleDelete', () => {
    render(<TodoListItem {...props} />);

    const btn = screen.getByTestId('TodoListItemBtn');
    fireEvent.click(btn);

    expect(handleDelete).toHaveBeenCalledWith(props.todo.id);
  });

  test('should show ToDo desc', () => {
    render(<TodoListItem {...props} />);

    const p = screen.getByTestId('TodoListItemDesc');

    expect(p.textContent.trim()).toBe(`${props.index + 1}. ${props.todo.desc}`);
  });

  test('should have complete className', () => {
    props.todo.done = true;
    render(<TodoListItem {...props} />);

    const p = screen.getByTestId('TodoListItemDesc');

    expect(p.className.includes('complete')).toBe(true);
  });

});