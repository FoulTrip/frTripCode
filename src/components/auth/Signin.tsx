"use client";

import React, { FormEvent, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useAuth } from "@/components/context/useSession";
import { useRouter } from "next/navigation";

function Signin() {
  const { setAuthData, user } = useAuth();
  const route = useRouter();
  const [data, setData] = useState({ username_or_email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signin", data);
      if (response.data.token) {
        setAuthData(response.data);
        toast.success("Successfully logged in");
        setTimeout(() => {
          route.push("/dashboard");
        }, 3000);
      } else {
        toast.error("Unable to login");
      }
    } catch (error) {
      // console.error(error);
      toast.error("Failed signin");
    }
  };

  if (user) {
    route.push("/dashboard");
  } else {
    return (
      <>
        <Toaster richColors />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username_or_email"
            placeholder="Username"
            onChange={handleChange}
            value={data.username_or_email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={data.password}
          />

          <input type="submit">Ingresar</input>
        </form>
      </>
    );
  }
}

export default Signin;
