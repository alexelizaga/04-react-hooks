import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Test todoReducer', () => {

  test('should return default state', () => {
    const state = todoReducer( demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test('should add a TODO', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender Express',
      done: false
    }

    const state = todoReducer( demoTodos, {
      type: 'add',
      payload: newTodo
    });

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

});
