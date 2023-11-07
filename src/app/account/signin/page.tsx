"use client"

import Signin from "@/components/auth/Signin";
import Link from "next/link";
import React from "react";

function SigninPage() {
  return (
    <>
      <Signin />
      <p>Don't have an account yet? <Link href='/account/signin'>Signup</Link></p>
    </>
  );
}

export default SigninPage;
