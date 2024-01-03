import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import store from "./stores/store";
import { Provider } from "react-redux";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import "swiper/css";
import "swiper/css/autoplay";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/globe" element={<App />} />
        </Routes>
      </Router>
      <Footer />
    </Provider>
  </React.StrictMode>
);
