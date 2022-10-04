import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimony from "./pages/Testimony";

function App() {
  return (
    <>
      <Routes>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/testimonies" element={<Testimony></Testimony>}></Route>
        <Route path="/" element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;
