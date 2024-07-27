import React from "react";
import { Table } from "react-bootstrap";
import Users from "@/lib/Users/User";
import Link from "next/link";


const page = async () => {
  const users = await Users();

  return (
    <div className="container">
      <p className="p-3">student details</p>
      <Table striped bordered responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Joined at</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          { Array.isArray(users) && users.length > 0 &&
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.created_at}</td>
                  <td>
                    <Link href={`student/${user.id}`}>
                      <button className="btn btn-outline-success ">view</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
            {
              !Array.isArray(users) &&
              <tr>
                <td colSpan={100} className="text-center">No data to display</td>
              </tr> 
            }
        </tbody>
      </Table>
    </div>
  );
};

export default page;
