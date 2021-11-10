import React, { TextareaHTMLAttributes } from 'react';

export const Textarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = props => {
   return (
      <textarea
         {...props}
         className={'bg-transparent h-full w-full p-3 dark:text-gray-400 resize-none ' + props.className}></textarea>
   );
};
