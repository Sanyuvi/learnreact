import logo from "./logo.svg";
import { Content } from "./components/content.js";
import "./App.css";
import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
