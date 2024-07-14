import { LoginForm } from "@/features/auth/form/login-form";
import { cookies } from "next/headers";

export default async function SignInPage() {
  const csrfToken = cookies().get("authjs.csrf-token")?.value ?? "";
  return <LoginForm csrfToken={csrfToken} />;
}
