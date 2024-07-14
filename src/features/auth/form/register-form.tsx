"use client";

import { registerAction } from "@/actions/auth.action";
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
import type { RegisterData } from "@/schemas/auth.schema";
import { RegisterSchema } from "@/schemas/auth.schema";
import { useState } from "react";
import { CardWrapper } from "./card-wrapper";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const form = useZodForm({
    schema: RegisterSchema,
    defaultValues: { email: "", password: "", name: "" },
  });

  const onSubmit = async (values: RegisterData) => {
    const res = await registerAction(values);
    if (!res?.data) return setError("Something went wrong");

    setError(res.data.error);
    setSuccess(res.data.success);
  };

  return (
    <CardWrapper
      title="Register"
      description="Create an account"
      backButtonLabel="Already have an account ?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form form={form} onSubmit={onSubmit} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="John Doe"
                  autoComplete="username"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                  autoComplete="email"
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
                <Input
                  {...field}
                  type="password"
                  placeholder="******"
                  autoComplete="new-password"
                />
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
          Register
        </FormSubmit>
      </Form>
    </CardWrapper>
  );
};
