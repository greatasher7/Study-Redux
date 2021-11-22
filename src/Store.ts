import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';

// state interface
export interface IState {
  title: string;
  info: IInfo;
}
export interface IInfo {
  name: string;
  age: number;
}

// createSlice
const documentSlice = createSlice({
  // slice name 설정
  name: 'document',

  // 초기 state 설정
  initialState: {
    title: '초기 정보',
    info: {
      name: '김처음',
      age: 1,
    },
  },

  //reducer 설정
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setInfo: (state, action: PayloadAction<IInfo>) => {
      state.info = action.payload;
    },
  },
});

// configureStore
const store = configureStore({ reducer: documentSlice.reducer });

// export actions
export const { setTitle, setInfo } = documentSlice.actions;

// export store to index.tsx
export default store;
