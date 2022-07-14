import { useState } from "react";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";
import "./styles.css";

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Cart cart={cart} />
      <ShoppingList cart={cart} setCart={setCart} />
    </div>
  );
}
