// src/App.tsx
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>
      <p>API Base URL: {import.meta.env.VITE_API_BASE_URL}</p>
    </div>
  );
};

export default App;
