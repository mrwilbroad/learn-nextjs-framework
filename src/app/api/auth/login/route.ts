import { NextRequest, NextResponse } from "next/server";
import NextAuth, { AuthError } from "next-auth";
import { signIn, User } from "@/lib/auth";

interface LoginData 
{
  email : string;
  password : string;
}

export const POST = async (request: NextRequest) => {
  try {
   
    const formLogin = await request.json();
    const { email , password} = formLogin
   await signIn("credentials",{
    redirect : false,
    email, password
   });

       return NextResponse.json({
        message : "Login succesfull",
       });

    
  } catch (error) {

    if(error instanceof AuthError)
    {
      return NextResponse.json({
        email : "username and password are incorect"
      },{
        status : 403
      })

    }else {
      return NextResponse.json({
        message : "Please try again!"
      })
    }
  }
};
