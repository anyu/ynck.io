export const userDataIsLoading = (state = false, action) => {
  switch (action.type) {
  case 'USER_DATA_IS_LOADING':
    return action.userDataIsLoading;
  default:
    return state;
  }
};


export const userData = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_USER_DATA_SUCCESS':
    return action.userData;
  case 'UPDATE_FOLLOWING_SUCCESS':
    return Object.assign({}, state, {
      isBeingFollowed: !state.isBeingFollowed
    });
  case 'UPDATE_USER_DATA_SUCCESS':
    return Object.assign({}, state, {
      userProfile: Object.assign({}, state.userProfile, {
        first: action.first,
        last: action.last,
        profile_description: action.profile_description
      })
    });
  case 'UPDATE_USER_PHOTO_SUCCESS':
    if (action.photoData.image_type === 'tattoo') {
      let newArray = [];
      if (state.tattoo) {
        newArray = state.tattoo.slice();
      }
      newArray.unshift(action.photoData);
      return Object.assign({}, state, {
        tattoo: newArray
      });
    } else if (action.photoData.image_type === 'design') {
      let newArray = [];
      if (state.design) {
        newArray = state.design.slice();
      }
      newArray.unshift(action.photoData);
      return Object.assign({}, state, {
        design: newArray
      });
    } else if (actton.photoData.image_type === 'inspiration') {
      let newArray = state.inspiration.slice();
      newArray.unshift(action.photoData);
      return Object.assign({}, state, {
        inspiration: newArray
      });
    }
  case 'PROFILE_FAVORITES_SUCCESS' :
    let i = action.i;
    if (action.typeOfImage === 'tattoo') {
      return Object.assign({}, state, { 
        tattoo: [
          ...state.tattoo.slice(0, i), 
          Object.assign({}, state.tattoo[i], { 
            isFavorited: !state.tattoo[i].isFavorited
          }), 
          ...state.tattoo.slice(i + 1)]
      });
    } else if (action.typeOfImage === 'design') {
      return Object.assign({}, state, {
        design: [
          ...state.design.slice(0, i), 
          Object.assign({}, state.design[i], {
            isFavorited: !state.design[i].isFavorited
          }), 
          ...state.design.slice(i + 1)]
      });
    }
  default:
    return state;
  }
};
