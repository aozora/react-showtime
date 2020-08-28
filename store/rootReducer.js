import { combineReducers } from '@reduxjs/toolkit';
import configurationReducer from './features/tmdb/configuration/configuration-slice';

const rootReducer = combineReducers({
  configuration: configurationReducer
});

export default rootReducer;
