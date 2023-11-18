import React from "react";
import Pararel_routes_nav from "@/components/Pararel_routes_nav";

const ParallelLayout = ({
  team,
  analytics,
  children,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) => {
  return (
    <div className="container">
      <Pararel_routes_nav />
      <section className="mt-3"> {children}</section>
      <section>
        <h6>paralle routes here</h6>
        <section className="vstack gap-2">
          {team}
          {analytics}
        </section>
      </section>
    </div>
  );
};

export default ParallelLayout;
