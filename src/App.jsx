import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { AboutUs } from "./pages/AboutUs";
import { Branches } from "./pages/Branches";
import { Contacts } from "./pages/Contacts";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/Layout";
import { useState } from "react";

function App() {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("ordersList")) || []
  );
  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(1);
  const addToOrders = (item) => {
    localStorage.setItem("ordersList", JSON.stringify(orders));
    setOrders([...orders, item]);
    setClicked(true);
  };
  console.log(orders);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Main addToOrders={addToOrders} clicked={clicked} />}
          />
          <Route path="about" element={<AboutUs />} />
          <Route path="branches" element={<Branches />} />
          <Route path="contacts" element={<Contacts />} />
          <Route
            path="cart"
            element={
              <Cart orders={orders} counter={counter} setCounter={setCounter} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
