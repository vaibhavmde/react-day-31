import { UserContext } from "./UserContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Table } from "react-bootstrap";

//profile component
export const Profile = () => {
  const { users, setUsers } = useContext(UserContext);
  //deleting the user by maping the empid
  const delHandler = (user, id) => {
    setUsers(users.filter((user) => user.Empid !== id));
  };

  //displaying  table of users profile
  return (
    <div className="profile">
      <h1 className="head">Welcome to Profile</h1>
      {/* bootstap component Table */}
      <Table striped hover variant="dark" responsive>
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Lastname</th>
            <th scope="col">EmpID</th>
            <th scope="col">City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* maping the users profile */}
          {users.map((e, i) => (
            <tr key={i} className="text-center">
              <th scope="row">{i + 1}</th>
              <td>{e.Firstname}</td>
              <td>{e.Lastname}</td>
              <td>{e.Empid}</td>
              <td>{e.City}</td>
              <td>
                {/*create a link to buttons */}
                <Link to={`/edit/${e.Empid}`}>
                  <IconButton color="warning" aria-label="Edit">
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton
                  color="error"
                  aria-label="delete"
                  onClick={() => {
                    delHandler(e, e.Empid);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
