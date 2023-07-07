import './App.css';
import Layout from './components/layer';

function App() { // = Home Page
  return (
    <div className="App">
      <Layout title="Xin chào, đây là header!" content="xxx">
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
