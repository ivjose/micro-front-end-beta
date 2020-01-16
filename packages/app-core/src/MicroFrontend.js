import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  history: PropTypes.func.isRequired,
};

const MicroFrontend = ({ name, host, history }) => {
  useEffect(() => {
    function fetchMicroFile() {
      const scriptId = `micro-frontend-script-${name}`;

      if (document.getElementById(scriptId)) {
        renderMicroFrontend();
        return;
      }

      fetch(`${host}/asset-manifest.json`)
        .then(res => res.json())
        .then(manifest => {
          const script = document.createElement('script');
          script.id = scriptId;
          script.crossOrigin = '';
          script.src = `${host}${manifest.files['main.js']}`;
          script.onload = renderMicroFrontend;

          document.head.appendChild(script);
        });
    }

    fetchMicroFile();
    return () => {
      window[`unmount${name}`](`${name}-container`);
    };
  }, [name, host]);

  function renderMicroFrontend() {
    window[`render${name}`](`${name}-container`, history);
  }

  return <main id={`${name}-container`} />;
};

MicroFrontend.propTypes = propTypes;

export default MicroFrontend;
