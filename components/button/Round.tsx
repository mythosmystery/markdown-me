import { motion } from 'framer-motion';
import React, { ButtonHTMLAttributes } from 'react';
import { transition } from '../../constants';
import Button from './Button';

export const Round: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
   return (
      <motion.div whileTap={{ rotate: 60, transition }}>
         <Button {...props} className={' rounded-full ' + props.className}>
            {props.children}
         </Button>
      </motion.div>
   );
};
