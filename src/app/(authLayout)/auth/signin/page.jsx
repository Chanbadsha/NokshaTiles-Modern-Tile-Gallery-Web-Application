"use client";

import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-screen flex  items-center justify-center bg-linear-to-br from-[#edf2fc] to-white px-4">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 lg:p-10 lg:py-14">
        {/* HEADER */}
        <div className="text-center mb-8 space-y-3">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            Welcome back 👋
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto">
            Sign in to access your saved tiles, manage orders, and continue
            designing beautiful spaces with NakshaTiles.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* EMAIL */}
          <div className="flex flex-col gap-1">
            <Label>Email</Label>

            <Input
              {...register("email", { required: true })}
              placeholder="john@example.com"
              className="focus:ring-2 focus:ring-blue-400"
            />

            {errors.email && (
              <span className="text-xs text-red-500">Email is required</span>
            )}
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col gap-1">
            <Label>Password</Label>

            {/* <Input
              type="password"
              placeholder="Enter your password"
              className="focus:ring-2 focus:ring-blue-400"
            /> */}

            <InputGroup>
              <InputGroup.Input
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className="w-full "
                type={isVisible ? "text" : "password"}
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>

            {errors.password && (
              <span className="text-xs text-red-500">Password is required</span>
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              className="w-full bg-linear-to-r from-[#004395] to-[#3B82F6] text-white font-medium rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Check />
              Submit
            </Button>

            <Button
              type="reset"
              variant="outline"
              className="w-full rounded-xl"
            >
              Reset
            </Button>
          </div>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-6">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* SOCIAL LOGIN */}
          <div className="flex w-full flex-col gap-3">
            {/* Google */}
            <Button
              className="
                w-full flex items-center justify-center gap-2
                border border-gray-300 bg-white text-gray-700
                rounded-xl
                transition-all duration-300
                hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600
                hover:-translate-y-0.5
              "
            >
              <FaGoogle className="text-lg text-blue-500" />
              Continue with Google
            </Button>

            {/* GitHub */}
            <Button
              className="
                w-full flex items-center justify-center gap-2
                border border-gray-300 bg-white text-gray-700
                rounded-xl
                transition-all duration-300
                hover:bg-gray-900 hover:border-gray-900 hover:text-white
                hover:-translate-y-0.5
              "
            >
              <FaGithub className="text-lg text-gray-800 group-hover:text-white" />
              Continue with GitHub
            </Button>
          </div>

          <div className="text-center mt-5 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-blue-600 hover:text-blue-800 font-semibold transition-all hover:underline"
            >
              Sign up now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
