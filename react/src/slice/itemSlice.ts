import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type fetchStockType = {
  id: number;
  BAS_DD: number;
  ISU_NM: string;
  MKTCAP: number;
  MKT_NM: string;
  TDD_OPNPRC: number;
  ACC_TRDVOL: number;
};

export const fetchStockData = createAsyncThunk(
  "stock/items",
  async (page: number, thunkAPI) => {
    const response = await axios.get(
      `http://219.250.2.138:5018/krx/api/list/${page}`
    );
    const responeData = response.data.data;
    return responeData as fetchStockType;
  }
);

export interface stateProps {
  item: fetchStockType;
  fetchStatus: string;
}

const initialState: stateProps = {
  item: {
    id: 0,
    BAS_DD: 0,
    ISU_NM: "",
    MKTCAP: 0,
    MKT_NM: "",
    TDD_OPNPRC: 0,
    ACC_TRDVOL: 0,
  },
  fetchStatus: "",
};

const itemSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchStockData.fulfilled, (state, { payload }) => {
        state.item = payload;
        state.fetchStatus = "success";
      })
      .addCase(fetchStockData.rejected, (state, action) => {
        state.fetchStatus = action.error.message ?? "";
        console.log(action.error);
      });
  },
});

//export const { } = itemSlice.actions;
//export const items = (state => state.item);
export default itemSlice.reducer;
