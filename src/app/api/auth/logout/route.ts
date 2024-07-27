import { NextRequest, NextResponse } from "next/server";
import NextAuth, { AuthError } from "next-auth";
import { signOut } from "../../../../../auth";


export const POST = async (request: NextRequest) => {
  try {
   
       await signOut({
        redirectTo : "/auth/login",
        redirect : false
       })

       return NextResponse.json({
        message : "sign-out succesfull",
       });

    
  } catch (error : any) {

    if(error instanceof AuthError)
    {
      return NextResponse.json({
        error : "Bad response"
      },{
        status : 403
      })

    }else {
      return NextResponse.json({
        message : "Please try again!",
        error : error.message
      })
    }
  }
};
