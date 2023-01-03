import {createSlice} from '@reduxjs/toolkit';

export interface LoginState {
  data: Array<any>;
}

const initialState: LoginState = {
  data: [],
};

export const loginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setData} = loginSlice.actions;

export default loginSlice.reducer;
