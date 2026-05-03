import RegisterForm from "@/components/Shared/RegisterForm";
import AuthLoader from "@/utils/AuthLoader";
import React, { Suspense } from "react";

const SignUpPage = () => {
  return (
    <Suspense fallback={<AuthLoader />}>
      <RegisterForm />
    </Suspense>
  );
};

export default SignUpPage;
