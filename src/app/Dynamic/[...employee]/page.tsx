"use client";

import React, { useEffect } from "react";

const page = ({ params }: { params: { employee: string[] } }) => {
  useEffect(() => {
    console.log(params);
  });

  return (
    <div>
      <p>Page that receive all types of routes /Dynamic/*</p>
      {params.employee.length > 0 &&
        params.employee.map((em, index) => (
          <li key={index}>{em.toLowerCase()}</li>
        ))}
    </div>
  );
};

export default page;
