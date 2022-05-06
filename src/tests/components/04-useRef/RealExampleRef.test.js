import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';

import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Test <RealExampleRef />', () => {

  test('should render correctly', () => {
    const tree = renderer.create(<RealExampleRef />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  test('should show <MultipleCustomHooks />', async () => {
    render(<RealExampleRef />);

    expect(screen.queryByTestId('MultipleCustomHooks')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('RealExampleRefBtn'));
    expect(screen.getByTestId('MultipleCustomHooks')).toBeInTheDocument();
  });

})