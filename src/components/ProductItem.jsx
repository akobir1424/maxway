export const ProductItem = ({ product, onOrder, clicked }) => {
  return (
    <div className="w-[18rem] shadow-2xl rounded-lg overflow-hidden">
      <img src={product.productImage} alt="" />
      <div className="p-[1rem]">
        <h1 className="font-semibold text-xl pb-2">{product.productName}</h1>
        <p className="points text-sm text-gray-500">{product.productDesc}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg">
            {product.productPrice}{" "}
            <span className="font-thin text-sm">so'm</span>
          </p>
          <button
            onClick={() => onOrder(product)}
            className="mt-2 rounded-3xl border p-2 bg-[#51267D] text-white hover:opacity-90"
          >
            Qo'shish
            {/* {clicked ? "Qo'shildi" : "Qo'shish"} */}
          </button>
        </div>
      </div>
    </div>
  );
};
