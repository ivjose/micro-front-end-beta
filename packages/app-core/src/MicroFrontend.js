import React, { useEffect } from "react";

export const MicroFrontend = ({ name, host, history, document, window }) => {
  useEffect(() => {
    function fetchMicroFile() {
      console.log("DDDDDDDDD host", host);

      const scriptId = `micro-frontend-script-${name}`;

      if (document.getElementById(scriptId)) {
        renderMicroFrontend();
        return;
      }

      fetch(`${host}/asset-manifest.json`)
        .then(res => res.json())
        .then(manifest => {
          const script = document.createElement("script");
          script.id = scriptId;
          script.crossOrigin = "";
          script.src = `${host}${manifest.files["main.js"]}`;
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

MicroFrontend.defaultProps = {
  document,
  window
};

export default MicroFrontend;
