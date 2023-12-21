import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const response = NextResponse.redirect(new URL("/dashboard",request.url));
    response.cookies.set({
      name: "Auth-Cookies",
      value: JSON.stringify({
        name: "wilbroad",
        email: "wilbroad123@gmail.com",
      }),
      path: "/dashboard"
    });

    return response;

    return NextResponse.json({
      message: "Login successfull",
      success: true,
    });
    
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
        message: "something went wrong ...",
      },
      {
        status: 500,
      }
    );
  }
};
