import renderer from 'react-test-renderer';

import { HookApp } from '../HookApp';

describe('Test HookApp', () => {

  test('should render <HookApp /> correctly', () => {
    const tree = renderer
      .create(<HookApp />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});