import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from '../Layout/Layout';
import HomePage from '@/pages/HomePage/ui/HomePage';
import NotFound from '@/pages/NotFound/ui/NotFound';
import SpellsPage from '@/pages/SpellsPage/ui/SpellsPage';

const Router = (): React.JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="spells" element={<SpellsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
