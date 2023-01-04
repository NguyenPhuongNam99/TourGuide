import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../features/home/counterSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import loginSlice from '../features/login/loginSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    loginSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;