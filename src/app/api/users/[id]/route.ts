import { NextRequest, NextResponse } from "next/server";
import { User as UserType } from "@/app/Types/UsersT";

export const GET = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const res = await fetch(`http://127.0.0.1:8000/api/users/${params.id}`);
  let users = {} as UserType;
  try {
    if (res.ok) {
      users = await res.json();

      return Response.json({
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
