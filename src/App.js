import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [activeTabUrl, setActiveTabUrl] = useState("");

  useEffect(() => {
    /* eslint-disable no-undef */

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      setActiveTabUrl(tabs[0].url);
    });
  }, []);

  return (
    <div>
      <a
        href={"https://yt-dl-server.onrender.com/download?url=" + activeTabUrl}
      >
        <button>DOWNLOAD This Video</button>
      </a>
    </div>
  );
}

export default App;
