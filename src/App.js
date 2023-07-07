import './App.css';
import Button from './components/button';
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
          <Button
            icon={<i class="fa-brands fa-apple fa-xl" />}
            name="Continue with Apple"
            classes="bg-black"
          />
        </main>
      </Layout>
    </div>
  );
}

export default App;
