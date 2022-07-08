const categoryContentReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CATEGORY_CONTENT':
        return action.payload;
      default:
        return state;
    }
  };
  

  export default categoryContentReducer;
  