import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Post = ({ API_URL, data , fetchItems}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = data.filter((item) => item.id === id);

  useEffect(() => {
    fetchItems();
  }, []);

  let Delete = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE", // Specify the HTTP method
      headers: {
        "Content-Type": "application/json", // Set any required headers
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("deleted");
        } else {
          throw Error;
        }
      })
      .catch((err) => {
        console.error("Error", err);
      });
    console.log(`${API_URL}/${id}`);
    navigate("/");
  };

  return (
    <div>
      {post.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <button
            onClick={() => {
              Delete(id);
            }}
            className="Delete-btn"
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Post;
