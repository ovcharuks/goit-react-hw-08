import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../auth/operations";
axios.defaults.baseURL = "https://679737b3c2c861de0c6be408.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAllContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await goitApi.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "constacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await goitApi.post(`/contacts`, body);
      console.log("data", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
