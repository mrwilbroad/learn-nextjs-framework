"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { type Employee } from "../Types/Employee";
import { Table, Spinner } from "react-bootstrap";
import Link from "next/link";

const EmployeePage = () => {
  const [Employees, setEMployees] = useState([] as Employee);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
     GET();
  }, []);

  useEffect(()=> {
    POST();
  },[])


  const GET =async ()=> {
  
    await axios
    .get("/api/employees")
    .then((res) => {
      const em: Employee = res.data;
      setEMployees(em);
    })
    .catch((er) => {
      console.log(er);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  const POST = async()=> {
        await axios.post("/api/employees?id=90")
              .then(res=> {
                console.log(res)
              }).catch(er=> {
                console.log(er);
              })
  }

  return (
    <div className="container">
      Employee Page....
      <Table striped bordered responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Branch</th>
            <th>Country</th>
            <th>Region</th>
            <th>Salary</th>
            <th colSpan={2} className="text-center">
              View
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={10}>
                <section className="hstack gap-2">
                  Please Wait ...{" "}
                  <Spinner
                    size="sm"
                    animation="border"
                    variant="success"
                    role="status"
                  />
                </section>
              </td>
            </tr>
          )}
          {Employees.length > 0 &&
            Employees.map(
              (em, index) =>
                index < 5 && (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{em.firstname}</td>
                    <td>{em.lname}</td>
                    <td>{em.email}</td>
                    <td>{em.birthday}</td>
                    <td>{em.branch}</td>
                    <td>{em.country}</td>
                    <td>{em.region}</td>
                    <td>{em.salary}</td>
                    <td>
                      <Link href={`/employee/${em.id}`}>
                        <button className="btn btn-info">View</button>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/employee/${em.id}`}>
                        <button className="btn btn-danger">Delete</button>
                      </Link>
                    </td>
                  </tr>
                )
            )}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeePage;
