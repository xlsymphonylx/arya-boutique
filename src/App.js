import { useState } from "react";
import ServicesGrid from "./components/services/Grid";
import Item from "./components/testimonies/Item";

function App() {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      <ServicesGrid></ServicesGrid>
      <Item />
    </>
  );
}

export default App;
