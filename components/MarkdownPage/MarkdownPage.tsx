import React, { useState } from 'react';
import { Textarea } from '../Textarea';
import { marked } from 'marked';
import 'highlight.js/styles/atom-one-light.css';
import { motion } from 'framer-motion';

export const MarkdownPage: React.FC = ({}) => {
   const initialString = `
   # Your markdown here!
   * Full formatting!
   * Syntax highlighting!
   * More!   
   `;
   const [text, setText] = useState(initialString);
   marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: code => {
         const hljs = require('highlight.js');
         return hljs.highlightAuto(code).value;
      },
      langPrefix: 'hljs language-' // highlight.js css expects a top-level 'hljs' class.
   });
   return (
      <>
         <motion.div initial={{ x: -500 }} animate={{ x: 0 }} className='h-full w-full lg:w-2/4'>
            <div className='h-[360px] lg:h-full break-words dark:bg-gray-800 shadow-lg bg-gray-200'>
               <Textarea
                  onChange={event => setText(event.target.value)}
                  placeholder='Enter your markdown code here...'></Textarea>
            </div>
         </motion.div>

         <motion.h1
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            className='border-none my-0 py-0 dark:text-gray-400 lg:hidden'>
            Output
         </motion.h1>

         <motion.div initial={{ x: 500 }} animate={{ x: 0 }} className='h-full w-full lg:w-2/4'>
            <div
               className='lg:overflow-y-scroll overflow-x-auto lg:overflow-x-auto h-full break-words dark:bg-gray-800 shadow-lg bg-gray-200 p-6 dark:text-gray-400'
               dangerouslySetInnerHTML={{ __html: marked.parse(text) }}></div>
         </motion.div>
      </>
   );
};
