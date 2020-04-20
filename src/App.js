import React from "react";
import "./App.css";
import Photo from "./components/Photo"

function App() {
  return (
    <div className="App">
      <h1>NASA</h1>
      <p>Photo of the Day</p>
        <div>
          <Photo />
        </div>
    </div>
  );
}

export default App;
