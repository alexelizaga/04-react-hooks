import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

import { HomeScreen } from '../../../../components/09-useContext/screens/HomeScreen';
import { UserContext } from '../../../../components/09-useContext/context/UserContext';

describe('Test <HomeScreen />', () => {

  const user = {
    name: 'Alex',
    email: 'alex@test.com'
  }

  test('should render correctly', () => {
    const tree = renderer.create(
      <UserContext.Provider value={{
        user
      }}>
        <HomeScreen />
      </UserContext.Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

})