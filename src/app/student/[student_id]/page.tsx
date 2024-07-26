import React from "react";
import { User } from "@/lib/Users/User";
import CardComponent from "@/components/CardComponent";
import { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = async ({
  params,
}: {
  params: { student_id: string };
}): Promise<Metadata> => {
  const user = await User(params.student_id);

  if (typeof user === "object") {
    return {
      title: `Infor for ${user?.name}`,
      description: `${user?.name} , ${user?.email}`,
    };
  }
  return {};
};


const student_id = async ({ params }: { params: { student_id: string } }) => {
  const user = await User(params.student_id);

  return (
    <div className="container">
    <h5 className="card-header">Student information</h5>
      {typeof user === "object" && (
        <section className="col-6">
          <CardComponent>
            <h5 className="card-title">Student information</h5>
            <section className="card-body">
              <p className="p-0 m-0">Name : {user!.name}</p>
              <p className="p-0 m-0">Email : {user!.email}</p>
              <p className="p-0 m-0">Joined : {user!.created_at}</p>
            </section>
            <section className="ms-3 mb-3">
              <Link href={"/student"}>
                <button className="btn btn-dark btn-sm">get back</button>
              </Link>
            </section>
          </CardComponent>
        </section>
      )}
    </div>
  );
};

export default student_id;
