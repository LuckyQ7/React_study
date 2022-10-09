import React from "react";
import PropTypes from "prop-types";

export default function SonF(props) {
  return (
    <div>
      <div>--------------</div>
      <div>我是子组件 SonF</div>
      <div>父组件传过来的：{props.propName}</div>
      <div>--------------</div>
    </div>
  );
}

export class SonClass extends React.Component {
  state = {
    name: "子组件：SonClasss",
  };

  changeParentName() {
    this.props.onChangeName(+new Date() + "更改父组件的名字");
  }

  render() {
    return (
      <div onClick={() => this.changeParentName()}>
        <div>--------------</div>
        <div>我是子组件 SonClasss</div>
        <div>父组件传过来的：{this.props.propName}</div>
        <div>--------------</div>
      </div>
    );
  }
}

SonClass.propTypes = {
  propName: PropTypes.string.isRequired,
};

SonF.propTypes = {
  propName: PropTypes.string.isRequired,
};
