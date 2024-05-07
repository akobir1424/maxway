import { Link } from "react-router-dom";
import qrCode from "/qrCode.png";
import { FaTelegramPlane } from "react-icons/fa";
export const Contacts = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Bog'lanish</h1>
      <div className="bg-gray-400 p-5 rounded-lg w-[285px] my-5">
        <img className="w-[100px] rounded-lg" src={qrCode} alt="" />
        <p className="text-white font-bold my-5">
          Telegramda sharh <br />
          qoldiring yoki savol bering
        </p>
        <Link className="flex items-center text-white text-lg hover:underline">
          <FaTelegramPlane /> @maxwaymasterfood_bot
        </Link>
      </div>
      <h1 className="text-xl font-semibold">Yagona aloqa markazi</h1>
      <p className="hover:underline cursor-pointer text-lg">+998712005400</p>
    </div>
  );
};
