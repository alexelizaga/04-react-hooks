import React from 'react'

import './customHooks.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        loading
        ? (
          <div
            data-testid='MultipleCustomHooksLoading'
            className='alert alert-info text-center'
          >
            Loading...
          </div>
        ) : (  
          <figure className='text-end'>
            <blockquote className='blockquote'>
              <p data-testid='MultipleCustomHooksQuote'>{ quote }</p>
            </blockquote>
            <figcaption
              data-testid='MultipleCustomHooksAuthor'
              className='blockquote-footer'
            >
              { author }
            </figcaption>
          </figure>
        )
      }

      <button
        className='btn btn-primary'
        onClick={increment}
      >
        Next quote
      </button>


    </div>
  )
}
