import Login from "./page/login";
import './App.css'
import Home from "./page/home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Search from "./page/search";
import Detail from "./page/detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
