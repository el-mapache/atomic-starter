import React from 'react';
import logo from './logo.svg';
import './styles/app.css';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const Badge = styled.p`
  ${tw`flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3`}
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Badge>Looking good friend!</Badge>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
