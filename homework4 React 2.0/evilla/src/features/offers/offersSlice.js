import { createSlice } from "@reduxjs/toolkit";

export const offersSlice = createSlice({
  name: "offers",
  initialState: {
    value: [],
  },

  reducers: {
    addOffer: (state, action) => {
      state.value.push(action.payload);
    },
    changeFollowed: (state, action) => {
      const index = state.value.findIndex((element)=> element.id === action.payload)
      if(index !== -1){
        state.value[index].followed = !state.value[index].followed
      }
    },
    setListValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addOffer, deleteOffer, changeFollowed, setListValue } =
  offersSlice.actions;
export default offersSlice.reducer;
