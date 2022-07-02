// Set initial state
const initialState = {
  AuthorData: [],
  booksData:[],
  CartData:[],
  SearchQuery:[]
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "GOT_AUTHOR": {
      return {
        ...state,
        AuthorData: action.data,
      };
    }
    case"GOT_BOOK":{
     
      return {
        ...state,
      booksData:action.data
      }
    }
    case"GOT_CART_DATA":{
      return {
        ...state,
        CartData:action.data
      }
    }
    case "SEARCH_QUERY":{
    
      return{
        ...state,
        SearchQuery:action.data
      }
    }
    default:
      return state;
  }
}
