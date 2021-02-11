import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments: "",
      topic: "React",
    };
  }

  onUserNameChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  onCommentsChange = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  handleTopicChange = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };

  onSubmitHandler = (e) => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`);
    e.preventDefault()
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div>
          <label>UserName: </label>
          <input type="text" onChange={this.onUserNameChange}></input>
        </div>
        <div>
          <label>Comments: </label>
          <textarea onChange={this.onCommentsChange}></textarea>
        </div>
        <div>
          <label>Topic: </label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
