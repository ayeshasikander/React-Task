import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header.jsx";
import App from './App.jsx';
import Q3 from './pages/Q3.jsx';
import Hooks from './pages/Hooks.jsx';
import NoteState from './context/notes/NoteState.jsx';
import ContextAPI from './pages/ContextAPI.jsx'
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
