import { UserContext } from "./UserContext";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export const AddUser = () => {
  //accessing the global state by useContext
  const { user, users, setUser, setUsers } = useContext(UserContext);

  let navigate = useNavigate(); //to navigate to home page

  return (
    <div className="container">
      <h1>Add User</h1>
      <form
        className="d-flex flex-column m-4 "
        onSubmit={async (e) => {
          e.preventDefault();
          setUsers([...users, user]);
          setUser({
            Firstname: "",
            Lastname: "",
            Empid: "",
            City: ""
          });
          navigate("/");
        }}
      >
        <FormControl>
          <TextField
            required
            focused
            color="primary"
            id="demo"
            value={user.Firstname}
            onChange={(e) => {
              setUser({ ...user, Firstname: e.target.value });
            }}
            label="FirstName"
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <TextField
            required
            focused
            color="primary"
            id="demo"
            value={user.Lastname}
            onChange={(e) => {
              setUser({ ...user, Lastname: e.target.value });
            }}
            label="LastName"
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <TextField
            required
            focused
            color="primary"
            id="demo"
            type="number"
            value={user.Empid}
            onChange={(e) => {
              setUser({ ...user, Empid: e.target.value });
            }}
            label="Employee ID"
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <TextField
            required
            focused
            color="primary"
            id="demo"
            value={user.City}
            onChange={(e) => {
              setUser({ ...user, City: e.target.value });
            }}
            label="City"
          />
        </FormControl>
        <br />
        <div className="d-flex justify-content-center">
          <Button type="submit" variant="contained" color="primary">
            ADD
          </Button>
        </div>
      </form>
    </div>
  );
};
