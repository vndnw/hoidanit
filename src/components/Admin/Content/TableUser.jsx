import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getAllUser } from "../../../api/userApi";

const TableUser = ({ update }) => {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    const getListUser = async () => {
      try {
        const response = await getAllUser();
        console.log("Fetch user list successfully: ", response);
        setListUser(response.DT);
        // sort by id
        // setListUser((listUser) => {
        //   return listUser.sort((a, b) => a.id - b.id);
        // });
      } catch (error) {
        console.log("Failed to fetch user list: ", error);
      }
    };
    getListUser();
  }, [update]);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>role</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-secondary">view</button>
                <button className="btn btn-warning mx-3">edit</button>
                <button className="btn btn-danger">delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableUser;
