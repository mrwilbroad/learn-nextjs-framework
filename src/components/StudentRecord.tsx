"use client";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Link from "next/link";
import type { UsersT as UserType } from "@/app/Types/UsersT";
import LoadingPol from "./LoadingPol";


const StudentRecord = () => {
  const [users, setUsers] = useState([] as UserType);
  const [Loading, setLoading] = useState<{
    isLoading: boolean;
    message: string | null,
    error : string 
  }>({
    isLoading: true,
    message: "Please wait while loading data",
    error: "",
  });

  useEffect(() => {
    FetchUsers();
  }, []);

  const FetchUsers = async () => {

    try {
      const res = await fetch("/api/users");
      if (res.ok) {
        const data: UserType = await res.json();
        setLoading({
          ...Loading,
          isLoading: false,
          message: "",
        });
        if(data.length === 0)
        {
          setLoading({
            ...Loading,
            isLoading: false,
            message: "",
            error: "No data found"
          });
        }
        setUsers(data);

      } else {
        const d  = await res.json();
        console.log(d);
         throw new Error("somethig went wrong");
      }
    } catch (error) {
      setLoading({
        ...Loading,
        isLoading: false,
        message: "",
        error: "something went wrong"
      });
    }
  };
  return (
    <div>
      <Table striped bordered responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Joined</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {Loading.isLoading && (
            <tr>
              <td colSpan={5}>
                <LoadingPol variant="success">
                  <small className="d-block">{Loading.message}</small>
                </LoadingPol>
              </td>
            </tr>
          )}
           {!Loading.isLoading &&  users.length <= 0 && (
            <tr>
              <td colSpan={5}>
              <small className="d-block text-center text-danger">{Loading.error}</small>
              </td>
            </tr>
          )}

          {users.length > 0 &&
            users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.created_at}</td>
                <td>
                  <Link className="text-center" href={`/student/${user.id}`}>
                    View Data
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentRecord;
