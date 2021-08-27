import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions'

const initialState = {
    isFetching: false,
    error: '',
    users: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case(FETCH_START):
        return({
          ...state,
          isFetching: true,
          error: ''
        });
      case(FETCH_SUCCESS):
        return({
          ...state,
          users: action.payload,
          isFetching: false
        });
      case(FETCH_FAIL):
        return({
          ...state,
          error: action.payload,
          isFetching: false
        })
      default:
        return state;
    }
  };

  export default reducer;