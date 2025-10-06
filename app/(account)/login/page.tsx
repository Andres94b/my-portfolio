import { getUser } from "@/app/lib/api/user";
import LoginForm from "@/components/auth/login-form";
import { useState } from "react";

export default function loginPage() {
  const [action, setAction] = useState<String>();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.currentTarget));
    getUser(data.email as string, data.password as string);
  };

  return (
    <>
      <LoginForm />
    </>
  );
}
