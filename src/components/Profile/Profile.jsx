import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.picture}>
        <img
          src="https://vacationtomaldives.com/wp-content/uploads/maldives-beaches.jpg"
          alt="picture"
        />
      </div>
      <div>ava + discription</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
