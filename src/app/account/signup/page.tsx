"use client"

import Signup from "@/components/auth/Signup";
import React from "react";
import Link from "next/link";

function SignupPage() {
  return (
    <>
      <Signup />
      <p>Already have an account? <Link href='/account/signup'>Signin</Link></p>
    </>
  );
}

export default SignupPage;
