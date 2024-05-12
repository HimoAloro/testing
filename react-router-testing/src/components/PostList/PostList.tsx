// - GET

import { useEffect, useState } from "react";
import { Post } from "../Post/Post";
import { PostForm } from "../PostForm/PostForm";

// Utwórz komponent PostList który wyświetla liste komponentów Post.
// Komponent PostList posiada :
// - stan komponentu przechowujacy liste elementów typu Post
// - funkcje asynchroniczna która pobiera liste elementów i ustawia stan
// - odpowiedni useEffect który wywoluje funkcje do pobierania postów podczas
// pierwszego renderu komponentu

type PostItem = {
  id: number;
  title: string;
  body: string;
};

export const PostList = () => {
  const [PostItems, setPostItems] = useState<PostItem[]>([]);

  const GetData = async () => {
    try {
      const result = await fetch("https://dummyjson.com/posts");
      if(!result.ok) throw new Error("Cannot fetch posts!");
      const json = await result.json();
      const { posts } = json;
      setPostItems((prev) => [...prev, ...posts]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
    <ul>
      {PostItems.map((item) => {
        return <Post id={item.id} title={item.title} body={item.body} />;
      })}
    </ul>
    <PostForm setPosts={setPostItems}></PostForm>
    </>
  );
};
