import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginAdminPage from "./pages/LoginAdminPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/admin" element={<LoginAdminPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/register" element={<Register/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
