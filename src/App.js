import logo from './logo.svg';
import './App.css';
import Header from './components/layer/header';
import Footer from './components/layer/footer';

function App() { // = Home Page
  return (
    <div className="App">
      <Header />

      <main style={{
        width: "100%",
        height: "500px",
        backgroundColor: "violet",
        }}>
        Hello
      </main>

      <Footer />
    </div>
  );
}

export default App;
