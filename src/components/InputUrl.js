import React, { useState } from "react";

function InputUrl({ setInputValue }) {
  const [url, setUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(url);
    setUrl("");
  };

  return (
    <div className="container">
      <h1>Link shortener</h1>
      <div className="url-short">
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Enter Url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button>Shorten</button>
        </form>
      </div>
    </div>
  );
}

export default InputUrl;
