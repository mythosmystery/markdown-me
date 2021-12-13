import React from 'react';

export const Layout: React.FC = ({ children }) => {
   return (
      <div className='absolute z-30 w-screen h-full overflow-y-scroll scrollbar-hide'>
         <div className='flex flex-col lg:flex-row gap-6 p-6 justify-center items-center lg:h-screen'>{children}</div>
      </div>
   );
};
