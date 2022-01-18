import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div
        >
          {this.props.footer}
        </div>
    );
  }
}
