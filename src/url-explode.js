import React, { useState } from 'react';
import UrlParams from './url-params';

const UrlExplode = () => {
  const [url, setUrl] = useState('');

  const inputChangeHandler = (event) => {
    setUrl(event.target.value);
  };

  const style = {
    width: '90%',
    marginBottom: 20,
    display: 'inline',
  };

  return (
    <div style={{ marginBottom: 40 }}>
      URL: <input value={url} onChange={inputChangeHandler} style={style} />
      <UrlParams url={url} />
    </div>
  );
};

export default UrlExplode;
