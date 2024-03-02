import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.picture}>
        <img
          src="https://vacationtomaldives.com/wp-content/uploads/maldives-beaches.jpg"
          alt="logo"
        />
      </div>
      <div>ava + discription</div>
      <div>
        my posts
        <div>new post</div>
        <div className={s.posts}>
          <div className={s.item}>post 1</div>
          <div className={s.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
