import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { LoginScreen } from '../../../../components/09-useContext/screens/LoginScreen';
import { UserContext } from '../../../../components/09-useContext/context/UserContext';

describe('Test <LoginScreen/>', () => {

  const user = {
    name: 'Alex',
    email: 'alex@test.com'
  }

  const setUser = jest.fn();

  test('should render correctly', () => {
    const tree = renderer.create(
      <UserContext.Provider value={{
          user,
          setUser
      }}>
        <LoginScreen/>
      </UserContext.Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should run setUser', () => {
    render(
      <UserContext.Provider value={{
        user,
        setUser
      }}>
        <LoginScreen/>
      </UserContext.Provider>
    );
    const btn = screen.getByTestId('LoginScreenBtn');
    fireEvent.click(btn);
    expect(setUser).toBeCalledWith({
      id: 123,
      name: 'Alex'
    });

  });

})