import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { changeThemeMode } from "./actions";

const SwitchButton = props => {
  const [themeMode, setThemeMode] = useState("");

  const handleThemeChange = () => {
    props.changeThemeMode(!themeMode);
    setThemeMode(!themeMode);
  };

  useEffect(() => {
    setThemeMode(props.themeModeState);
  }, []);

  return (
    <Switch>
      <Input type="checkbox" onClick={() => handleThemeChange()} />
      <SliderRounded />
    </Switch>
  );
};

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  &:hover {
    cursor: pointer;
  }
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;
const Input = styled.input`
  &:checked + span {
    background-color: red;
  }
  &:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
const SliderRounded = styled.span`
  border-radius: 34px;
  &:before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
`;

const mapStateToProps = store => ({
  themeModeState: store.themeModeState.newValue,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeThemeMode }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchButton);
