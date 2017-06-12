import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { recentImages, recentImagesHasErrored, recentImagesIsLoading } from './reducerRecentImages';
import { getFavoritesIsLoading, getFavoritesHasErrored, userFavorites } from './reducerFavorites';
import { userDataIsLoading, userData } from './reducerUserInfo';
import { shop } from './reducerShopInfo';
import { searchResults } from './reducerSearch';




const rootReducer = combineReducers({
  recentImages, 
  recentImagesHasErrored,
  recentImagesIsLoading,
  getFavoritesHasErrored,
  getFavoritesIsLoading,
  userFavorites,
  userDataIsLoading,
  userData,
  shop,
  searchResults,
  form: formReducer
});

export default rootReducer;

