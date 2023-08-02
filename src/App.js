import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import CartEmployeePage from 'pages/cartEmployee';
import CartManagerPage from 'pages/cartManager';
import HomePage from 'pages/home';
import ImagePage from 'pages/image';
import LoginPage from 'pages/login';
import PlayListPage from 'pages/playList';
import ProductListPage from 'pages/products';

import ButtonAccordions from 'components/buttonAccordions';
import Form from 'components/form';
import AuthLayout from 'components/layer/auth';
import RegisterPage from 'pages/register';
import NonAuthLayout from 'components/layer/nonAuth';
import { axiosClient } from 'helper/axiosClient';
import { DEFAULT, LOCATION } from 'constants/index';
import NotFoundPage from 'pages/404';

import './App.css';

function App() { // = Home Page
  const navigate = useNavigate();

  const token = window.localStorage.getItem(DEFAULT.TOKEN);

  useEffect(() => {
    if (token) {
      axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      navigate(LOCATION.LOGIN);
    }
  }, [navigate, token]);

  return (
    <>
      {
        !token ? (
          <Routes>
            <Route path="/" element={<NonAuthLayout />} >
              <Route index path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<HomePage />} />
              <Route path="images" element={<ImagePage />} />
              <Route path="products" element={<ProductListPage />} />
              <Route path="play-list" element={<PlayListPage />} />
              <Route path="cart-employee" element={<CartEmployeePage />} />
              <Route path="cart-manager" element={<CartManagerPage />} />
              <Route path="button-accordion" element={<ButtonAccordions />} />
              <Route path="form" element={<Form />} />
            </Route>
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        )
      }



      {/* <div className="App">
        <AuthLayout
          headerTitle="Xin chào, đây là header!"
        >
          <main className="container">
            Đã đăng nhập
          </main>
        </AuthLayout>

        <NonAuthLayout
          footerTitle="Xin chào, đây là footer!"
        >
          <main className="container">
            Chưa đăng nhập
          </main>
        </NonAuthLayout>
      </div> */}
    </>
  );
}

export default App;
