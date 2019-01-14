import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Container, Left, Right } from '../components/base';
import Nav from '../components/Nav';

const Gallery = styled.main`
  display: grid;

  grid-template-columns: 1fr;
  grid-gap: 15px;

  padding: 0 50px;

  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Work = data => {
  const allArt = data.data.allContentfulGraceArt.edges;

  const drawArt = arts => {
    return arts.map(art => {
      const {
        node: {
          id,
          image,
          name,
          bigImage: { fluid },
        },
      } = art;
      const slug = name.toLowerCase().replace(/ /g, '-');

      return (
        <Link to={slug} key={slug}>
          {/* <img src={image.file.url} key={id} alt={name} /> */}
          <Img fluid={fluid} />
        </Link>
      );
    });
  };

  return (
    <Layout>
      <Container>
        <Left>
          <Link to="/">
            <h1>Grace Mae Huddleston</h1>
          </Link>
          <Nav />
        </Left>
        <Right>
          <Gallery>{drawArt(allArt)}</Gallery>
        </Right>
      </Container>
    </Layout>
  );
};

export default Work;

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
