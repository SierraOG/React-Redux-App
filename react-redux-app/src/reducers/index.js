import {
    FETCH_LAUNCH_START,
    FETCH_LAUNCH_SUCCESS,
    FETCH_LAUNCH_FAIL,
    SET_DATE_RANGE,
  } from '../actions';
  

const initialState = {
    launches: [],
    isLoading: false,
    error: '',
    dateRange: {},
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
    case SET_DATE_RANGE:
        console.log(state)
        return {
            ...state,
            dateRange: action.payload
    }
    default:
      return state;
  }
};