import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router"
import { contactSelector, editContactApi } from "../slices/contactSlice";

// it works for both edit and add contact components so do not confused .

const EditContact = () => {
  
  const dispatch = useDispatch()
  const history = useHistory()

  const {editContact} = useSelector(contactSelector)



  const [data , setData] = useState(editContact)

  const onChangeHandler = e => {
    const {name,value} = e.target
    setData({...data, [name] : value})
  }

  const onClickHandler = () => {
    dispatch(editContactApi(data))
    
    history.push('/')

  }


  return (
    <>
      <div className="login-box">
        <h2>Edit Contact</h2>
        <div className="form">
          <div className="user-box">
            <input
              type="text"
              name="name"
              required=""
              value={data.name}
              onChange={onChangeHandler}
      
              autoComplete="off"
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="phone"
              required=""
              value={data.phone}
              onChange={onChangeHandler}
              autoComplete="off"
            />
            <label>Phone No.</label>
          </div>

          <button className="submitBtn" onClick={onClickHandler} >Submit</button>


        </div>
      </div>
    </>
  );
};

export default EditContact;
