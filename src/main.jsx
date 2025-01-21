import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import PaginaJogo from './pages/PaginaJogo/PaginaJogo.jsx';
import PaginaChefe from './pages/PaginaChefe/PaginaChefe.jsx';
import PaginaDungeons from './pages/PaginaDungeons/PaginaDungeons.jsx';
import Pagina404 from './pages/Pagina404/Pagina404.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaJogo />} />
        <Route path="/chefes" element={<PaginaChefe />} />
        <Route path="/dungeons" element={<PaginaDungeons />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
