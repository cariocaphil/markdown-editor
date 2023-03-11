import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('Type your text here');

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file && file.name.endsWith('.md')) {
      const reader = new FileReader();
      reader.onload = function(event) {
        setMarkdown(event.target.result);
      };
      reader.readAsText(file);
    }
  }

  return (
    <div className="app">
      <textarea value={markdown} onChange={handleChange} />
      <ReactMarkdown className="preview" children={markdown}></ReactMarkdown>
      <input type="file" onChange={handleFileChange}  />
    </div>
  );
}

export default App;
