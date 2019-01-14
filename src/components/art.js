import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from './layout';
import Base from './base';

const ArtWrapper = styled.div`
  width: 75%;
`;

const ArtImg = styled(Img)`
  width: 100%;
`;

const Art = props => {
  const {
    bigImage,
    bigImage: { fluid },
    image,
    materials,
    name,
    size,
    year,
  } = props.pageContext.edge.node;
  const { index, links } = props.pageContext;

  return (
    <Layout>
      <Base
        links={links}
        index={index}
        art={true}
        render={() => (
          <ArtWrapper>
            <a
              href={bigImage.file.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArtImg fluid={fluid} />
            </a>
            <p>{name}</p>
            <p>{size}</p>
            <p>{materials.materials}</p>
            <p>{year}</p>
          </ArtWrapper>
        )}
      />
    </Layout>
  );
};

export default Art;
