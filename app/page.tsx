import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <p>Your personal workspace</p>
            <p className="text-5xl md:text-6xl">
              for <span className="text-blue-600">better productivity</span>
            </p>
          </h1>
          <p className="mt-6 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Organize your work, projects, and tasks in one unified place —
            designed to help you stay focused, move faster, and achieve more.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            {isLoggedIn ? (
              <>
                <Button asChild>
                  <Link href="/workspace">Go to Workspace</Link>
                </Button>
              </>
            ) : (
              <>
                <Button>
                  <RegisterLink>Get Started</RegisterLink>
                </Button>

                <Button asChild variant="outline">
                  <LoginLink>Sign In</LoginLink>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
