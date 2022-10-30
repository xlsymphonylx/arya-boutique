import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimony from "./pages/Testimony";

function App() {
  return (
    <>
      <Routes>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/testimonies" element={<Testimony></Testimony>}></Route>
        <Route path="/contact" element={<About></About>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
