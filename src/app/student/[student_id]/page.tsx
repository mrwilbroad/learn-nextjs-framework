"use client";

import React from "react";
import { type Studenttype, StudentData } from "./../page";

const student_id = ({ params }: { params: { student_id: string } }) => {
  const students: Studenttype = StudentData.filter(
    (student) => student.id === params.student_id
  );

  return (
    <div className="container">
      <h5 className="text-info">Student Information </h5>
      {students.length > 0 &&
        students.map((student, index) => (
          <section key={index} className="col-lg-5 col-md-5">
            <p className="p-0 m-0">
              <span>Name</span> <strong>{student.name}</strong>
            </p>
            <p className="p-0 m-0">
              <span>Gender</span> <strong>{student.gender}</strong>
            </p>
            <p className="p-0 m-0">
              <span>Age</span> <strong>{student.age}</strong>
            </p>
          </section>
        ))}
      {students.length <= 0 && (
        <section>
          <h6 className="text-danger">
            No Data Found for student to be displayed
          </h6>
        </section>
      )}
    </div>
  );
};

export default student_id;
