import React, { useState } from 'react';
import { Textarea } from '../Textarea';
import { marked } from 'marked';
import 'highlight.js/styles/atom-one-light.css';

export const MarkdownPage: React.FC = ({}) => {
   const [text, setText] = useState('');
   marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code, lang) {
         const hljs = require('highlight.js');
         const language = hljs.getLanguage(lang) ? lang : 'javascript';
         return hljs.highlight(code, { language }).value;
      },
      langPrefix: 'hljs language-' // highlight.js css expects a top-level 'hljs' class.
   });
   return (
      <>
         <div className='w-full lg:w-2/4 h-[360px] lg:h-full break-words dark:bg-gray-800 shadow-lg bg-gray-200'>
            <Textarea onChange={event => setText(event.target.value)}></Textarea>
         </div>
         <div
            className='lg:overflow-y-scroll overflow-x-scroll lg:overflow-x-auto w-full lg:w-2/4 h-full break-words dark:bg-gray-800 shadow-lg bg-gray-200 p-6 dark:text-gray-400'
            dangerouslySetInnerHTML={{ __html: marked.parse(text) }}></div>
      </>
   );
};
