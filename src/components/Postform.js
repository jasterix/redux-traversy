import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class Postform extends Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.props.onNewPost(this.state)
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <h1></h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <input
              value={this.state.title}
              onChange={this.handleChange}
              type="text"
              name="title"
            ></input>
          </div>

          <div>
            <label>Body: </label>
            <input
              value={this.state.body}
              onChange={this.handleChange}
              type="text"
              name="body"
            ></input>
          </div>

          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(component)
export default connect(
  null,
  { createPost }
)(Postform);
