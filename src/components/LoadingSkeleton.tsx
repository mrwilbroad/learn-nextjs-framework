"use client";

import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSkeleton = () => {
  return (
    <section className="position-absolute bottom-2 right-0">
      <section className="hstack gap-1">
        <strong>Please wait ...</strong>
        <Spinner
          className="mb-2"
          as="span"
          size="sm"
          animation="border"
          variant="success"
          role="status"
        />
      </section>
    </section>
  );
};

export default LoadingSkeleton;
