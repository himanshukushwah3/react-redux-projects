import {
  GET_NEWS_DATE,
  GET_NEWS_SORTBY,
  GET_NEWS_TOPIC,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "./newsType";

const initalState = {
  loading: false,
  topic: "",
  date: "",
  sortBy: "",
  news: [],
  error: "",
};

const newsReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_NEWS_TOPIC:
      return {
        ...state,
        topic: action.payload,
      };

    case GET_NEWS_DATE:
      return {
        ...state,
        date: action.payload,
      };

    case GET_NEWS_SORTBY:
      return {
        ...state,
        sortBy: action.payload,
      };

    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload,
        error: "",
      };

    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        news: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default newsReducer;
