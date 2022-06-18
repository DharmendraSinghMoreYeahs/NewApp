import {SET_All_NEWS_LIST, SET_NEWS_BY_ID} from './actions/ActionType';

const initialState = {
  newsList: [],
  newsById: {},
};

const rootReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_All_NEWS_LIST:
      state.newsList = payload;
      return {...state, newsList: state.newsList};

    case SET_NEWS_BY_ID:
      state.newsById = payload;
      return {...state, newsById: state.newsById};

    default:
      return state;
  }
};

export default rootReducer;
