import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root';
import dashboardReducer from './dashboard';

const store = configureStore({
  reducer: {
    root: rootReducer,
    dashboard: dashboardReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type DashboardStore = ReturnType<typeof store.getState>;

export default store;
