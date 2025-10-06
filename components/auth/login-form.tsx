"use client";

import { getUser } from "@/app/lib/api/user";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { useState } from "react";

// interface formDataInterface {
//   email: string;
//   password: string;
// }

interface formParams {
  onClose: () => void;
}

export default function LoginForm({ onClose }: formParams) {
  const [action, setAction] = useState<String>();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.currentTarget));
    const response = await getUser(
      data.email as string,
      data.password as string
    );
    if (response !== null) {
      onClose();
      console.log(response);
    }
  };

  return (
    <>
      <Form
        className="w-full flex flex-col gap-4"
        onReset={() => setAction("reset")}
        onSubmit={onSubmit}
      >
        <Input
          classNames={{
            inputWrapper: ["bg-background"],
          }}
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          name="email"
          placeholder="Enter your email"
          type="text"
        />

        <Input
          classNames={{
            inputWrapper: ["bg-background"],
          }}
          isRequired
          errorMessage="Incorrect password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
        />
        <div className="flex gap-2">
          <Button className="bg-middleground text-background" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}
