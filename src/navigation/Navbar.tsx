import { NavLink } from "react-router-dom";
import moscow_transport from "../photos/moscow_transport.png";
import moscow_transport2 from "../photos/moscow_transport2.png";
import Rectangle from "../photos/Rectangle.png";

export const Navbar = () => (
  <nav>
    <header className="flex justify-start ml-[200px] gap-10">
      <img
        src={moscow_transport}
        alt="moscow_transport"
        className="mt-[14px] w-[89px] h-[89px]"
      />
      <NavLink className="ml-[128px] mt-[52px] font-Commissioner" to="/">
        Главная
      </NavLink>
      <NavLink className="mt-[52px] font-Commissioner" to="/posts">
        Посты
      </NavLink>
      <NavLink className="mt-[52px] font-Commissioner" to="/users">
        Пользователи
      </NavLink>
    </header>
    <img
      src={Rectangle}
      alt="Rectangle"
      className="absolute mt-[25px] ml-[200px] w-[1520px] h-[675px]"
    />
    <div className="flex flex-row">
      <img
        src={moscow_transport2}
        alt="moscow_transport2"
        className="absolute w-[79px] h-[77px] top-[834px] left-[200px]"
      />
      <p className="absolute top-[891px] left-[1478px] text-footer">
        ГУП Московский метрополитен
      </p>
    </div>
  </nav>
);
