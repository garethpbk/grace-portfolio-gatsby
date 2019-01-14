import React from 'react';
import { graphql } from 'gatsby';
import 'typeface-raleway';
import 'typeface-lato';

import Layout from '../components/layout';
import Home from '../components/home';

const IndexPage = data => {
  const art = data.data.allContentfulGraceArt.edges;
  const links = [];
  art.map(uno => {
    return links.push(uno.node.name.toLowerCase().replace(/ /g, '-'));
  });

  return (
    <Layout>
      <Home art={art} links={links} />
    </Layout>
  );
};

export default IndexPage;

export const ALL_ART = graphql`
  query {
    allContentfulGraceArt {
      edges {
        node {
          id
          name
          year
          size
          materials {
            materials
          }
          image {
            title
            file {
              url
            }
          }
          bigImage {
            title
            file {
              url
            }
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
