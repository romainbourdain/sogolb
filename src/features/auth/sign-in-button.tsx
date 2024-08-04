"use client";

import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormSubmit } from "../form/form-submit";

export const SignInButton = () => {
  const router = useRouter();
  return (
    <FormSubmit
      onClick={() => {
        router.replace("/auth/login");
      }}
      size="sm"
    >
      <div className="flex items-center">
        <LogIn size={16} className="mr-2" />
        Sign In
      </div>
    </FormSubmit>
  );
};
