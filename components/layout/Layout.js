import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import {Global, css} from '@emotion/react';
const Layout = (props) => {
    return ( 
       <>
        <Global 
            styles={css`
                :root {
                    --blue: #528ff5;
                    --grey: ##f0f0f0
                }
                * {
                    font-family: 'Roboto Slab', serif;
                    font-weight: 500;
                }

                html {
                    font-size: 62.5%;
                    box-sizing: border-box;
                }

                *, *:before, *:after{
                    box-sizing: inherit;
                }

                body {
                    font-size: 1.6rem;
                    line-height: 1.5;
                    font-family: 'PT Sans' sans-serif;
                }

                a {
                    text-decoration: none;
                }

                img {
                    max-width: 100%;
                    width: 100%;
                }
            `}
        /> 

        <Head>
            <link 
                href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" 
                rel="stylesheet" 
            />
            <link 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                rel="stylesheet" 
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
                crossorigin="anonymous" 
            />
        </Head>

        <Header />
        
        <main>
            {props.children}
        </main>

        <Footer />

       
       </>
     );
}
 
export default Layout;
