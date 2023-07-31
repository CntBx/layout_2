import { NavLink, Outlet } from "react-router-dom";
import moscow_transport from "../photos/moscow_transport.png";
import moscow_transport2 from "../photos/moscow_transport2.png";

export const Layout = () => (
  <nav>
    <header className="flex justify-center gap-10 mr-[500px]">
      <img
        src={moscow_transport}
        alt="moscow_transport"
        className="mt-[14px] w-[89px] h-[89px] "
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
    <main className="flex justify-center">
      <Outlet />
    </main>
    <div className="flex justify-between">
      <img
        src={moscow_transport2}
        alt="moscow_transport2"
        className=" w-[79px] h-[77px] top-[834px] left-[200px]"
      />
      <p className=" top-[891px] left-[1478px] text-footer">
        ГУП Московский метрополитен
      </p>
    </div>
  </nav>
);
