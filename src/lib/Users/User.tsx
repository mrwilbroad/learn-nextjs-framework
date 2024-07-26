import type { User as UserType } from "@/app/Types/UsersT";
// All users

type UserData = {
  data: UserType[];
};

const Users = async (): Promise<UserType[] | {}> => {
  try {

// fetch('http://localhost:8000/sanctum/csrf-cookie').then(response => {
//   console.log(response);
// });

    const res = await fetch("http://localhost:3000/api/users", {
    next: {
      // revalidate: 0,
    },
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",

    },
  });
  let users = {} as UserData;

  if (res.ok) {
    users = await res.json();
    return users.data;
  }
  else {
    return {};
    throw new Error("Internal Server");
  }
   
  
  } catch (error) {
    // console.log(error);
    throw new  Error("Error");
  }
};

// show -id
export const User = async (id: string): Promise<UserType> => {
  const res = await fetch(`http://127.0.0.1:8000/api/users/${id}`);
  let users = {} as UserType;
  if (res.ok && typeof users !== null) {
    users = await res.json();
    return users;
  }
  return users;
};

export default Users;
