import axios from 'axios';
import { Dropdown } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries, fetchSearch, getDataByRegion } from '../redux/slice/dataSlice';
import Skeletons from '../components/Skeleton';
import Cards from '../components/Cards';
const Home = () => {
  const [localData, setLocalData] = useState('');
  const [data, setData] = useState([]);
  const [moreData, setMoreData] = useState(false);
  const [region, setRegion] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchByEnter, setSearchByEnter] = useState('');
  const [searchByClick, setSearchByClick] = useState('');
  const asd = useSelector((state) => state.countries.countries);
  const status = useSelector((state) => state.countries.status);
  const dispatch = useDispatch();

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const itemsPerPage = 8;

  useEffect(() => {
    if (searchByEnter) {
      dispatch(fetchSearch(searchByEnter));
    } else if (!searchByEnter) {
      dispatch(fetchCountries(region));
    }
  }, [region, searchByEnter]);

  useEffect(() => {
    updateDataFromLocalData();
  }, [status, region, searchByEnter]);

  const setMore = () => {
    setMoreData(true);
    updateDataFromLocalData();
  };

  const updateDataFromLocalData = React.useCallback(() => {
    setData(data.concat(asd.slice(data.length, data.length + itemsPerPage)));
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setSearchByEnter(e.target.value);
      setData([]);
      setRegion(null);
    }
  };

  const isLoading = status === 'loading';

  const updateRegion = React.useCallback((ev) => {
    setRegion(ev.target.innerText);
    setSearchByEnter('');
    setData([]);
    setMoreData(false);
    setOpen(false);
  });

  const handleSearch = () => {
    dispatch(fetchSearch(searchByClick));
    setData([]);
    setRegion(null);
  };

  const handleInput = (e) => {
    setSearchByClick(e.target.value);
  };

  const handleDropdown = React.useCallback(() => {
    setOpen(!open);
  });

  return (
    <div className="h-full bg-[#F2F2F2] dark:bg-[#202C36] ease-in-out duration-200 pb-[60px]">
      <div className="container">
        <div className="flex flex-col sm:justify-between py-12 sm:flex-row sm:items-center">
          <div
            style={{ boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.0532439)' }}
            className="relative w-full sm:w-[380px] md:w-[480px]">
            <div className=" absolute z-10 inset-y-0 left-0 flex items-center pl-8">
              <svg
                onClick={handleSearch}
                ariaHidden="true"
                className="cursor-pointer w-5 h-5 text-[#848484] dark:text-white ease-in-out duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              onKeyDown={handleKeyDown}
              onChange={handleInput}
              className="text-sm font-normal block w-full p-4 pl-[74px] text-[#848484] ease-in-out duration-200 dark:text-white placeholder:dark:text-white  rounded-md bg-white dark:bg-[#2B3844] border-none outline-none"
              placeholder="Search for a country..."
            />
          </div>
          <div className="mt-[40px] sm:mt-0 relative w-[200px]">
            <div
              onClick={handleDropdown}
              style={{ boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.0532439)' }}
              className="select-none flex items-center justify-between cursor-pointer py-[18px] pl-6 pr-[18px] ease-in-out duration-200 bg-white dark:bg-[#2B3844] dark:text-white rounded-md text-sm font-normal">
              {region ? region : 'Filter by Region'}
              <svg
                width="12px"
                height="12px"
                className="dark:fill-white ease-in-out duration-200"
                viewBox="-6.5 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <title>dropdown</title>
                <path
                  fill="current"
                  stroke="current"
                  d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
              </svg>
            </div>
            <div
              className={
                (open ? 'opacity-100' : 'opacity-0' && open ? 'visible' : 'hidden') +
                ' absolute left-0 w-full mt-[4px] ease-in-out duration-300 '
              }>
              <ul
                style={{ boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.0532439)' }}
                className="pt-4 pb-2  bg-white ease-in-out duration-200 dark:bg-[#2B3844] rounded-[5px]">
                {regions.map((el, id) => (
                  <li
                    key={id}
                    onClick={el !== region ? updateRegion : undefined}
                    className="font-normal px-6 pb-1 pt-1 ease-in-out duration-200 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer">
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="px-[45px] sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 xl:gap-16 ">
            {[...Array(8)].map((el) => (
              <Skeletons />
            ))}
          </div>
        ) : (
          <Cards
            setMore={setMore}
            moreData={moreData}
            updateDataFromLocalData={updateDataFromLocalData}
            data={data}
          />
        )}
        {data.length >= 8 && !moreData && (
          <div className="flex justify-center" onClick={setMore}>
            <h1 className="cursor-pointer mt-[75px] dark:text-white dark:hover:text-[#ffffff36] text-gray-500 hover:text-[#111517] hover:underline ease-in-out duration-300 col-end-5">
              More countries
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
