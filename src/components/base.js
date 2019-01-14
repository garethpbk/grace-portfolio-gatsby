import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Nav from './Nav';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Left = styled.div`
  flex-basis: 20%;

  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  flex-basis: 80%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 50px 0;
`;

const Base = props => {
  const { index, links, art } = props;

  let prevLink = links[index - 1];
  let nextLink = links[index + 1];

  if (!prevLink) prevLink = links[links.length - 1];
  if (!nextLink) nextLink = links[0];

  return (
    <Container>
      <Left>
        <Link to="/">
          <h1>Grace Mae Huddleston</h1>
        </Link>
        <Nav art={art} nextLink={nextLink} prevLink={prevLink} />
      </Left>
      <Right>{props.render()}</Right>
    </Container>
  );
};

export default Base;
