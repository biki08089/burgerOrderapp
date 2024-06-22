import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobilenum:null,
};

const sliceOne = createSlice({
  name: "firstSlice",
  initialState,
  reducers: {
    updateMobilenum: (state, action) => {
        state.mobilenum = action.payload;
      },
  }
});

export const {totalItemPrice,updateMobilenum} =
  sliceOne.actions;
export default sliceOne.reducer;
