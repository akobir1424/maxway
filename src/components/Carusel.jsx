import { Carousel } from "antd";
import banner1 from "/banner1.png";
import banner2 from "/banner2.png";
const contentStyle = {
  margin: 0,
  height: "500px",
  color: "#fff",
  lineHeight: "500px",
  textAlign: "center",
};
const Carusel = () => (
  <>
    <Carousel autoplay arrows infinite={true}>
      <div>
        <img
          className="rounded-[30px]"
          style={contentStyle}
          src={banner1}
          alt=""
        />
      </div>
      <div>
        <img style={contentStyle} src={banner2} alt="" />
      </div>
    </Carousel>
  </>
);
export default Carusel;
