'use client';

import React from "react";

import Navigation from "@/components/Navigation";


const AuthenticatedRoutes = ({ children }: { children: React.ReactNode }) => {

  return <React.Fragment>
     <Navigation/>
    {children}
    </React.Fragment>;
};

export default AuthenticatedRoutes;
