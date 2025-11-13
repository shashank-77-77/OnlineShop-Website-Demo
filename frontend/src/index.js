import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>Online Shop Platform</h1>
    <p>Frontend running successfully.</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
