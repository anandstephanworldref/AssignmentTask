import "./App.css";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <Layout>
        <Sidebar />
      </Layout>
    </div>
  );
}

export default App;
