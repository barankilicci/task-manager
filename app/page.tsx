import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center">Welcome to Task Manager</h1>
      <div className="flex gap-4">
        <Button >
          <RegisterLink>
            Get Started
          </RegisterLink>
        </Button>

        <Button asChild variant="outline">
          <LoginLink>
            Sign in
          </LoginLink>
        </Button>
      </div>
    </div>
  );
}
