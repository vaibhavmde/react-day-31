import { Link } from "react-router-dom";
import PreviewIcon from "@mui/icons-material/Preview";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Table } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Users = () => {
  const { users, setUsers } = useContext(UserContext);

  //deleting the user by maping empid
  const delHandler = (user, id) => {
    setUsers(users.filter((user) => user.Empid !== id));
  };
  return (
    <div className="container-fluid">
      <Table striped hover variant="dark" responsive size="sm">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e, i) => (
            <tr key={i} className="text-center">
              <th scope="row">{i + 1}</th>
              <td>{e.Firstname}</td>
              <td>
                <Link to={`/profile/${e.Empid}`}>
                  <IconButton color="success" aria-label="profile">
                    <AccountBoxIcon />
                  </IconButton>
                </Link>
                <Link to={`/view/${e.Empid}`}>
                  <IconButton color="primary" aria-label="view">
                    <PreviewIcon />
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
