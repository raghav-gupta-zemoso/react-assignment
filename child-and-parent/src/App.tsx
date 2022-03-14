import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './components/molecule/Card';
function App() {
  return (
    <div className="App">
      <Card coverImage='Ent' title='Beyond Entrepreneurship' author='Jim Collins and Bill Lazier' timeToRead='13-minute read'/>
    </div>
  );
}

export default App;
