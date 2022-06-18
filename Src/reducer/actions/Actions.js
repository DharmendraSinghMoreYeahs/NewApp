import {SET_All_NEWS_LIST, SET_NEWS_BY_ID} from './ActionType';

export const setNewsList = data => {
  if (data) {
    return {type: SET_All_NEWS_LIST, payload: data};
  }
};

export const setNewsById = data => {
  if (data) {
    return {type: SET_NEWS_BY_ID, payload: data};
  }
};
