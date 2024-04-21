import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Chart } from "./pages/Chart";

import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import HashLoader from "react-spinners/HashLoader";
import Store from "./Store";
import Cinterest from "./pages/Cinterest";
import Logs from "./pages/Logs";
import Rules from "./pages/Rules";
import { TradePnl } from "./pages/TradePnl";
// import Store from "./Store";

// import { Home } from './pages/home'
import Login from "./pages/Login";
import Parallaxx from "./pages/Parallaxx";
import Resources from "./pages/Resources";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="App">
          <HashLoader loading={loading} size={80} />
        </div>
      ) : (
        <>
          <div>
            <Toaster
              toastOptions={{
                // Default options for specific types
                error: {
                  duration: 1500,
                },
              }}
            />
          </div>
          <Provider store={Store}>
            <Routes>
              <Route path="/signup" element={<Login flip={true} />} />
              <Route path="/login" element={<Login flip={false} />} />
              <Route path="/" element={<Parallaxx />} />
              <Route path="/log" element={<Logs />} />
              <Route path="/charts" element={<Chart />} />

              <Route path="/pnl" element={<TradePnl />} />
              <Route path="/cinterest" element={<Cinterest />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/para" element={<Parallaxx />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </Provider>
        </>
      )}
    </div>
  );
}

export default App;
