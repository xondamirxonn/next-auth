"use client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import React from "react";

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data: any) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            {...register("email")}
            className="border-blue-400 border-2 "
            placeholder="email"
            type="text"
          />
        </div>
        <div>
          <input
            {...register("password")}
            className="border-blue-400 border-2 "
            placeholder="password"
            type="text"
          />
        </div>
        <button className="p-3 bg-blue-400">send</button>
      </form>
    </div>
  );
};

export default Login;
