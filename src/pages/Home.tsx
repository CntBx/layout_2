import Elipse from "../photos/Ellipse.png";
import logo_user from "../photos/logo_user.svg";

export const Home = () => (
  <div className="relative">
    <img src={Elipse} alt="Elipse" className="h-[211px] w-[211px] " />
    <img
      src={logo_user}
      alt="logoUser"
      className="absolute h-[73px] w-[73px] "
    />
    <p className=" left-[600px]">ФИО:</p>
    <p className=" left-[374px]">фото</p>
  </div>
);
