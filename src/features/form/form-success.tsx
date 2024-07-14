import { Card } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

export type FormSuccessProps = {
  message: string;
};

export const FormSuccess = ({ message }: FormSuccessProps) => {
  return (
    <Card variant="success" className="flex items-center p-3">
      <CircleCheck className="mr-2" />
      <span className="text-sm font-semibold">{message}</span>
    </Card>
  );
};
