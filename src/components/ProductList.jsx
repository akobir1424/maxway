import { ProductItem } from "./ProductItem";

export const ProductList = ({ products, onOrder, clicked }) => {
  return (
    <div className="flex flex-wrap gap-8 mt-10">
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onOrder={onOrder}
            clicked={clicked}
          />
        );
      })}
    </div>
  );
};
