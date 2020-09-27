import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo/seo';

/**
 * App home page
 */
const Home = () => {
  const { home } = useStaticQuery(homeQuery);

  const {
    heroTitle,
    twitterHandle,
    ogDescription,
    ogImage,
    ogTitle,
  } = home.data;
  return (
    <>
      <SEO
        title={ogTitle}
        description={ogDescription}
        image={ogImage.url}
        twitterHandle={twitterHandle}
      />
      <h1>{heroTitle}</h1>
    </>
  );
};

export default Home;

const homeQuery = graphql`
  query Home {
    home: prismicHome {
      data {
        heroTitle: hero_title
        twitterHandle: twitter_handle
        ogDescription: og_description
        ogImage: og_image {
          url
        }
        ogTitle: og_title
      }
    }
  }
`;
