import React from 'react';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';

const Skeletons = (props) => {
  const { theme } = useSelector((state) => state.darkMode);
  return (
    <ContentLoader
      speed={2}
      width={272}
      height={500}
      viewBox="0 0 272 500"
      backgroundColor={theme === 'dark' ? '#2B3844' : '#fff'}
      foregroundColor={theme === 'dark' ? '#202C36' : '#ecebeb'}
      {...props}>
      <rect x="0" y="0" rx="6" ry="6" width="272" height="160" />
      <rect x="0" y="184" rx="6" ry="6" width="223" height="26" />
      <rect x="0" y="256" rx="6" ry="6" width="223" height="26" />
      <rect x="0" y="358" rx="6" ry="6" width="223" height="26" />
      <rect x="0" y="306" rx="6" ry="6" width="223" height="26" />
    </ContentLoader>
  );
};

export default Skeletons;
