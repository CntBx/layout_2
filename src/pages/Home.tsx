import Elipse from "../photos/Ellipse.png";
import logo_user from "../photos/logo_user.svg";

export const Home = () => (
  <div className="relative">
    <img
      src={Elipse}
      alt="Elipse"
      className="h-[211px] w-[211px] ml-[289px] mt-[95px]"
    />
    <img
      src={logo_user}
      alt="logoUser"
      className="absolute h-[73px] w-[73px] left-[357px] bottom-[67px]"
    />
    <p className="absolute left-[600px] top-0">ФИО:</p>
    <p className="absolute left-[374px] mt-[13px]">фото</p>
  </div>
);
