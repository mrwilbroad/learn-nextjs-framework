"use client";
import React from "react";
import { Card } from "react-bootstrap";

type props = {
  children?: React.ReactNode;
};
const CardComponent = (props: props) => {
  return <Card>{props.children}</Card>;
};

export default CardComponent;
