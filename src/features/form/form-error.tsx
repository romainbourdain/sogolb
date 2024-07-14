import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export type FormErrorProps = {
  message: string;
};

export const FormError = ({ message }: FormErrorProps) => {
  return (
    <Card variant="destructive" className="flex items-center p-3">
      <AlertTriangle className="mr-2" />
      <span className="text-sm font-semibold">{message}</span>
    </Card>
  );
};
