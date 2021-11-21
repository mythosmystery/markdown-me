import '../styles/globals.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
   return (
      <>
         <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
               name='viewport'
               content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
            />
            <meta name='description' content='Description' />
            <meta name='keywords' content='Keywords' />
            <title>Markdown It!</title>

            <link rel='manifest' href='/manifest.json' />
            <link href='/icon-192x192.png' rel='icon' type='image/png' sizes='32x32' />
            <meta name='theme-color' content='#317EFB' />
         </Head>
         <Component {...pageProps} />
      </>
   );
};

export default MyApp;
