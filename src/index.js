import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

function Hello()
{

  const [users, setUsers] = useState([
    {
      username: "Nandha",
      pass: "123",
    }
  ]);

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} setUsers={setUsers}/>}></Route>
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers}/>}></Route>
        <Route path="/app" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  )
}




root.render(
  <div>
    <Hello/>
  </div>
);
