import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main";
import { AntdPage } from "./pages/antd";
import { JoyUIPage } from "./pages/joyui";
import { MUIPage } from "./pages/mui";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/antd" element={<AntdPage />} />
        <Route path="/joyui" element={<JoyUIPage />} />
        <Route path="/options.php" element={<MUIPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
