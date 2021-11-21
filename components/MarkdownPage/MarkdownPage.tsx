import React, { useEffect, useState } from 'react';
import { Textarea } from '../Textarea';
import { marked } from 'marked';
import 'highlight.js/styles/atom-one-light.css';
import { motion } from 'framer-motion';
import Button from '../button/Button';
import { FaSave } from 'react-icons/fa';

export const MarkdownPage: React.FC = ({}) => {
   const initialString = `
   # Your markdown here!
   * Full formatting!
   * Syntax highlighting!
   * More!   
   `;

   const [text, setText] = useState('');

   marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: code => {
         const hljs = require('highlight.js');
         return hljs.highlightAuto(code).value;
      },
      langPrefix: 'hljs language-' // highlight.js css expects a top-level 'hljs' class.
   });

   useEffect(() => {
      setText((localStorage.getItem('text') ? localStorage.getItem('text') : initialString) as string);
   }, []);

   return (
      <>
         <motion.div initial={{ x: -500 }} animate={{ x: 0 }} className='h-full w-full lg:w-2/4'>
            <div className='h-[360px] lg:h-full break-words dark:bg-gray-800 shadow-lg bg-gray-200 mt-2'>
               <Textarea
                  onChange={event => setText(event.target.value)}
                  placeholder='Enter your markdown code here...'
                  value={text === initialString ? '' : text}
               ></Textarea>
            </div>
         </motion.div>

         <motion.h1
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            className='border-none my-0 py-0 dark:text-gray-400 lg:hidden'
         >
            Output
         </motion.h1>

         <motion.div initial={{ x: 500 }} animate={{ x: 0 }} className='h-full w-full lg:w-2/4'>
            <div
               className='lg:overflow-y-scroll scrollbar-hide overflow-x-auto lg:overflow-x-auto h-full break-words mt-2 dark:bg-gray-800 shadow-lg bg-gray-200 p-6 dark:text-gray-400'
               dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
            ></div>
         </motion.div>

         <div className='fixed m-2 top-0 left-0 z-50'>
            <Button.Round onClick={() => localStorage.setItem('text', text)}>
               <FaSave size='24' />
            </Button.Round>
         </div>
      </>
   );
};
