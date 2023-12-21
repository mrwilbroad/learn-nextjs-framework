"use client";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

export type FormValues = Record<string, any>;

const page = () => {
  const InitialValues: FormValues = {
    email: "",
    password: "",
    rememberme: true,
  };

  const [Values, SetValues] = useState(InitialValues);

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetValues({
      ...Values,
      [e.target.name]:
        typeof InitialValues[e.target.name] == "boolean"
          ? e.target.checked
          : e.target.value,
    });
    
  };

  const HandleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("/api/auth/login",{
        data: JSON.stringify(Values)
    }).then(res=> {
        console.log(res);
    }).catch(er=> { 
        console.log(er);
    })
  };

  return (
    <div className="container">
      <Card>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <form onSubmit={HandleSubmit} className="vstack gap-3 col-5">
            <section>
              <label className="form-label">Email Address</label>
              <input
                type="text"
                value={Values.email}
                onChange={(e) => HandleChange(e)}
                name="email"
                placeholder="Email"
                className="form-control"
                autoComplete="username"
              />
            </section>

            <section>
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={Values.password}
                onChange={(e) => HandleChange(e)}
                placeholder="Password"
                className="form-control"
                autoComplete="current-password"
              />
            </section>

            <section>
              <input
                name="rememberme"
                value={Values.rememberme}
                onChange={(e) => HandleChange(e)}
                type="checkbox"
                className="form-check-input"
              />
              <span className="form-check-text ms-1">Remember me</span>
            </section>

            <section>
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </section>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default page;
