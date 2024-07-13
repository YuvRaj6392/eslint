import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const obj = {
    name: 'yuvraj',
    age: 12,
    email: 'yuvraj@gmail.com',
  };

  const { name, age, email } = obj;

  return (
    <div>
      <div>
        {name}
        {age}
        {email}
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          count is
          {' '}
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

// yarn add eslint-config-airbnb eslint-config-airbnb-typescript
// eslint-plugin-jsx-a11y eslint-plugin-react
// eslint-plugin-import  @typescript-eslint/eslint-plugin
// write the above 3 lines together
