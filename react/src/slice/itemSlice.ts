import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface fetchStockDataType {
  id: number;
  BAS_DD: number;
  ISU_NM: string;
  MKTCAP: number;
  MKT_NM: string;
  TDD_OPNPRC: number;
  ACC_TRDVOL: number;
}

interface fetchStockType {
  data: fetchStockDataType[];
  totalPage: number;
  totalData: number;
}

interface stockDataProps {
  page: number;
  limit: number;
}

export const fetchStockData = createAsyncThunk(
  "stock/items",
  async ({ page, limit }: stockDataProps, thunkAPI) => {
    const response = await axios.get(
      `http://219.250.2.138:5018/krx/api/list/${page}/${limit}`
    );
    const responeData = response.data;
    return responeData as fetchStockType;
  }
);

export interface stateProps {
  item: fetchStockType;
  fetchStatus: string;
  page: number;
}

const initialState: stateProps = {
  item: {
    data: [
      {
        id: 0,
        BAS_DD: 0,
        ISU_NM: "",
        MKTCAP: 0,
        MKT_NM: "",
        TDD_OPNPRC: 0,
        ACC_TRDVOL: 0,
      },
    ],
    totalPage: 0,
    totalData: 0,
  },
  fetchStatus: "",
  page: 1,
};

const itemSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    pageIncrement: (state) => {
      if (state.item.totalPage > state.page) {
        state.page += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchStockData.fulfilled, (state, { payload }) => {
        if (state.page > 1) {
          payload.data.map((item) => {
            state.item.data.push(item);
          });
        } else {
          state.item.data = payload.data;
        }
        state.item.totalData = payload.totalData;
        state.item.totalPage = payload.totalPage;
        state.fetchStatus = "success";
      })
      .addCase(fetchStockData.rejected, (state, action) => {
        state.fetchStatus = action.error.message ?? "";
        console.log(action.error);
      });
  },
});

export const { pageIncrement } = itemSlice.actions;
export default itemSlice.reducer;
