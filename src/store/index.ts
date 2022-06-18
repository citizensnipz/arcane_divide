import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appReducer from './app/appReducer';
import newsReducer from './news/newsReducer';


export const store = configureStore({
  reducer: {
    app: appReducer,
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
