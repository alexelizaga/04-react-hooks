import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test <TodoApp />', () => {

  Storage.prototype.setItem = jest.fn( ()=>{} );

  test('should render correly', () => {
    const tree = renderer.create( <TodoApp />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should add a ToDo', () => {
    render(<TodoApp />);

    const h1 = screen.getByTestId('TodoAppTitle');
    expect(h1.textContent).toBe('TodoApp (0)');

    expect(localStorage.setItem).toBeCalledTimes(1);
  });

})