import React from "react";
import PropTypes from "prop-types";
import { Provider } from 'react-redux';


import Posts  from "./components/Posts.js";
import Postform from "./components/Postform.js"

import store  from "./store";


class App extends React.Component {
  state = {
    posts: []
  };

  render() {

    return (
      <Provider store={store}>
      <div>
        <header>

      </header>
      <hr/>
    <Postform />
  <Posts posts={this.state.posts}/>

      </div>
      </Provider>
    );
  }
}
export default App;
