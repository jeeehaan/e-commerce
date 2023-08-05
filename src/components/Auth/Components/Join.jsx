"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { API_URL } from "@/config/apiUrl";
import slugify from "slugify";

export const Join = () => {
  const [joinData, setJoinData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleEventChange = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      setJoinData({ ...joinData, [name]: slugify(value, { replacement: "", lower: true }) });
      return;
    }
    setJoinData({ ...joinData, [name]: value });
  };

  const handleSubmitJoin = async () => {
    console.log(joinData);
    const { name, username, email, password } = joinData;
    const res = await fetch(`${API_URL}/auth/register`, { method: "POST", body: JSON.stringify({ name, username, email, password }) });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <div className="w-[320px] m-auto space-y-8">
        <section className="space-y-3 text-center">
          <h3>Join</h3>
          <p>Please fill with your details</p>
        </section>
        <section className="space-y-3">
          <input name="name" placeholder="Full Name" value={joinData.name} onChange={handleEventChange} />
          <input name="username" placeholder="username" value={joinData.username} onChange={handleEventChange} />
          <input name="email" placeholder="email@domain.com" value={joinData.email} onChange={handleEventChange} />
          <input name="password" type="password" placeholder="password" value={joinData.password} onChange={handleEventChange} />
          <button className="w-full" onClick={handleSubmitJoin}>
            Join
          </button>
        </section>
        <section>
          <p>
            Have an account ?
            <Link href="/login">
              <span className="link">Login</span>
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};
