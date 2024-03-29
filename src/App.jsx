import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Library from "./pages/Library";
import EduNews from "./pages/EduNews";
import Blogs from "./pages/Blogs";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/library" element={<Library />}></Route>
        <Route path="/news" element={<EduNews />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
