import {
    FETCH_LAUNCH_START,
    FETCH_LAUNCH_SUCCESS,
    FETCH_LAUNCH_FAIL
  } from '../actions';
  

const initialState = {
    launches: [],
    isLoading: false,
    error: '',
};

export const launchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAUNCH_START:
        return {
          ...state,
          isLoading: true,
          error: ''
    };
    case FETCH_LAUNCH_SUCCESS:
        return {
          ...state,
          launches: action.payload,
          isLoading: false,
          error: ''
    };
    case FETCH_LAUNCH_FAIL:
        return {
          ...state,
          error: action.payload
    };
    default:
      return state;
  }
};