'use client';

import React, { useEffect } from "react";

import Navigation from "@/components/Navigation";
import { auth } from "../../auth";
import { redirect } from "next/navigation";


const AuthenticatedRoutes = ({ children }: { children: React.ReactNode }) => {

  // const session = auth();


  useEffect(()=> {},[]);
  
  return <React.Fragment>
     <Navigation/>
    {children}
    </React.Fragment>;
};

export default AuthenticatedRoutes;
