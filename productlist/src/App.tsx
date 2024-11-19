import "./App.css";
import Main from "./components/main/Main";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Main />
      </CartProvider>
    </div>
  );
}

export default App;
