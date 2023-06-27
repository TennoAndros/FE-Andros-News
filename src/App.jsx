import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Topics from "./components/Topics";
import Index from "./pages";


function App() {
  return (
    <div className="App">
      <Header />
      <Index />
      <Topics />
      <Footer />
    </div>
  );
}

export default App;
