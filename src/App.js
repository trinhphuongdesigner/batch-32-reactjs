import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import CartEmployeePage from 'pages/cartEmployee';
import CartManagerPage from 'pages/cartManager';
import HomePage from 'pages/home';
import ImagePage from 'pages/image';
import LoginPage from 'pages/login';
import PlayListPage from 'pages/playList';
import ProductListPage from 'pages/products';
import ProductDetailPage from 'pages/productDetail';
import DemoPage from 'pages/demo';
import TodoPage from 'pages/todo';

import ButtonAccordions from 'components/buttonAccordions';
import Form from 'components/form';
import AuthLayout from 'components/layout/auth';
import RegisterPage from 'pages/register';
import NonAuthLayout from 'components/layout/nonAuth';
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
            <Route path={LOCATION.HOME} element={<NonAuthLayout />} >
              <Route index path={LOCATION.LOGIN} element={<LoginPage />} />
              <Route path={LOCATION.REGISTER} element={<RegisterPage />} />
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route path={LOCATION.HOME} element={<AuthLayout />}>
              <Route index element={<HomePage />} />
              <Route path={LOCATION.IMAGE} element={<ImagePage />} />
              <Route path={LOCATION.PRODUCT} element={<ProductListPage />} />
              <Route path={LOCATION.PRODUCT_DETAIL} element={<ProductDetailPage />} />
              <Route path={LOCATION.PLAY_LIST} element={<PlayListPage />} />
              <Route path={LOCATION.CART_EMPLOYEE} element={<CartEmployeePage />} />
              <Route path={LOCATION.CART_MANAGER} element={<CartManagerPage />} />
              <Route path={LOCATION.BUTTON_ACCORDION} element={<ButtonAccordions />} />
              <Route path={LOCATION.FORM} element={<Form />} />
              <Route path={LOCATION.DEMO} element={<DemoPage />} />
              <Route path={LOCATION.TODO} element={<TodoPage />} />
            </Route>

            <Route index path={LOCATION.LOGIN} element={<LoginPage />} />

            <Route path={LOCATION.REGISTER} element={<RegisterPage />} />

            <Route path="*" element={<NotFoundPage />} />
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
