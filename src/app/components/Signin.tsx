"use client";


import { SignIn } from "@clerk/nextjs";

const SigninPage = () => {
  return (
    <>
      <div className="flex justify-center items-center text-primary-500">
        <h1>Sign</h1>
        <SignIn routing="hash"/>
      </div>
    </>
  );
};
export default SigninPage;
