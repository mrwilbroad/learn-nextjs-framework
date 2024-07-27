"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Nav } from "react-bootstrap";
import { auth, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";
import { useSession } from "next-auth/react";

const Navigation = () => {
  const ActivePage = usePathname();
  const session = useSession();
 

  useState(()=> {
    console.log(session);
  },[])

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
            href="/dashboard/contact"
            className={`nav-link ${
              ActivePage === "/contact" ? "text-info" : ""
            }`}
          >
            Contact
          </Link>
        </Nav.Item>

        <Nav.Item as="ul">
          <Link
            href="/dashboard/about"
            className={`nav-link ${ActivePage === "/about" ? "text-info" : ""}`}
          >
            About
          </Link>
        </Nav.Item>
        <Nav.Item as="ul">
          <Link
            href="/dashboard/shop"
            className={`nav-link ${ActivePage === "/shop" ? "text-info" : ""}`}
          >
            Shop
          </Link>
        </Nav.Item>
        
        <Nav.Item as="ul">
          <Link
            href="/dashboard/student"
            className={`nav-link ${
              ActivePage === "/student" ? "text-info" : ""
            }`}
          >
            Student
          </Link>
        </Nav.Item>

        <Nav.Item as="ul">
          <Link
            href="/dashboard/internationation"
            className={`nav-link ${
              ActivePage === "/internationation" ? "text-info" : ""
            }`}
          >
            internationation
          </Link>
        </Nav.Item>
        <Nav.Item as="ul">
          <Link
            href="/dashboard/Dynamic"
            className={`nav-link ${
              ActivePage === "/Dynamic" ? "text-info" : ""
            }`}
          >
            Dynamic-Routes
          </Link>
        </Nav.Item>

        <Nav.Item as="ul">
            <section className="vstack gap-1">
            <Link
            href="/dashboard/paralel_routes"
            className={`nav-link ${
              ActivePage === "/paralel_routes" ? "text-info" : ""
            }`}
          >
            Parallel-Routes
          </Link>
         <section className="vstack gap-3">
         <p className="m-0 p-0 small fw-bold">Signin as :{session.data?.user?.email}</p>
           <button type="button" className="btn btn-sm btn-success">sign-out</button>
         </section>
            </section>
        </Nav.Item>

        
          
      </Nav>
      
    </header>
  );
};

export default Navigation;
