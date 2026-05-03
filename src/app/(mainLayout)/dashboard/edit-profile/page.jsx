"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const EditProfile = () => {
  const router = useRouter();
  const { data: session, refetch } = authClient.useSession();
  const user = session?.user;

  const { loading, setLoading } = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updateInfo = Object.fromEntries(formData.entries());

    const payload = {};

    if (updateInfo.name?.trim()) {
      payload.name = updateInfo.name.trim();
    }

    if (updateInfo.image?.trim()) {
      payload.image = updateInfo.image.trim();
    }

    // Only call API if something changed
    if (Object.keys(payload).length > 0) {
      await authClient.updateUser(payload);
      toast.success("Your profile has been updated");
      router.push("/dashboard");
    }
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
    <div className=" my-12 bg-linear-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl py-20 backdrop-blur-xl bg-white/80 border border-white/40 rounded-3xl shadow-2xl p-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Edit Profile</h2>
          <p className="text-sm text-gray-500 mt-1">
            Update your personal information
          </p>
        </div>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-28 h-28 group">
            <Image
              src={imageSrc}
              alt="Profile"
              fill
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-12">
          <FieldGroup>
            <TextField className={"pb-4"} name="name">
              <Label>Name</Label>
              <Input placeholder={user?.name} />
              <FieldError />
            </TextField>
            <TextField name="image" type="text">
              <Label>Update Url</Label>
              <Input placeholder="https://your-image-link.com" />
              <p className="text-xs text-gray-400">
                Paste a direct image link (JPG, PNG, etc.)
              </p>
              <FieldError />
            </TextField>
          </FieldGroup>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="flat"
              className="w-full border border-gray-200 hover:bg-gray-100 rounded-xl"
              onClick={() => router.back()}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg transition-all rounded-xl"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
