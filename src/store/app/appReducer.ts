import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '..';

export interface AppState {
  isLoading: boolean;
}

const initialState: AppState = {
  isLoading: false,
};


export const appSlice = createSlice({
    name: 'app',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
  
      // Use the PayloadAction type to declare the contents of `action.payload`
      setIsLoading: (state: { isLoading: boolean; }, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload;
      },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
  });

  export const { setIsLoading } = appSlice.actions;

  export const selectApp = (state: RootState) => state.app.isLoading;

  export default appSlice.reducer;