"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { rejects } from "assert";

const Page = () => {

  useEffect(()=>{
    throw new Error("EROR");
  },[])

  const CaseErrorH = () => {
    throw new Error("Causing error to this component ...");
  
  };

  return (
    <div className="container mb-3 p-3">
      <h6>Page Page....</h6>
      
      <Link  href={{ 
        pathname:"/",
        query: {name: "wilbroad",age:90}
       }} className="text-decoration-none border p-2">
        Back to Home
      </Link>

      <button onClick={CaseErrorH} type="button" className="btn btn-warning">
        Click to cause Error
      </button>

    </div>
  );
};

export default Page;
