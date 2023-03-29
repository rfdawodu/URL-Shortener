import React, { useState, useEffect } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

const UrlShortener = ({ inputValue }) => {
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [copied, setCopied] = useState(false);
  console.log(inputValue);

  const shortenUrl = async () => {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenedUrl(response.data.result.full_short_link);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      shortenUrl();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="shortener">
      <p>{shortenedUrl}</p>

      <div>
        <CopyToClipboard
          text={shortenedUrl}
          onCopy={() => setCopied({ copied: true })}
        >
          <button>Copy to clipboard</button>
        </CopyToClipboard>

        {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
      </div>
    </div>
  );
};

export default UrlShortener;
