import React from 'react';
import Header from './header';
import Footer from './footer';

function Layout(props) {

  console.log('««««« props »»»»»', props);
  // const children = props.children; 
  // const title = props.title;
  // const content = props.content;
  // const { children, title, content } = props;
  // = const { children } = props;
  // const content = props.children;
  // const { children: content } = props;
  const { children, ...data } = props;

  return (
    // <React.Fragment>
    //   <Header />
    //   <Footer />
    // </React.Fragment>
    <>
      <Header data={data} />
        {children}
      <Footer />
    </>
  );
}

export default Layout;