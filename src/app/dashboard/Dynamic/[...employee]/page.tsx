"use client";

import React, { useEffect } from "react";

const page = ({ params }: { params: { employee: string[] } }) => {
  useEffect(() => {
    console.log(params);
  });

  const CaseErrorH = () => {
    throw new Error("Causing error to this component ...");
  };

  return (
    <div>
      <p>Page that receive all types of routes /Dynamic/*</p>
      {params.employee.length > 0 &&
        params.employee.map((em, index) => (
          <li key={index}>{em.toLowerCase()}</li>
        ))}

      <button onClick={CaseErrorH} type="button" className="btn btn-warning">
        Click to cause Error
      </button>
    </div>
  );
};

export default page;
