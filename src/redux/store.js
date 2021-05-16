import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import phoneBookReducer from './phoneBook/reducer';

// const persistConfig = {
//   key: 'phoneBook',
//   storage,
//   blacklist: ['filter'],
// };

const myMiddleware = store => next => action => {
  console.log('my midleware... and show action-->', action);
  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleware,
  logger,
];

const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
    // contacts: persistReducer(persistConfig, phoneBookReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// export default { store, persistor };
export default store;
