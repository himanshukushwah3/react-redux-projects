import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { getNewsSortby, getNewsTopic, getNewsdate, fetchNews } from "../redux";
import Pagination from "./Pagination";

import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

const News = () => {
  const topic = useSelector((state) => state.topic);
  const sortBy = useSelector((state) => state.sortBy);
  const date = useSelector((state) => state.date);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = news.slice(firstPostIndex, lastPostIndex);

  const temp = `${selectedDate.getFullYear()}-${
    selectedDate.getMonth() + 1
  }-${selectedDate.getDate()}`;
  dispatch(getNewsdate(temp));

  const handleChange = (event) => {
    const text = event.target.value;
    dispatch(getNewsTopic(text));
  };

  const handleSelect = (event) => {
    const selected = event.target.value;
    dispatch(getNewsSortby(selected));
  };

  const handleFetchNews = () => {
    dispatch(fetchNews({ topic, date, sortBy }));
  };

  return (
    <div className="wrapper">
      <div className="heading">
        <h3>NEWS APP</h3>
      </div>
      <div className="search-input">
        <div className="left">
          <div className="topic">
            <input
              type="text"
              placeholder="Enter Your Topic..."
              onChange={handleChange}
              value={topic}
            />
          </div>
          <div className="date">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              maxDate={new Date()}
            />
          </div>
          <div className="sortby">
            <select onChange={handleSelect} value={sortBy}>
              <option value="null">----- Sort By -----</option>
              <option value="publishedAt">Published At</option>
              <option value="popularity">Popularity</option>
              <option value="relevancy">Relevancy</option>
            </select>
          </div>
        </div>
        <div className="bot">
          <button className="search-btn" onClick={handleFetchNews}>
            Search
          </button>
        </div>
      </div>
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="all-news">
          {currentPost.map((item) => (
            <div className="news" key={news.indexOf(item)}>
              <div className="news-img">
                <img src={item.urlToImage} alt="No file" />
              </div>
              <div className="news-info">
                <div className="news-heading">
                  <h3 className="news-title">{item.title}</h3>
                  <span className="author"> - By {item.author}</span>
                </div>
                <p className="news-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <Pagination
        totalPosts={news.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default News;
