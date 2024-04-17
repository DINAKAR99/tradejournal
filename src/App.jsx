import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Homee } from "./pages/Homee";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart } from "./pages/Chart";

import { Provider } from "react-redux";
import Logs from "./pages/Logs";
import Store from "./Store";
import { TradePnl } from "./pages/TradePnl";
import Cinterest from "./pages/Cinterest";
import { Toaster } from "react-hot-toast";
import Rules from "./pages/Rules";
import Reg from "./pages/Reg";

// import Store from "./Store";

// import { Home } from './pages/home'
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Toaster
          toastOptions={{
            // Default options for specific types
            error: {
              duration: 3000,
            },
          }}
        />
      </div>
      <Provider store={Store}>
        <Routes>
          <Route path="/signup" element={<Reg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homee />} />
          <Route path="/log" element={<Logs />} />
          <Route path="/charts" element={<Chart />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/pnl" element={<TradePnl />} />
          <Route path="/cinterest" element={<Cinterest />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
