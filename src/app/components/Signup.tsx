"use client";

import { SignUp } from "@clerk/nextjs";

const SignupPage = () => {
  return (
    <>
      sign up
      <SignUp routing="hash" />
    </>
  );
};
export default SignupPage;
