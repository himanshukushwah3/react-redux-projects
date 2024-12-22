import axios from "axios";
import {
  GET_NEWS_DATE,
  GET_NEWS_SORTBY,
  GET_NEWS_TOPIC,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
} from "./newsType";

export const getNewsTopic = (topic) => {
  return {
    type: GET_NEWS_TOPIC,
    payload: topic,
  };
};

export const getNewsdate = (date) => {
  return {
    type: GET_NEWS_DATE,
    payload: date,
  };
};

export const getNewsSortby = (sortBy) => {
  return {
    type: GET_NEWS_SORTBY,
    payload: sortBy,
  };
};

export const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};

export const fetchNewsSuccess = (news) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: news,
  };
};

export const fetchNewsFailure = (error) => {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: error,
  };
};

export const fetchNews = ({ topic, date, sortBy }) => {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=" +
    topic +
    "&" +
    "from=" +
    date +
    "&" +
    "sortBy=" +
    sortBy +
    "&" +
    "apiKey=e7171c65d0814643a6ebe269db795100";

  return async (dispatch) => {
    dispatch(fetchNewsRequest());
    try {
      const response = await axios.get(url);
      dispatch(fetchNewsSuccess(response.data.articles));
    } catch (error) {
      dispatch(fetchNewsFailure(error));
    }
  };
};
