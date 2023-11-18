"use client";
import React from "react";
import { Nav } from "react-bootstrap";

const Pararel_routes_nav = () => {
  return (
    <Nav variant="pills" activeKey="1">
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Pararel_routes_nav;
