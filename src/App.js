import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Container from './components/layout/Container'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Container />
      </BrowserRouter>
    </div>
  );
}

export default App;
