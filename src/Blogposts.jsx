import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Blogposts = ({ search, fetchItems, data }) => {
  useEffect(() => {
    fetchItems();
  }, []);

  let newData = data.filter((item) => item.title === search);

  return (
    <div className="posts-div">
      <ul>
        {!search
          ? data.map((item, index) => (
              <div className="post-box" key={index}>
                <Link to={`/${item.id}`} className="big">
                  {item.title}
                </Link>
                <li className="small">{item.date}</li>
                <li>{item.text}</li>
              </div>
            ))
          : newData
          ? newData.map((item, index) => (
              <div className="post-box" key={index}>
                <Link to={`/${item.id}`} className="big">
                  {item.title}
                </Link>
                <li className="small">{item.date}</li>
                <li>{item.text}</li>
              </div>
            ))
          : console.log("noresults")}
      </ul>
    </div>
  );
};

export default Blogposts;
