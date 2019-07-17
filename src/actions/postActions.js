import { FETCH_POSTS, NEW_POST } from './types';


export const fetchPosts = ()=> dispatch=> {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts =>
        dispatch({//will be disptached to the reducer
        type: FETCH_POSTS,
        payload: posts
      })
    )
}

//postData was previously postObj
export const createPost = postData => dispatch=> {
  console.log("action called");
  fetch("http://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
    title: postData.title,
    body: postData.body
    })
  })
  .then( res => res.json())
  .then( post => dispatch({
      type: NEW_POST,
      payload: post
    })
  )
  console.log("done");
}
