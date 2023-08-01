import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
import { Users } from "./pages/Users";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"/Posts"} element={<Posts />} />
          <Route path={"/Users"} element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
