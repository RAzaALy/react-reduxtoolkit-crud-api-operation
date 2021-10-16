import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { deleteContactApi, setEditContact } from '../slices/contactSlice';

const Contact = ({id,sr,phone,name}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const editClickHandler = () => {
        dispatch(setEditContact({id,name,phone}))
        history.push('/edit')
        
    }

    return (
        <>
            <tr>
                <td data-label="ID">{sr}</td>
                <td data-label="Account">{name}</td>
                <td data-label="Due Date">{phone}</td>
                <td className="actioner"  data-label="Amount"><AiFillDelete onClick={() => dispatch(deleteContactApi(id))} /> <MdEdit onClick={editClickHandler}/></td>
              </tr>
        </>
    )
}

export default Contact
