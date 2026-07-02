import { Routes, Route } from "react-router-dom";

import "./App.css";

import LandingPage from "./components/landing_page";
import NumberSystemConverter from "./components/number_system_converter";
import DataStorageConverter from "./components/data_storage_units";
import ColorConverter from "./components/color_conversion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/data-storage" element={<DataStorageConverter />} />
      <Route path="/color-converter" element={<ColorConverter />} />
      <Route path="/number-system" element={<NumberSystemConverter />} />
    </Routes>
  );
}

export default App;
