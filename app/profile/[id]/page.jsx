"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Profile from "@components/Profile";

const OtherProfile = () => {
  const params = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (params.id) {
      fetchPosts();
    }
  }, [params.id]);

  return (
    <Profile
      name={posts[0]?.creator?.username || "User"}
      desc={`Welcome to ${posts[0]?.creator?.username || "this"} profile`}
      data={posts}
    />
  );
};

export default OtherProfile;
