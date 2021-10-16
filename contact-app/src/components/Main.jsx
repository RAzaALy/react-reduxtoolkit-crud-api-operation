import React from "react";
import { RiAddFill } from "react-icons/ri";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { contactSelector, reterieveAllContacts } from "../slices/contactSlice";
import { useEffect } from "react";

const Main = () => {
  const { users } = useSelector(contactSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reterieveAllContacts());
  }, [dispatch]);




  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="title">Contact App</h1>
          <Link className="addBtn" to="/add">
            <RiAddFill />
          </Link>
        </div>


        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Names</th>
              <th scope="col">Phone No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <Contact key={idx} sr={idx} {...user} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Main;
