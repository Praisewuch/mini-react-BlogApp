import React from "react";
import Blogposts from "./Blogposts";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";
import About from "./about";
import Post from "./Post";
import Posts from "./Posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);
  const API_URL = "http://localhost:3000/posts";

  async function fetchItems() {
    let data = await fetch(API_URL);
    let response = await data.json();
    setData(response);
  }

  return (
    <Router className="app">
      <div className="Header">
        <p>ReactJS Blog</p>
      </div>

      <div className="search-row">
        <Search setSearch={setSearch} />
        <div className="posts">
          <Link className="li1" to="/">
            Home
          </Link>
          <Link className="li2" to="/posts">
            Posts
          </Link>
          <Link className="li3" to="/about">
            About
          </Link>
        </div>
      </div>

      <div className="posts">
        <Routes>
          <Route
            path="/"
            element={
              <Blogposts search={search} fetchItems={fetchItems} data={data} />
            }
          />
          <Route path="/posts" element={<Posts API_URL = {API_URL}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Post  API_URL = {API_URL}  data = {data} fetchItems = {fetchItems}/>} />
        </Routes>
      </div>

      <div className="copy">Copyright &copy; 2024 </div>
    </Router>
  );
};

export default Home;
