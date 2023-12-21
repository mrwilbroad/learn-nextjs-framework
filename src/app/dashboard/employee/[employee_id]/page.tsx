"use client";
import React from "react";
import Link from "next/link";

const page = ({ params }: { params: { employee_id: string } }) => {


  return <div>
              id : {params.employee_id};
              <Link href="/employee">
              <button className="btn btn-info btn-sm">back</button></Link>
  </div>;
};

export default page;
