import { useEffect, useState } from "react";
import Carusel from "../components/Carusel";
import axios from "axios";
import { ProductList } from "../components/ProductList";

export const Main = ({ addToOrders, clicked }) => {
  const [products, setProducts] = useState([]);
  async function fetchProducts() {
    const response = await axios.get(
      "https://6630fdcec92f351c03dbd452.mockapi.io/api/n1/products"
    );
    setProducts(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Carusel />
      <ProductList
        products={products}
        onOrder={addToOrders}
        clicked={clicked}
      />
    </div>
  );
};
