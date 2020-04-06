import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
    background-position: top 50% center;
    background-size: cover;
    height: 50vh;
    margin-top: auto 0;


    + * {
        margin-top: 0 auto;
    }
    `;

const TextBox = styled(`div`)`
        background-image: linear-gradient(to top, #c6ffbbdd, 2rem, #c6ffbb00);
        display: flex;
        flex-direction:column;
        height: 100%;
        justify-content: flex-end;
        padding: 0 calc((100vw - 550px) / 2) 2rem;
        width: 100%;

        @media (min-width: calc(550px + 100vw)) {
          padding-left: calc((100vw - 550px) / 2);
          padding-right: calc((100vw - 550px) / 2);
        }
        
        h1 {
            text-shadow: 1px 1px 3px #eeddff66;
            font-size: 2.25rem;
        }
        
        p,
        a{
            color: #222;
            margin-top: 0;
        }
        a {
            margin-top: 0.5rem;
        }
        `;

const Hero = () => {
    const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nicole-geri-mn.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

    return (
            <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
              <TextBox>
                <h1 css={
                  css`
                  color: #ffffff;";
                  `
                }>SpacePenTech Company + Gatsby &hearts;</h1>
                <p>
                  Hello Minnesota! <Link to="/about/">Learn about us &rarr;</Link>
                </p>
              </TextBox>
            </ImageBackground>
        );
    };
        
export default Hero;