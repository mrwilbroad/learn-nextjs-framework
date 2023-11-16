"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Nav } from "react-bootstrap";

const Navigation = () => {
  const ActivePage = usePathname();
  useEffect(() => {});

  return (
    <header className="container">
      <Nav as="nav" className="justify-content-center border">
        <Nav.Item as="ul">
          <Link
            href="/"
            className={`nav-link ${ActivePage === "/" ? "text-info" : ""}`}
          >
            Home
          </Link>
        </Nav.Item>

        <Nav.Item as="ul">
          <Link
            href="/contact"
            className={`nav-link ${
              ActivePage === "/contact" ? "text-info" : ""
            }`}
          >
            Contact
          </Link>
        </Nav.Item>

        <Nav.Item as="ul">
          <Link
            href="/about"
            className={`nav-link ${ActivePage === "/about" ? "text-info" : ""}`}
          >
            About
          </Link>
        </Nav.Item>
        <Nav.Item as="ul">
          <Link
            href="/shop"
            className={`nav-link ${ActivePage === "/shop" ? "text-info" : ""}`}
          >
            Shop
          </Link>
        </Nav.Item>

        <Nav.Item as="ul">
          <Link
            href="/student"
            className={`nav-link ${ActivePage === "/student" ? "text-info" : ""}`}
          >
            Student
          </Link>
        </Nav.Item>
        <Nav.Item as="ul">
          <Link
            href="/Dynamic"
            className={`nav-link ${ActivePage === "/Dynamic" ? "text-info" : ""}`}
          >
            Dynamic-Routes
          </Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Navigation;
