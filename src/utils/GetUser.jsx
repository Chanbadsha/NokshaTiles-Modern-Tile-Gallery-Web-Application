import { authClient } from "@/lib/auth-client";
import { getSession } from "better-auth/api";

const GetUser = async () => {
  const { data, error } = await authClient.getSession();

  return { data, error };
};

export default GetUser;
