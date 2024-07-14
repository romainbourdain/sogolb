"use client";

import { LogIn } from "lucide-react";
import { redirect } from "next/navigation";
import { useTransition } from "react";
import { FormSubmit } from "../form/form-submit";

export const SignInButton = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <FormSubmit
      onClick={() => {
        startTransition(() => {
          redirect("/auth/login");
        });
      }}
      size="sm"
      loading={isPending}
    >
      <div className="flex items-center">
        <LogIn size={16} className="mr-2" />
        Sign In
      </div>
    </FormSubmit>
  );
};
