import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import PetsPage from './pages/PetsPage';
import PetDetailsPage from './pages/PetDetailsPage';
import DeletedPetsPage from './pages/DeletedPetsPage';
import ApiDogsPage from './pages/ApiDogsPage';
import AboutPage from './pages/AboutPage';
import UIKitPage from './pages/UIKitPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="pets" element={<PetsPage />}>
          <Route path="deleted" element={<DeletedPetsPage />} />
          <Route path="api" element={<ApiDogsPage />} />
        </Route>
        <Route path="pet/:id" element={<PetDetailsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="ui-kit" element={<UIKitPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
