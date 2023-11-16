import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container mb-3 p-3">
      <h6>Page Page....</h6>
      <Link  href={{ 
        pathname:"/",
        query: {name: "wilbroad",age:90}
       }} className="text-decoration-none border p-2">
        Back to Home
      </Link>
    </div>
  );
};

export default Page;
