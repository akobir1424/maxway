import { Link } from "react-router-dom";
import aboutImg from "/about.png";

export const AboutUs = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Kompaniya haqida</h1>
      <img className="w-full rounded-xl my-5" src={aboutImg} alt="" />
      <p className="w-[60%] text-lg">
        Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil etilgan.
        Hozirda kompaniyaning Toshkent shahrida 18 ta filiali mavjud. <br />
        Taomnoma asosan klаb sendvichlari, hot-doglar, burgerlar, lavashlar va
        donarlardan iborat. Bizning ustuvor yo'nalishlarimiz - ingredientlarning
        yangiligi va sifati, qo'shimchalarning xilma-xilligi, arzon narxlar va
        mehmonlarning takliflariga e'tibor. <br />
        Har kuni turli xil odamlar MaxWay-dan buyurtma berishadi. Biz esa
        tashrif buyuruvchilar sonini ham, filiallar sonini ham oshirishga
        harakat qilmoqdamiz. Har bir tayyorlangan taom bilan biz o'ziga xos
        retseptlarning tafsilotlarini aniqlaymiz va sizning sevimli brendingiz
        bo'lishda davom etish uchun narx va sifatning mukammal muvozanatini
        qidiramiz. <br />
        Agar siz kutilmaganda biz tomondan yomon xizmat yoki past sifatli
        pishirilgan taomga duch kelsangiz, bizga{" "}
        <Link
          target="_blank"
          className="text-indigo-500"
          to={"https://t.me/maxwaymasterfood_bot"}
        >
          @maxwaymasterfood_bot
        </Link>
        manziliga murojaat qiling. Biz ijobiy va salbiy fikr-mulohazalarni
        mamnuniyat bilan qabul qilamiz. Mehmonning shikoyati - bu sovg'a, bu
        tufayli bizda o'sish uchun maqsad bo’ladi.
      </p>
    </div>
  );
};
