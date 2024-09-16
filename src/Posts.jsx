import { useState } from "react";
import database from "../data/posts.json";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Posts = ({ API_URL }) => {
  const navigate = useNavigate();
  let date = new Date();
  const formatted = format(date, "MMM do, EEE , yyyy  HH:mm a");

  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePostChange = (e) => {
    setPost(e.target.value);
  };

  const length = database.posts.length;
 

  async function Submit(e) {
    e.preventDefault();
    const newData = {
      id: database.posts == false ? String(1) : String(Number(database.posts[length - 1].id) + 1),
      date: formatted,
      title: title,
      text: post,
    };

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    navigate("/");
    setPost("");
    setTitle("");
  }

  return (
    <form onSubmit={(e) => Submit(e)}>
      <div className="new-post-box">
        <label>New Post</label>
        <br />
        <label id="title">
          Title:
          <input
            type="text"
            required
            value={title}
            name="title"
            onChange={handleTitleChange}
          />
        </label>
        <label id="post">
          Post:
          <textarea
            cols={45}
            rows={6}
            value={post}
            onChange={handlePostChange}
          />
        </label>
        <button type="submit">Submit</button>
      </div>
      <br></br>
    </form>
  );
};

export default Posts;
