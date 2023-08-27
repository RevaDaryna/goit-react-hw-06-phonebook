import { createSlice} from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
  name: "filter",
  initialState: {filter: ''},
  reducers: {
    filtered(state, action)  {
        return action.payload

    }
    
  },
});

export const { filtered } = FilterSlice.actions;
export default FilterSlice.reducer
export const selectFilter = state => state.filter