import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test <TodoList />', () => {

  const props = {
    todos: demoTodos,
    handleToggle: jest.fn(),
    handleDelete: jest.fn(),
  }

  test('should render correctly', () => {
    const tree = renderer.create(<TodoList {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should have two <TodoListItem />', () => {
    render(<TodoList {...props} />);

    const todoListItem = screen.getAllByTestId('TodoListItem');
    expect(todoListItem.length).toBe(demoTodos.length);
  })

});