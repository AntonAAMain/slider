import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const NFT_LIST_URL = "https://api.coingecko.com/api/v3/nfts/list";

export interface NftItem {
  id: string;
  contract_address: string | null;
  name: string;
  asset_platform_id: string;
  symbol: string;
}

interface SliderState {
  list: NftItem[];
  loading: boolean;
  error: string | null;
}

const initialState: SliderState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchNftList = createAsyncThunk<NftItem[]>(
  "slider/fetchNftList",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(NFT_LIST_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      return data;
      // return [
      //   { name: "asd", id: "123" },
      //   { name: "asd", id: "123" },
      //   { name: "asd", id: "123" },
      //   { name: "asd", id: "123" },
      //   { name: "asd", id: "123" },
      //   { name: "asd", id: "123" },
      //   { name: "asd", id: "123" },
      //   { name: "asd", id: "123" },
      //   { name: "asd", id: "123" },
      //   { name: "asd", id: "123" },
      //   { name: "asd", id: "123" },
      //   { name: "asd", id: "123" },
      //   { name: "asd", id: "123" },
      // ];
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to fetch NFTs";
      return rejectWithValue(message);
    }
  }
);

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNftList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNftList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(fetchNftList.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) ?? "Unknown error";
      });
  },
});

export default sliderSlice.reducer;
