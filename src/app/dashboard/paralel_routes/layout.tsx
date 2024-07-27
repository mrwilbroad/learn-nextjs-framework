"use client"
import React from "react";
import Pararel_routes_nav from "@/components/Pararel_routes_nav";
import { useSelectedLayoutSegment } from "next/navigation";

const ParallelLayout = ({
  team,
  analytics,
  children,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) => {

  const segemnt = useSelectedLayoutSegment("analytics");
  console.log(segemnt ) 
  return (
    <div className="container">
      <Pararel_routes_nav />
     
      <section>
        <h6>paralle routes here</h6>
        <section className="vstack gap-2">
          {
            analytics
          }
        </section>
        <section className="mt-3"> {children}</section>
      </section>
    </div>
  );
};

export default ParallelLayout;
