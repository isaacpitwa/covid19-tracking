import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import Countries from './countries/countries';
import Metrics from './metrics/Metrics';

const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
  countries: Countries,
  metrics: Metrics,
});
export default configureStore({
  reducer: rootReducer,
  middleware:
(getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware).concat(thunkMiddleware),

});
