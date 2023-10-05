import React from "react";
import CurrentLocation from "./currentLocation";
import "./weather.css";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

function App() {
  return (
    <div className="container" style={{ height: "467px", maxWidth: "fit-content" }}>
      <CurrentLocation />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

export default App;
