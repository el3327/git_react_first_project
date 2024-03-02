import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhc_iKcA7GFYcM4ByXfg0I0TJgzI5tckw8ug&usqp=CAU"
        alt="logo"
      />
    </header>
  );
};

export default Header;
