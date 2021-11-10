import React from 'react';

interface BodyProps {}

export const Body: React.FC<BodyProps> = ({ children }) => {
   return (
      <div className='absolute z-30 w-screen max-h-screen'>
         <div className='flex p-6 justify-center items-center h-screen'>{children}</div>
      </div>
   );
};
