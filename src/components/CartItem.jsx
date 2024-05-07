import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
export const CartItem = ({ order, counter, setCounter }) => {
  const { productName, productImage, productPrice, productDesc } = order;

  return (
    <div className="flex shadow-lg hover:shadow-xl rounded-lg p-5 items-center w-[900px]">
      <img
        className="w-[80px] h-[80px] rounded-2xl"
        src={productImage}
        alt=""
      />
      <div className="mx-5 w-[400px]">
        <p className="font-semibold text-xl">{productName}</p>
        <p className="text-sm text-gray-500">{productDesc}</p>
      </div>
      <div className="border-[#51267D] mr-10 flex overflow-hidden justify-center items-center text-center border-2 rounded-[50px] w-[116px] h-[33px]">
        <button
          onClick={() => setCounter(counter - 1)}
          className="w-1/3 text-sm h-[33px] flex items-center justify-center"
        >
          <FaMinus />
        </button>
        <span className="w-1/3 text-xl h-[33px] font-semibold">{counter}</span>
        <button
          onClick={() => setCounter(counter + 1)}
          className="w-1/3 text-sm h-[33px] flex items-center justify-center"
        >
          <FaPlus />
        </button>
      </div>
      <p className="text-xl font-semibold">{productPrice} so'm</p>
    </div>
  );
};
