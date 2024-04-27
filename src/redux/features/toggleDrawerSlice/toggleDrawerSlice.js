import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCartDrawer: false,
  showHeaderSearchBar: false,
};

const toggleDrawerSlice = createSlice({
  name: "cartDrawer",
  initialState,
  reducers: {
    toggleCartDrawer: (state) => {
      state.showCartDrawer = state.showCartDrawer ? false : true;
    },

    toggleHeaderSearchBar: (state, action) => {
      action.payload
        ? (state.showHeaderSearchBar = action.payload)
        : (state.showHeaderSearchBar = state.showHeaderSearchBar
            ? false
            : true);
    },
  },
});

export const { toggleCartDrawer, toggleHeaderSearchBar } =
  toggleDrawerSlice.actions;

export const selectCartDrawer = (state) => state.drawers.showCartDrawer;
export const selectHeaderSearchBar = (state) =>
  state.drawers.showHeaderSearchBar;

export default toggleDrawerSlice.reducer;
