import React from 'react';

const UrlParams = (props) => {
  const { url } = props;

  const indexParams = url.indexOf('?');
  if (indexParams === -1) {
    return <div></div>;
  }

  const paramsString = url.slice(indexParams);
  const paramsArray = paramsString.split('&').map((queryString) => {
    //split by equal
    return queryString.replace(/\?+|&+/g, '').split('=');
  });

  const tableRowRender = (param, index) => {
    return (
      <tr key={index}>
        <td style={{ paddingRight: 20 }}>{param[0]}</td>
        <td>{param[1]}</td>
      </tr>
    );
  };

  return (
    <div>
      <table className="mono-font">
        <tbody>
          {paramsArray.map((param, index) => tableRowRender(param, index))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlParams;
