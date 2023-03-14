import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default React.memo(function Cards({ moreData, setMore, updateDataFromLocalData, data }) {
  return (
    <InfiniteScroll hasMore={moreData} next={updateDataFromLocalData} dataLength={data.length}>
      <div className="px-[45px] sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 xl:gap-16 ">
        {data.map((el, id) => (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} whileHover={{scale: 0.9}} whileTap={{scale: 1}} className='shadow-md rounded-[5px] overflow-hidden bg-white ease-in-out duration-200 dark:bg-[#2B3844]'>
            <Link
              key={id}
              to={`/countries-app/${el.name}`}
              className="">
              <div className="w-full h-[160px]">
                <img className="h-full w-full object-cover" src={el.flag} alt="" />
              </div>
              <div className="pt-6 px-6 pb-11">
                <h2 className="mb-4 text-lg sm:h-[56px] dark:text-white">{el.name}</h2>
                <p className="font-semibold text-base dark:text-white">
                  Population:{' '}
                  <span className="font-light dark:text-white">
                    {el.population.toLocaleString('en-US')}
                  </span>
                </p>
                <p className="font-semibold text-base dark:text-white">
                  Region: <span className="font-light dark:text-white">{el.region}</span>
                </p>
                <p className="font-semibold text-base dark:text-white">
                  Capital: <span className="font-light dark:text-white">{el.capital}</span>
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </InfiniteScroll>
  );
});
