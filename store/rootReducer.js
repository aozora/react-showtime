import { combineReducers } from '@reduxjs/toolkit';
import configurationReducer from 'store/features/tmdb/configuration/configuration-slice';
// import issuesDisplayReducer from 'features/issuesDisplay/issuesDisplaySlice';
// import repoDetailsReducer from 'features/repoSearch/repoDetailsSlice';
// import issuesReducer from 'features/issuesList/issuesSlice';
// import commentsReducer from 'features/issueDetails/commentsSlice';

const rootReducer = combineReducers({
  configuration: configurationReducer
  // issuesDisplay: issuesDisplayReducer,
  // repoDetails: repoDetailsReducer,
  // issues: issuesReducer,
  // comments: commentsReducer
});

export default rootReducer;
