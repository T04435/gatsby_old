import SEO from '../seo/seo';
import Header, { IHeaderProps } from '../header/header';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/**
 * Builds header props from prismic query
 */
const getHeaderPropsFromQuery = () => {
  const { allPrismicHeader } = useStaticQuery(headerQuery);
  const header = allPrismicHeader.edges[0].node.data;
  const headerProps: IHeaderProps = {
    logo: header.logo,
    links: [],
  };

  headerProps.links = header.links.map((link: any) => {
    return {
      label: link.label,
      path: link.url.url,
      target: link.url.target,
    };
  });

  return headerProps;
};

const Layout = (props: { children: any }) => {
  const { children } = props;
  return (
    <>
      <SEO />
      <Header {...getHeaderPropsFromQuery()} />
      <main>{children}</main>
    </>
  );
};

const headerQuery = graphql`
  query Header {
    allPrismicHeader {
      edges {
        node {
          id
          data {
            links {
              label
              url {
                link_type
                url
                target
              }
            }
            logo {
              alt
              copyright
              url
            }
          }
        }
      }
    }
  }
`;

export default Layout;
