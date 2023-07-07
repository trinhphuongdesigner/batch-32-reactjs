import './App.css';
import Layout from './components/layer';

function App() { // = Home Page
  return (
    <div className="App">
      <Layout
        headerTitle="Xin chào, đây là header!"
        footerTitle="Xin chào, đây là footer!"
      >
        <main style={{
          width: "100%",
          height: "500px",
          backgroundColor: "violet",
        }}>
          Main content
        </main>
      </Layout>
    </div>
  );
}

export default App;
