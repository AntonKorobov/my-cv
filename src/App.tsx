import './App.scss';
import MainPage from 'pages/MainPage/MainPage';
import Page404 from 'pages/Page404/Page404';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<Page404 />}></Route>
        <Route path="" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}
