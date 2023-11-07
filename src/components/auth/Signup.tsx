"use client";

import React, { FormEvent, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

function Signup() {
  const route = useRouter();

  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });

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
      const response = await axios.post("/api/auth/signup", data);
      toast.success(response.data);
      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.location.href = "/account/signin";
        }
      }, 3000);
    } catch (error) {
      toast.error("Failed registration");
    }
  };

  return (
    <>
      <Toaster richColors />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={data.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={data.password}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />

        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}

export default Signup;
