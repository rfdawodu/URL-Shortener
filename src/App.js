import React from "react";
import InputUrl from "./components/InputUrl";
import UrlShortener from "./components/UrlShortener";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <InputUrl setInputValue={setInputValue} />
      <UrlShortener inputValue={inputValue} />
    </div>
  );
}

export default App;
