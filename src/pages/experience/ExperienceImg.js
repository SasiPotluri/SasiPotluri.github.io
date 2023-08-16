import React, { Component } from "react";

export default class ExperienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        alt="Sasi is configuring a server"
        src={require(`../../assests/images/work.png`)}
      ></img>
    );
  }
}
