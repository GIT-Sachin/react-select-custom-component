import React from "react";
import { components } from "react-select";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("component mounted");
  }
  setInvalidMessage = event => {
    event.target.setCustomValidity(this.props.messageText);
  };

  render() {
    if (this.props.isHidden) {
      return <components.Input {...this.props} />;
    }
    return (
      <components.Input
        {...this.props}
        required
        onInvalid={this.setInvalidMessage}
      />
    );
  }
}
