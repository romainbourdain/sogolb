import { cookies } from "next/headers";
import { LoginForm } from "~/auth/login/login-form";

export default async function SignInPage() {
  const csrfToken = cookies().get("authjs.csrf-token")?.value ?? "";
  return <LoginForm csrfToken={csrfToken} />;
}
