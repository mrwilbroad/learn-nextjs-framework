import AuthenticatedRoutes from "@/components/AuthenticatedRoutes";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import type {User} from "../../../auth";


interface PageProps {
  children: React.ReactNode;
}

const DashboardLayout = async ({ children }: PageProps) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  return (
    <div>
      <SessionProvider session={session}>
        <AuthenticatedRoutes>{children}</AuthenticatedRoutes>
      </SessionProvider>
    </div>
  );
};

export default DashboardLayout;
