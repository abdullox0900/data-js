// Import => React and React-Router-Dom
import { BrowserRouter, Routes, Route, } from "react-router-dom";

// Import => Style Component
import './App.scss';
import ClassNamePage from "./Pages/ClassNamePage/ClassNamePage";
import Home from "./Pages/Home/Home";

// Import Component
import MenuPage from "./Pages/MenuPage/MenuPage";



function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/classname" element={<ClassNamePage />} />
      </Routes>
    </>
  );
}

export default App;
