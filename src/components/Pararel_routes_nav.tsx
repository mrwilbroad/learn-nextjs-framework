"use client";
import React from "react";
import { Nav } from "react-bootstrap";
import Link from "next/link";

const Pararel_routes_nav = () => {
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Link href="/paralel_routes/" className="nav-link">
          Team page
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/paralel_routes" className="nav-link">
          Analytics page
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/paralel_routes/settings" className="nav-link">
          Analytics/Setting page
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link href="/paralel_routes/cancelation" className="nav-link">
          Analytics/cancelation page
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default Pararel_routes_nav;
