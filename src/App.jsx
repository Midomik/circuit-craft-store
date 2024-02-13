import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { ProductPage } from 'pages/ProductPage/ProductPage';
export const App = () => {
  return (
    <div className={css.main_container}>
      {
        <SharedLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </SharedLayout>
      }
    </div>
  );
};
