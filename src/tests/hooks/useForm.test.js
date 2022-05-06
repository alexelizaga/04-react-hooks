import { renderHook, act } from '@testing-library/react-hooks';

import { useForm } from '../../hooks/useForm';

describe('Test useForm', () => {

  const initialForm = {
    name: 'Alex',
    email: 'alex@test.com'
  }

  test('should return default form values', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toBe(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should change form values (name)', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [ , handleInputChange ] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Javi',
        },
      });
    })

    const [ formValue ] = result.current;
    expect(formValue).toEqual({...formValue, name: 'Javi'});
  });

  test('should reset form values', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [ , handleInputChange, reset ] = result.current;

    act(() => {
      handleInputChange({
        target: {name: 'name', value: 'Javi'}
      });
      reset();
    })

    const [ formValue ] = result.current;
    expect(formValue).toBe(initialForm);
  });

});