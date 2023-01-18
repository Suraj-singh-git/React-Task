import React from "react";
import Navbar from "../components/Navbar";

function Box() {
  return (
    <>
      <div className="block1"></div>
    </>
  );
}

function BoxRow() {
  return (
    <div className="row1">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
}

function task1() {
  return (
    <div className="container1">
      <BoxRow />
      <BoxRow />
      <BoxRow />
      <BoxRow />
      <BoxRow />
      <BoxRow />
      <BoxRow />
      <BoxRow />
    </div>
  );
}

export default task1;
