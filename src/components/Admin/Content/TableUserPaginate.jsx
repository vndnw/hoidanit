import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getUserWithPage } from "../../../api/userApi";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ReactPaginate from "react-paginate";

const LIMIT_USER = 5;
const TableUserPaginate = ({ update, onUpdate }) => {
  const [listUser, setListUser] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const getListUser = async () => {
      try {
        const response = await getUserWithPage(currentPage, LIMIT_USER);
        console.log("Fetch user list successfully: ", response);
        setListUser(response.DT.users);
        setPageCount(response.DT.totalPages);
      } catch (error) {
        console.log("Failed to fetch user list: ", error);
      }
    };
    getListUser();
  }, [update, currentPage]);
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };
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
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination justify-content-center"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default TableUserPaginate;
