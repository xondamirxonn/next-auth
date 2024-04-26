"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Register = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();

  const submit = (data: any) => {
    axios.post("http://localhost:8000/register", data).then((res) => {
      router.push("/login");
    });
    reset();
  };
  return (
    <div className="container">
      <button onClick={() => router.push("/login")}>login</button>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            {...register("name")}
            className="border-blue-400 border-2 "
            placeholder="name"
            type="text"
          />
        </div>
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

export default Register;
