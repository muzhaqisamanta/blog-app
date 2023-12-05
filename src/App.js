import React, { useEffect, useState } from "react";
import "./styles.css";
import ViewedPosts from "./ViewedPosts";

function App() {
  const [posts, setPosts] = useState([]);
  const [viewedPosts, setViewedPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=8")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error", error));
  }, []);

  const showPostBody = (post) => {
    setViewedPosts((prevViewedPosts) => [...prevViewedPosts, post]);
  };

  console.log("Posts from api", posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>
          {viewedPosts.includes(post) ? (
            <p>{post.body}</p>
          ) : (
            <button onClick={() => showPostBody(post)}>Show Body</button>
          )}
        </div>
      ))}
      {viewedPosts.length > 0 && (
        <div>
          <h3>Viewed Posts:</h3>
          <ul>
            {viewedPosts.map((post) => (
              <ViewedPosts post={post} key={post.id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
