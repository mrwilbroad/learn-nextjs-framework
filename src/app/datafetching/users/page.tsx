import React from "react";
import type { userstype } from "../../Types/users";
import { Table } from "react-bootstrap";

const GetUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 3600}
  });
//   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
//     cache: "no-store"
//   });
  if (!res.ok) {
    throw new Error("failed to fetch users ..");
  }
  return res.json();
};

const page = async () => {
  const data: userstype[] = await GetUsers();

  return (
    <div>
      <h5>Data Fetching on the server</h5>
      <section className="container">
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>email</th>
              <th>website</th>
              <th>mobile</th>
              <th>Address</th>
              <th>Campany</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user, index) => (
                <tr key={index}>
                     <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>{user.phone}</td>
                  <td>{user.address.street},{user.address.city}, {user.address.suite}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default page;
