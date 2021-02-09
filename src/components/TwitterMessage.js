import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      chars: props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      chars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        Remaining Characters: {this.state.chars}
      </div>
    );
  }
}

export default TwitterMessage;
