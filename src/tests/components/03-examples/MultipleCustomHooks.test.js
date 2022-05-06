import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Test MultipleCustomHooks', () => {

  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {}
    });
  });

  test('should render correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });

    const tree = renderer
      .create(<MultipleCustomHooks />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should show information', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Alex',
        quote: 'Hola mundo'
      }],
      loading: false,
      error: null
    });

    render(<MultipleCustomHooks />);

    const loading = screen.queryByTestId('MultipleCustomHooksLoading');
    expect(loading).not.toBeInTheDocument();

    const quote = screen.queryByTestId('MultipleCustomHooksQuote');
    expect(quote.textContent.trim()).toBe('Hola mundo');

    const author = screen.queryByTestId('MultipleCustomHooksAuthor');
    expect(author.textContent.trim()).toBe('Alex');

  });

});