import React from 'react';
import Base from './base';
import StaticArt from './staticArt';

export default props => {
  const { links } = props;

  return (
    <Base
      links={links}
      index={0}
      art={true}
      render={() => (
        <div>
          <StaticArt data={props.art[0].node} />
        </div>
      )}
    />
  );
};
