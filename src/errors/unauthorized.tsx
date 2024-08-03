import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const UnauthorizedCard = () => {
  return (
    <Card variant="destructive">
      <CardHeader>
        <CardTitle>Vous n'êtes pas autorisé à accéder à cette page.</CardTitle>
        <CardDescription>
          Cette page nécessite d'être connecté pour y accéder.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link
          href="/auth/login"
          className={buttonVariants({ variant: "secondary" })}
        >
          Se connecter
        </Link>
      </CardFooter>
    </Card>
  );
};
