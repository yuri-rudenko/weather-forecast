import React from 'react';
import Left from './Components/Left';
import Right from './Components/Right';
import './style/style.css';
import 'rsuite/dist/rsuite.min.css';

function App() {
  return (
    <div className="App">
      <div className="container main-cont overflow-hidden">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
