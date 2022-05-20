import React, { useReducer, createContext } from 'react';

export const ADD = 'add';
export const DELETE = 'delete';
export const CHANGE = 'change';

const initialState = {
  data: [
    {
      'title': 'New book about Rust',
      'amountPln': 100,
    },
    {
      'title': 'Snacks for a football match',
      'amountPln': 20,
    },
    {
      'title': 'Bus ticket',
      'amountPln': 2.55,
    }
  ],
  rate: {
    'EUR': 4.382
  }
}

export const StoreContext = createContext(initialState);

const reducer = (state, action) => {

  switch (action.type) {
    case ADD:
      return {
        ...state,
        data: [
          ...state.data,
          action.data
        ]
      };
    case DELETE:
      return {
        ...state,
        data: action.data
      };
    case CHANGE:
      return {
        ...state,
        rate: {
          'EUR': action.rate,
        }
      };
    default:
      throw new Error();
  }
}

export const StoreContainer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}