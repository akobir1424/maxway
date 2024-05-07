import { CartItem } from "../components/CartItem";

export const Cart = ({ orders, counter, setCounter }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-5">Savatcha</h1>

      <div className="flex justify-between">
        <div>
          {orders.map((order) => (
            <CartItem
              counter={counter}
              setCounter={setCounter}
              order={order}
              key={order}
            />
          ))}
        </div>
        <div className="shadow-lg w-[25%] flex flex-col gap-5 rounded-lg p-5 h-[300px]">
          <h2 className="text-xl font-bold">Umumiy</h2>
          <div className="flex justify-between">
            <p className="text-gray-600 font-semibold">Mahsulotlar</p>
            <p className="font-semibold">0 so'm</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 font-semibold">Yetqazib berish</p>
            <p className="font-semibold">0 so'm</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-gray-600 font-semibold">To'lash uchun</p>
            <p className="font-semibold">0 so'm</p>
          </div>
          <button className="bg-[#51267D] p-2 rounded-3xl text-white hover:opacity-90">
            To'lov sahifasiga o'tish
          </button>
        </div>
      </div>
    </>
  );
};
