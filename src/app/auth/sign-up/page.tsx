"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/sign-up", body);
      console.log(data);
      router.push("/auth/sign-in");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="grid h-[calc(100vh_-_56px)] place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-4 min-w-[350px]"
      >
        <h1 className="text-2xl">Sign Up</h1>
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="name"
          label="Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Button label="Sign Up" />
        <div className="text-center">
          <p className="text-gray-400">
            Already a member?{" "}
            <Link href="/auth/sign-in" className="text-black hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default SignUpPage;
