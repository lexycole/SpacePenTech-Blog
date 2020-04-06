import React from 'react'
import {Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
   
    const { title,  description } = useSiteMetadata();
    return (
   <>
    <Global 
    styles={css `
    * {
        box-sizing: border-box;
        margin:0;
    }

    html,
    body{
        margin: 0;
        padding:0;
        color: #555;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, san-serif;
        font-size: 18px;
        line-height: 1.4;
    }
    > div {
        margin-top:0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
        color: #222;
        line-height: 1.1;
    
        + * {
            margin-top: 0.5rem;
        }
    }
    strong{
        color:  #222;
    }
    li {
        margin-top: 0.25rem;
    }
    `} 
    />
    <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    </Helmet>
    <Header />
    <main css={css `
        margin: 2rem auto 4rem;
        max-width:100%;
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
    `}>
        {children }</main>
    </>
);}

export default Layout;