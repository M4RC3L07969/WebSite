import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import CreateAccount from "./CreateAccount";
import Base from "./Base";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/base" element={<Base />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
