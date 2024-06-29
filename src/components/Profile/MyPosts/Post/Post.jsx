import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div>
      <div className={s.item}>
        <img
          src="https://static.independent.co.uk/2022/08/22/15/newFile-2.jpg?width=1200&height=1200&fit=crop"
          alt=""
        />
        post 1
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
