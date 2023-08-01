import { NavLink, Outlet } from "react-router-dom";
import moscow_transport from "../photos/moscow_transport.png";
import moscow_transport2 from "../photos/moscow_transport2.png";

export const Layout = () => (
  <div className="">
    <header className="flex justify-start gap-10 ml-[200px]">
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

      <main className="flex justify-center flex-grow-1">
        <Outlet />
      </main>

      <footer className=" flex  justify-between flex-shrink-0 ">

        <img
          src={moscow_transport2}
          alt="moscow_transport2"
          className=" ml-[200px] mt-[31px] w-[79px] h-[77px] "
        />

        <p className="text-footer mr-[200px] mt-[88px]">
          ГУП Московский метрополитен
        </p>
      </footer>

  </div>
);
