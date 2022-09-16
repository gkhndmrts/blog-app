import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./layouts/Blog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Detail from "./pages/Detail";

import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth.status);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />}>
          <Route index element={<Home />} />
          {!auth ? (
            <Route path="login" element={<Login />} />
          ) : (
            <Route path="dashboard" element={<Dashboard />} />
          )}

          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
