import React, { useState } from 'react';
import UrlExplode from './url-explode';

const Root = () => {
  const [numOfExplodes, setNumOfExplodes] = useState(1);

  const renderUrlExplodes = [];
  for (let i = 0; i < numOfExplodes; i++) {
    renderUrlExplodes.push(<UrlExplode index={i} key={i} />);
  }

  const buttonOnClick = () => {
    setNumOfExplodes(numOfExplodes + 1);
  };

  return (
    <div>
      <div>{renderUrlExplodes}</div>
      <button onClick={buttonOnClick}>+ URL</button>
    </div>
  );
};

export default Root;
