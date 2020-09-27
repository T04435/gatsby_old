import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';

interface ISEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  twitterHandle?: string;
}

const SEO = (props: ISEOProps) => {
  const { title, description, image, article, twitterHandle } = props;
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    siteName,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultTwitterHandle,
  } = site.siteMetadata;
  const seo = {
    title,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname}`,
    twitterHandle: twitterHandle || defaultTwitterHandle,
  };
  return (
    <Helmet title={seo.title} titleTemplate={`%s | ${siteName}`}>
      {seo.title && <title>{seo.title}</title>}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {article && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary" />
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultDescription: description
        defaultImage: image
        siteUrl
        siteName
        defaultTwitterHandle: twitterHandle
      }
    }
  }
`;
