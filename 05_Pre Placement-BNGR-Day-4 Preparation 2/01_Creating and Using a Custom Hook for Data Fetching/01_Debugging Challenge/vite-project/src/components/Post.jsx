import React, { useState, useEffect } from "react";
import useFetch from "./UseFetch";

function PostsList() {
  const [length, setLength] = useState(0);
  const [current, setCurrent] = useState(1);
  const [limit, setLimit] = useState(0);
  const [slicePosts, setSlicePosts] = useState([]);
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");
  useEffect(() => {
    if (posts) {
      setLength(posts.length);
      let start = (current - 1) * limit;
      let end = start + limit;

      limit === 0
        ? setSlicePosts(posts)
        : setSlicePosts(posts.slice(start, end));
    }
  }, [posts, current, limit]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  function handleChange(event) {
    const newLimit = Number(event.target.value);
    setLimit(newLimit);
  }

  return (
    <>
      <select name="postLimit" id="limit" onChange={handleChange} value={limit}>
        <option value="">Select a limit</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <ul>
        {slicePosts &&
          slicePosts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default PostsList;
