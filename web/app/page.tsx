"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { headers } from "next/headers";
import axios from 'axios';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields");
      return;
    }
    attemptRegister(email, password);
    router.push("/home"); // go to home page
  }

  function attemptRegister(email: string, password: string) {
    axios.post('/api/register', { email, password }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.data)
    .then(data => router.push("/home"))
    .catch(error => setAlert("Registration failed"));
  }

  return (
    <div>
      <h6 className="text-5xl text-green-700 text-center mt-10">Favor Finder</h6>
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">Create Account</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border p-2 rounded"
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="btn-primary">Register</button>
        <div>Already have an account? <a href="/login" className="text-red-500 underline cursor-pointer">Login</a></div>
        {alert && <p className="text-red-500 mt-4">{alert}</p>}
      </form>
    </div>
    </div>
  );
}

    //<main className="max-w-4xl mx-auto mt-8 px-4">