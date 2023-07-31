import { Routes, Route } from 'react-router-dom';

// import Images from 'components/images';
// import Form from 'components/form';
// import Button from 'components/button';
// import ButtonAccordions from 'components/buttonAccordions';
// import CardList from 'components/cardList';
// import Layout from 'components/layer';
// import PlayList from 'components/playList';

import { LoginPage } from 'pages/login';
import HomePage from 'pages/home';
import { ProductListPage } from 'pages/products';

import './App.css';

function App() { // = Home Page
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<ProductListPage />} />
    </Routes>
    // <div className="App">
    //   <Layout
    //     headerTitle="Xin chào, đây là header!"
    //     footerTitle="Xin chào, đây là footer!"
    //   >
    //     <main className="container">
    //       {/* <Button
    //         icon={<i className="fa-brands fa-apple fa-xl" />}
    //         name="Continue with Apple"
    //         classes="bg-black"
    //       /> */}
    //       <CardList title="Nhân viên ưu tú" />
    //     </main>
    //   </Layout>
    // </div>
    // <CardList title="Nhân viên xuất sắc" />
    // <ButtonAccordions />

    // <Form />
  );
}

export default App;
