"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { API_URL } from "@/config/apiUrl";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleEventChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitLogin = async () => {
    console.log(loginData);
    const { email, password } = loginData;
    const res = await fetch(`${API_URL}/auth/login`, { method: "POST", body: JSON.stringify({ email, password }) });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <div className="w-[320px] m-auto space-y-8">
        <section className="space-y-3 text-center">
          <h3>Login</h3>
          <p>Please fill with your details</p>
        </section>
        <section className="space-y-3">
          <input name="email" placeholder="email@domain.com" onChange={handleEventChange} />
          <input name="password" type="password" placeholder="password" onChange={handleEventChange} />
          <button className="w-full" onClick={handleSubmitLogin}>
            Login
          </button>
        </section>
        <section>
          <p>
            Don't have an account ?
            <Link href="/join">
              <span className="link">Join</span>
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};
