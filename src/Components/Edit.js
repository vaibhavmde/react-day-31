import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { useParams, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export const Edit = () => {
  const { users, setUsers } = useContext(UserContext);

  const { id } = useParams();
  //taking the user which need to be edited in currentUser
  let currentUser = users.find((e) => e.Empid === id);

  //setting the values of form to olduser
  const [user, setUser] = useState({
    Firstname: currentUser.Firstname,
    Lastname: currentUser.Lastname,
    Empid: currentUser.Empid,
    City: currentUser.City
  });

  let navigate = useNavigate();

  return (
    <div className="container">
      <h1>Edit</h1>
      <form
        className="d-flex flex-column m-2 "
        onSubmit={async (e) => {
          e.preventDefault();
          //logic to update the currentuser
          const index = users.findIndex((user) => user.Empid === id);
          var tempuserss = [...users];
          tempuserss[index] = user;
          await setUsers(tempuserss);
          navigate("/profile/:id");
        }}
      >
        <FormControl>
          <TextField
            required
            id="demo"
            focused
            color="primary"
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
            id="demo"
            focused
            color="primary"
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
            disabled
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
            id="demo"
            focused
            color="primary"
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
            Edit
          </Button>
        </div>
      </form>
    </div>
  );
};
