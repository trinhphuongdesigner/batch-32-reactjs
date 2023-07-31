// import Images from 'components/images';
// import Form from 'components/form';
// import Button from 'components/button';
// import ButtonAccordions from 'components/buttonAccordions';
// import CardList from 'components/cardList';
// import Layout from 'components/layer';
// import PlayList from 'components/playList';
import LoginForm from 'components/form/login';
import ProductList from 'components/product/productList';

import './App.css';

function App() { // = Home Page
  return (
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

    // <PlayList />
    // <Form />
    // <Images />
    <>
      <LoginForm />
      <ProductList />
    </>
  );
}

export default App;
