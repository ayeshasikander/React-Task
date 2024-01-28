import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import App from './App';
import Q3 from './pages/Q3';
import Hooks from './pages/Hooks';
import NoteState from './Context/notes/NoteState';
import ContextAPI from './pages/ContextAPI'
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <NoteState>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route exact path='/Passing Data Between React Components' element={< Q3 />} />
          <Route exact path='/context-api' element={<ContextAPI />} />
          <Route exact path='/react-hooks' element={<Hooks />} />
        </Routes>
      </BrowserRouter>
    </NoteState>
  </React.StrictMode>,
);
