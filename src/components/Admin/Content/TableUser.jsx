import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getAllUser } from "../../../api/userApi";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";

const TableUser = ({ update, onUpdate }) => {
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
                <div className="d-flex">
                  <div>
                    <ModalViewUser onUpdate={onUpdate} userUpdate={user} />
                  </div>
                  <div className="mx-3">
                    <ModalUpdateUser onUpdate={onUpdate} userUpdate={user} />
                  </div>
                  <div>
                    <ModalDeleteUser onUpdate={onUpdate} userUpdate={user} />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableUser;
