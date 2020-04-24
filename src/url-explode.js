import React, { useState } from 'react';
import UrlParams from './url-params';

const UrlExplode = (props) => {
  const { index } = props;
  const [url, setUrl] = useState('');
  const [urlName, setUrlName] = useState(`${index + 1}`);

  const urlChangeHandler = (event) => {
    setUrl(event.target.value);
  };

  const urlNameChangeHandler = (event) => {
    setUrlName(event.target.value);
  };

  const style = {
    width: '90%',
    marginBottom: 20,
  };

  return (
    <div style={{ marginBottom: 40 }}>
      <div>
        Name:
        <input value={urlName} onChange={urlNameChangeHandler} />
      </div>
      <div>
        URL: <input value={url} onChange={urlChangeHandler} style={style} />
      </div>
      <UrlParams url={url} />
    </div>
  );
};

export default UrlExplode;
