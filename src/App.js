import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />{" "}
          <Route path="/product/:id" element={<ProductDetails />} />{" "}
        </Routes>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
