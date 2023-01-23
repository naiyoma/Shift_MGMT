import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import MyCalendar from "./components/UserDashboard";

import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={< Signup />} />
        <Route path='' element={<Header />} />
        <Route path='/user-dashboard' element={<MyCalendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
