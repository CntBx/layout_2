import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
import { Users } from "./pages/Users";
import { Navbar } from "./navigation/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Posts"} element={<Posts />} />
        <Route path={"/Users"} element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
