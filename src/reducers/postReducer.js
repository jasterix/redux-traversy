import { FETCH_POSTS, NEW_POST } from '../actions/types';

// create initial state
const initialState= {
  items: [], // posts that come in from our actions
  item: {} // the single post that we add when we get the resinse back
}


// function that evaluates what type we're dealing with. It takes in--- 1) the state and 2) the action
export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      } //next implement this to our components

    case NEW_POST:
    return{
      ...state,
      items: [...state.items, action.payload]
    }
  //   return {
  //   ...state,
  //   item: action.payload //payload is the single post
  // } //next implement this to our components

    default:
      return state;
  }
}
