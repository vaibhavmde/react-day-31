import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./Components/UserContext";
import { Home } from "./Components/Home";
import { AddUser } from "./Components/AddUser";
import { Navbar } from "./Components/Navbar";
import { Edit } from "./Components/Edit";
import { Profile } from "./Components/Profile";
import { View } from "./Components/View";
import { NotFound } from "./Components/NotFound";
import "./App.css";

export default function App() {
  //created to useState
  //one for user
  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    Empid: "",
    City: ""
  });
  //second for list of users
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, users, setUsers }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/view/:id" element={<View />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserContext.Provider>
  );
}
