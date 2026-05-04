"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaUserEdit } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import DashboardUI from "@/components/DashBoard/DashboardUI";

const Dashboard = () => {
  const { data: session, refetch } = authClient.useSession();
  const user = session?.user;
  if (!user) {
    redirect("/auth/signin");
  }
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("You’ve been logged out");
          refetch();
          redirect("/");
        },
      },
    });
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const imageSrc = isValidUrl(user?.image) ? user.image : "/default-avatar.png";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Banner */}
      <div className="w-full h-40 bg-linear-to-r from-[#7a7d81] to-[#56585c]" />

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-md -mt-20 p-6 flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="relative">
            <Image
              src={imageSrc}
              alt={user?.name || "User"}
              width={120}
              height={120}
              className="rounded-full object-cover ring-4 ring-white shadow-md"
            />

            {/* Online indicator */}
            <span className="absolute bottom-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-900">
            {user?.name || "Guest User"}
          </h2>

          {/* Email */}
          <p className="text-gray-500 text-sm md:text-base mt-1">
            {user?.email || "No email available"}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-5 flex-wrap justify-center">
            <Link href="/dashboard/edit-profile">
              <Button
                variant="outline"
                className="
                  flex items-center gap-2
                  px-5 py-2 rounded-lg
                  border-gray-300 text-gray-700
                  hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600
                  transition-all duration-300
                "
              >
                <FaUserEdit size={18} />
                Update Profile
              </Button>
            </Link>

            <Button
              onClick={handleLogout}
              className="
                px-5 py-2 rounded-lg
                bg-red-50 text-red-600
                hover:bg-red-100
                transition-all duration-300
              "
            >
              Logout
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-8">
            <div>
              <p className="text-xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-500">Orders</p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900">5</p>
              <p className="text-sm text-gray-500">Projects</p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900">3</p>
              <p className="text-sm text-gray-500">Reviews</p>
            </div>
          </div>
        </div>

        {/* Extra Section (optional) */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Recent Activity</h3>
            <p className="text-gray-500 text-sm">No recent activity yet.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Account Info</h3>
            <p className="text-gray-500 text-sm">
              Manage your profile details and settings.
            </p>
          </div>
        </div>
      </div>

      <DashboardUI />
    </div>
  );
};

export default Dashboard;
