import React from 'react';
import Img from 'gatsby-image';

const StaticArt = props => {
  const {
    bigImage,
    //image,
    materials,
    name,
    size,
    year,
    bigImage: { fluid },
  } = props.data;

  return (
    <div>
      <a href={bigImage.file.url} target="_blank" rel="noopener noreferrer">
        {/* <img src={bigImage.file.url} alt={image.title} /> */}
        <Img fluid={fluid} />
      </a>
      <p>{name}</p>
      <p>{size}</p>
      <p>{materials.materials}</p>
      <p>{year}</p>
    </div>
  );
};

export default StaticArt;
