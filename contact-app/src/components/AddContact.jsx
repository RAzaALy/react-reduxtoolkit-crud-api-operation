import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {useHistory} from "react-router"
import { createConatactApi } from "../slices/contactSlice";

// it works for both edit and add contact components so do not confused .

const AddContact = () => {
  
  const dispatch = useDispatch()
  const history = useHistory()

  const [data , setData] = useState({
    name : "",
    phone : ""
  })

  const onChangeHandler = e => {
    const {name,value} = e.target
    setData({...data, [name] : value})
  }

  const onClickHandler = () => {

    dispatch(createConatactApi({...data , id : uuidv4()}))
    setData({
      name : "",
      phone : ""
    })
    history.push('/')

  }


  return (
    <>
      <div className="login-box">
        <h2>Add Contact</h2>
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

export default AddContact;
