"use client";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTransition } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
  const [isPending, startTransition] = useTransition();

  const onClick = (provider: "google" | "github") => {
    startTransition(async () => {
      await signIn(provider, {
        callbackUrl: DEFAULT_LOGIN_REDIRECT,
      });
    });
  };

  return (
    <>
      {isPending ? (
        <div className="flex w-full justify-center">
          <Loader2 size={20} className="animate-spin" />
        </div>
      ) : (
        <div className="flex w-full gap-2">
          <Button
            size="lg"
            variant="secondary"
            className="w-full"
            disabled={isPending}
            onClick={() => onClick("google")}
          >
            <FcGoogle size={24} />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="w-full"
            disabled={isPending}
            onClick={() => onClick("github")}
          >
            <FaGithub size={24} />
          </Button>
        </div>
      )}
    </>
  );
};
