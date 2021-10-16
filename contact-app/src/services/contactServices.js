import api from "../apis/contact";

const getAllContact = () => {
  return api.get("/contacts");
};

const createContact = (data) => {
  return api.post("/contacts", data);
};

const deleteContact = (id) => {
  return api.delete(`/contacts/${id}`);
};

const editContact = (id,data) => {

    return api.put(`/contacts/${id}`,data)
}


 
const contactServices = {
    getAllContact,
    createContact,
    deleteContact,
    editContact
}

export default contactServices;
