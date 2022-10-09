import React, { useState } from "react";
import SonF, { SonClass } from "./Son";
export class ParentClass extends React.Component {
  state = {
    name: "父组件：ParentClass",
  };
  changeName(name) {
    this.setState({
      name,
    });
  }

  render() {
    return (
      <div>
        <div>我是父组件 ParentClass</div>
        <SonF
          propName={this.state.name}
          onChangeName={(name) => this.changeName(name)}
        ></SonF>
        <SonClass
          propName={this.state.name}
          onChangeName={(name) => this.changeName(name)}
        ></SonClass>
      </div>
    );
  }
}

export default function ParentF() {
  const [name] = useState("父组件：ParentF");
  return (
    <div>
      <div>我是父组件 ParentF</div>
      <SonF propName={name}></SonF>
      <SonClass propName={name}></SonClass>
    </div>
  );
}
