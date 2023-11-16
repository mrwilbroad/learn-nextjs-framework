"use client";

import React from "react";
import { Table } from "react-bootstrap";
import Link from "next/link";

export type Student = {
  id: string;
  name: string;
  gender: "W" | "M";
  age: number;
}
export type Studenttype = Array<Student>;
export const StudentData: Studenttype = [
  {
    id: "1",
    name: "Wilbroad",
    gender: "M",
    age: 23,
  },
  {
    id: "2",
    name: "Glory",
    gender: "W",
    age: 28,
  },
];
const page = () => {
  return (
    <div className="container">
      <Table striped bordered responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {StudentData.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.age}</td>
              <td>
                <Link className="text-center" href={`/student/${student.id}`}>
                  View Data
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default page;
