import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <h5>
        Layout for dynamic routes :{" "}
        <strong className="text-info">Catch-all-segments</strong>
      </h5>
      <section>{children}</section>
    </div>
  );
};

export default layout;
