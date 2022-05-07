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

  test('should delete a TODO', () => {
    const state = todoReducer( demoTodos, {
      type: 'delete',
      payload: 2
    });

    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[0]]);
  });

  test('should toggle a TODO', () => {
    const state = todoReducer( demoTodos, {
      type: 'toggle',
      payload: 1
    });

    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });

});
