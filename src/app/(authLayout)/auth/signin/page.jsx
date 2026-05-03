import LoginForm from "@/components/Shared/LoginForm";
import AuthLoader from "@/utils/AuthLoader";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <Suspense fallback={<AuthLoader />}>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
