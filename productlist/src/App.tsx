import { useState } from "react";
import "./App.css";
import ConfirmModal from "./components/confirmModal/ConfirmModal";
import Main from "./components/main/Main";
import { CartProvider } from "./Context/CartContext";

function App() {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="App">
      <CartProvider>
        <Main setModal={setModal} />
        {modal &&  <ConfirmModal setModal={setModal}/> }
        
      </CartProvider>
    </div>
  );
}

export default App;
