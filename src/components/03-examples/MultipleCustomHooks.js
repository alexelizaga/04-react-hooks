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
          <div className='alert alert-info text-center'>
            Loading...
          </div>
        ) : (  
          <figure className='text-end'>
            <blockquote className='blockquote'>
              <p>{ quote }</p>
            </blockquote>
            <figcaption className='blockquote-footer'>
              { author }
            </figcaption>
          </figure>
        )
      }

      <button
        className='btn btn-primary'
        onClick={increment}
      >
        Next guote
      </button>


    </div>
  )
}
