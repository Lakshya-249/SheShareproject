import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="w-full flex justify-center my-5">
      <SignIn path="/sign-in" />
    </div>
  );
}
