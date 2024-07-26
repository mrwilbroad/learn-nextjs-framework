import type { User, User as UserType } from "@/app/Types/UsersT";
import { NextResponse } from "next/server";


// /users
export const GET = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/users");
  let users = {} as UserType;

  try {
    if (res.ok) {
      users = await res.json();
      return NextResponse.json({
        data: users,
      });
    } else {
      throw new Error("Error while fetching data to user");
    }
  } catch (error) {
    return Response.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
};
