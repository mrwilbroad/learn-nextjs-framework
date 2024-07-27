"use client";
import React from "react";

const page = () => {

   const CaseErrorH = ()=> {
    throw new Error("Causing error to this component ...");
   }

  return (
    <div className="container p-3">
      Main Page for dynamic routes...
      <button onClick={CaseErrorH} type="button" className="btn btn-warning">
        Click to cause Error
      </button>
    </div>
  );
};

export default page;
