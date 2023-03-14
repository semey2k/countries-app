import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCountry } from '../redux/slice/dataSlice';
import { motion } from 'framer-motion';

const Country = () => {
  const { country } = useParams();
  const data = useSelector((state) => state.countries.countries);
  const status = useSelector((state) => state.countries.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry(country));
  }, []);

  const isLoading = status === 'loading';

  return (
    <div className="container">
      <Link
        to={'/countries-app/'}
        className="ml-[18px] md:ml-0 mt-[40px] md:mt-[80px] py-[10px] hover:bg-[#ffffff23] ease-in-out duration-200 dark:hover:bg-[#2b384480] px-[24px] md:px-[32px] bg-white shadow-md dark:bg-[#2B3844] dark:text-white rounded-md cursor-pointer inline-flex items-center text-base text-[#111517
] font-normal">
        <span>
          <svg
            className="ease-in-out duration-200 mr-[10px] stroke-[#111517] dark:stroke-white"
            width="20px"
            height="20px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="current">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 12L20 12"
                stroke="current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
              <path
                d="M10 6L4.0625 11.9375V11.9375C4.02798 11.972 4.02798 12.028 4.0625 12.0625V12.0625L10 18"
                stroke="current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
            </g>
          </svg>
        </span>
        Back
      </Link>
      {!isLoading && (
        <div className="px-[18px] md:px-0 grid grid-cols-1 md:grid-cols-2 gap-x-[60px] lg:gap-x-[120px] items-center pt-[80px] pb-[60px]">
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="max-h-[401px] shadow-lg rounded-md overflow-hidden">
            <img className="max-h-[401px] w-full " src={data[0]?.flag} alt="" />
          </motion.div>
          <div>
            <h1 className="ease-in-out duration-200 dark:text-white mt-[44px] md:mt-0 text-[22px] md:text-[32px] leading-[44px] mb-[16px] md:mb-[23px]">
              {data[0]?.name}
            </h1>
            <div className="grid grid-cols-1 gap-y-[32px] md:gap-y-0 md:grid-cols-2 gap-x-[10px] lg:gap-x-0">
              <div>
                <p className="pb-2 md:pb-0 ease-in-out duration-200 dark:text-white font-semibold text-sm lg:text-base">
                  Native Name:{' '}
                  <span className="ease-in-out duration-200 font-light dark:text-white">
                    {data[0]?.nativeName}
                  </span>
                </p>
                <p className="pb-2 md:pb-0 ease-in-out duration-200 dark:text-white font-semibold text-sm lg:text-base">
                  Population:{' '}
                  <span className="ease-in-out duration-200 dark:text-white font-light">
                    {data[0]?.population?.toLocaleString('en-US')}
                  </span>
                </p>
                <p className="pb-2 md:pb-0 ease-in-out duration-200 dark:text-white font-semibold text-sm lg:text-base">
                  Region:{' '}
                  <span className="ease-in-out duration-200 dark:text-white font-light">
                    {data[0]?.region}
                  </span>
                </p>
                <p className="pb-2 md:pb-0 ease-in-out duration-200 dark:text-white font-semibold text-sm lg:text-base">
                  Sub Region:{' '}
                  <span className="ease-in-out duration-200 dark:text-white font-light">
                    {data[0]?.subregion}
                  </span>
                </p>
                <p className="pb-2 md:pb-0 ease-in-out duration-200 dark:text-white font-semibold text-sm lg:text-base">
                  Capital:{' '}
                  <span className="ease-in-out duration-200 dark:text-white font-light">
                    {data[0]?.capital}
                  </span>
                </p>
              </div>
              <div>
                <p className="pb-2 md:pb-0 ease-in-out duration-200 dark:text-white font-semibold text-sm lg:text-base">
                  Top Level Domain:{' '}
                  <span className="ease-in-out duration-200 dark:text-white font-light">
                    {data[0]?.topLevelDomain}
                  </span>
                </p>
                <p className="pb-2 md:pb-0 ease-in-out duration-200 dark:text-white font-semibold text-sm lg:text-base">
                  Currencies:{' '}
                  <span className="ease-in-out duration-200 dark:text-white font-light">
                    {data[0]?.currencies[0]?.name}
                  </span>
                </p>
                <p className="pb-2 md:pb-0 ease-in-out duration-200 dark:text-white font-semibold text-sm lg:text-base">
                  Languages:{' '}
                  <span className="ease-in-out duration-200 dark:text-white font-light">
                    {data[0]?.languages?.map((el) => el.name).join(', ')}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
