"use client";

import { signInWithEmailAndPasswordAction } from "@/actions/auth.action";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormError } from "@/features/form/form-error";
import { FormSubmit } from "@/features/form/form-submit";
import { FormSuccess } from "@/features/form/form-success";
import type { LoginData } from "@/schemas/auth.schema";
import { LoginSchema } from "@/schemas/auth.schema";
import { useState } from "react";
import { CardWrapper } from "./card-wrapper";

export type LoginFormProps = {
  csrfToken: string;
};

export const LoginForm = ({ csrfToken }: LoginFormProps) => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const form = useZodForm({
    schema: LoginSchema,
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: LoginData) => {
    const res = await signInWithEmailAndPasswordAction(values);
    if (!res?.data) return setError("Something went wrong");

    setError(res.data.error);
    setSuccess(res.data.success);
  };

  return (
    <CardWrapper
      title="Login"
      description="Connect to your account"
      backButtonLabel="Don't have an account ?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form form={form} onSubmit={onSubmit} className="space-y-4">
        <input type="hidden" name="csrfToken" value={csrfToken} />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="john.doe@example.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="******" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && <FormError message={error} />}
        {success && <FormSuccess message={success} />}

        <FormSubmit
          type="submit"
          className="w-full"
          loading={form.formState.isSubmitting}
        >
          Login
        </FormSubmit>
      </Form>
    </CardWrapper>
  );
};
