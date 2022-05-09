import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/context/UserContext';

describe('Test <AppRouter />', () => {

  const user = {
    id: 1,
    name: 'Alex'
  }

  test('should render correctly', () => {
    const tree = renderer.create(
      <UserContext.Provider value={{
        user
      }}>
        <AppRouter />
      </UserContext.Provider>
      
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});