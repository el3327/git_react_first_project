import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hey, why nobody love me?" likesCount="15" />
      <Post message="It`s our program!Hey!" likesCount="20" />
      <Post message="Hello! I love you!" likesCount="125" />
      <Post message="Where are you?" likesCount="44" />
      <Post message="Hello!Hello!Hello!" likesCount="325" />
    </div>
  );
};

export default MyPosts;
