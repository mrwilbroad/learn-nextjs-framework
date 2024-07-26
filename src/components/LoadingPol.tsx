import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingPol = ({
  variant,
  children,
}: {
  variant?: "warning" | "success";
  children?: React.ReactNode;
}) => {
  return (
    <div className="hstack justify-content-center gap-1">
      {children}
      <Spinner
        className="mb-2"
        as="span"
        size="sm"
        animation="border"
        variant={variant}
        role="status"
      />
    </div>
  );
};

export default LoadingPol;
