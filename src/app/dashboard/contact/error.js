"use client";
import React from "react";

const Error = ({ error, reset }) => {
  return (
    <div>
      <h6 className="text-danger">Somethinng went wrong</h6>
      {/* {<p className="text-danger">{error.message}</p>} */}
      <button
        onClick={() => reset()}
        type="button"
        className="btn btn-outline-primary"
      >
        Recover from Error{" "}
      </button>
    </div>
  );
};

export default Error;
