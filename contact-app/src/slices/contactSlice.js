import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import contactServices from "../services/contactServices";

const reterieveAllContacts = createAsyncThunk("contact/retrieve", async () => {
  const response = await contactServices.getAllContact();
  return response.data;
});

const createConatactApi = createAsyncThunk("contact/create", async (data) => {
  const response = await contactServices.createContact(data);
  return response.data;
});

const deleteContactApi = createAsyncThunk("contact/delete", async (id) => {
  await contactServices.deleteContact(id);
  return { id }; // because it goes as a payload in action so that is pass a object
});

const editContactApi = createAsyncThunk("contact/edit", async (data) => {
  return await (
    await contactServices.editContact(data.id, data)
  ).data;
});

const initialState = {
  users: [],
  editContact: {},
};

const contactSlice = createSlice({
  name: "contact",
  initialState,

  reducers: {
    setEditContact(state, action) {
      state.editContact = action.payload;
    },

  },

  extraReducers: {
    [reterieveAllContacts.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [createConatactApi.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
    [deleteContactApi.fulfilled]: (state, { payload }) => {
      const idx = state.users.findIndex((user) => user.id === payload.id);
      state.users.splice(idx, 1);
    },
    [editContactApi.fulfilled]: (state, action) => {
      state.users = state.users.filter((user) =>
        user.id === action.payload.id ? { ...action.payload } : user
      );
    },
  },
});

export {
  reterieveAllContacts,
  createConatactApi,
  deleteContactApi,
  editContactApi,
};

export const { setEditContact } = contactSlice.actions;
export const contactSelector = (state) => state.contact;
export default contactSlice.reducer;
