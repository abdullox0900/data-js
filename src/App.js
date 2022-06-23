// Import => React and React-Router-Dom
import { BrowserRouter, Routes, Route, } from "react-router-dom";

// Import => Style Component
import './App.scss';
import ClassNamePage from "./Pages/ClassNamePage/ClassNamePage";

// Import Component
import MenuPage from "./Pages/MenuPage/MenuPage";



function App() {
  return (
    <>
      <Routes>
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/classname" element={<ClassNamePage />} />
      </Routes>
    </>
  );
}

export default App;
