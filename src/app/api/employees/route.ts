import axios from "axios";
import { type Employee } from "@/app/Types/Employee";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const END_POINT: string = "http://127.0.0.1:8000/api/employee";
// api/employees
export const GET = async (request: Request) => {
  const res = await axios.get(END_POINT, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: Employee = await res.data;
  if (typeof data == "object") {
    return Response.json(data);
  }
  return Response.json(
    {
      Error: "Something went wrong",
      url: request.url,
    },
    {
      status: 500,
    }
  );
};

// search params

export const POST = async (request: Request) => {

//  redirect here
      // redirect("'https://nextjs.org/");

  const { searchParams } = new URL(request.url);
  const id = searchParams.has("id") ? searchParams.get("id") : "";
  const res = await fetch(END_POINT, {
    next: {
      revalidate: 60,
    },
  });

  const cookieStore = cookies();
  const token = cookieStore.get("token");

  return Response.json(
    {
      id: id,
      url: request.url,
      data: await res.json(),
      token: token?.value ? token!.value : "HAKUNA",
    },
    {
      headers: {
        "Set-Cookie": `mrwilbroad-cookie`,
      },
    }
  );
};
