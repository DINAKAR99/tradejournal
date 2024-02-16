import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Homee } from "./pages/Homee";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart } from "./pages/Chart";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Provider } from "react-redux";
import Logs from "./pages/Logs";
import Store from "./Store";
import { TradePnl } from "./pages/TradePnl";
// import Store from "./Store";

// import { Home } from './pages/home'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={Store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/log" element={<Logs />} />
          <Route path="/charts" element={<Chart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pnl" element={<TradePnl />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
