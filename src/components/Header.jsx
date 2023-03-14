import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDarkmode } from '../redux/slice/darkmodeSlice';

export default React.memo(function Header() {
  const [dark, setDark] = useState(window.localStorage.getItem('theme') || 'light');
  const dispatch = useDispatch();
  const toggleDarkmode = (e) => {
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'light');
      setDark('light');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDark('dark');
    }
    dispatch(setDarkmode());
  };

  useEffect(() => {
    if (dark === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="shadow-md relative bg-white dark:bg-[#2B3844] ease-in-out duration-200">
      <div className="container py-6 flex justify-between">
        <h1 className="dark:text-white text-sm sm:text-2xl">Where in the world?</h1>
        <div
          style={{ userSelect: 'none' }}
          onClick={toggleDarkmode}
          className="flex items-center cursor-pointer">
          <svg
            className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] mr-2.5 text-[#111517] dark:fill-white"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill="current"
              d="M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
            />
          </svg>
          <span className="font-semibold text-xs sm:text-base dark:text-white">Dark Mode</span>
        </div>
      </div>
    </header>
  );
});
