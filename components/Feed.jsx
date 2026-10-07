"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
      setAllPosts(data);
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;

    setSearchText(value);

    const searchResult = allPosts.filter((post) => {
      const search = value.toLowerCase();

      return (
        post.prompt.toLowerCase().includes(search) ||
        post.tag.toLowerCase().includes(search) ||
        post.creator.username.toLowerCase().includes(search)
      );
    });

    setPosts(searchResult);
  };

  const handleTagClick = (tag) => {
    const searchResult = allPosts.filter(
      (post) => post.tag === tag
    );

    setPosts(searchResult);
    setSearchText(tag);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
