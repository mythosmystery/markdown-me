import React, { ButtonHTMLAttributes } from 'react';
import { ToggleTheme } from './ToggleTheme';
import { Round } from './Round';
import { motion } from 'framer-motion';
import { transition } from '../../constants';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
   return (
      <motion.div
         whileHover={{ scale: 1.15 }}
         whileTap={{ scale: 1.5 }}
         animate={{ scale: 1, opacity: 1, transition }}
         initial={{ scale: 0 }}>
         <button
            {...props}
            className={
               'dark:bg-gray-700 dark:text-white p-2 border dark:border-none bg-gray-200 shadow-md dark:hover:bg-gray-600 hover:bg-gray-400 hover:text-green-400 dark:hover:text-green-600 ' +
               props.className
            }>
            {props.children}
         </button>
      </motion.div>
   );
};
export default Object.assign(Button, { ToggleTheme, Round });
