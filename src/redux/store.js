import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import emptySplitApi from "./api";

// eslint-disable-next-line import/prefer-default-export
export const makeStore = (preloadedState) => configureStore({
  reducer: {
    [emptySplitApi.reducerPath]: emptySplitApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
  preloadedState
})

setupListeners(makeStore().dispatch)
