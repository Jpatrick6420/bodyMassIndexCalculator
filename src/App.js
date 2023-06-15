import React from 'react';
import Heading from "./components/Heading.jsx";
import Form from "./components/Form.jsx";
import Results from "./components/Results.jsx";

function App() {
  return (
    <div className="App">
      <div className="heading-container">
        <Heading />
      </div>
      <div className="form-container">
        <Form />
        <Results />

      </div>
    </div>

  );
}

export default App;
