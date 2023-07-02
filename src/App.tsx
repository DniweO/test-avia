import React from 'react';
import './App.scss';
import { MainPage } from './pages/main';

export const App: React.FC = () => {
  return (
    <div className="app">
      <MainPage />
    </div>
  );
};
