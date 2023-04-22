import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Bag from "./pages/Bag/Bag";
import SpainPage from "./pages/SpainPage/SpainPage";
import JapanPage from "./pages/JapanPage/JapanPage";
import  Home from "./pages/Home/Home";
import RussiaPage from "./pages/RussiaPage/RussiaPage";
import Register from "./pages/Register/Register";



const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/russia" element={<RussiaPage />} />
        <Route path="/spain" element={<SpainPage />} />
        <Route path="/japan" element={<JapanPage />} />
      </Routes>
    </div>
  );
};

export default App;
