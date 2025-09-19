import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.username) newErrors.username = "Username is required.";
    if (!form.password) newErrors.password = "Password is required.";
    setErrors(newErrors);

    if (Object.values(newErrors).length === 0) {
      alert("Login successful!");
      navigate("/");
    }
  };

  return (
    <div className=" flex items-center justify-center p-14">
      <div className="w-2xl bg-white shadow-lg rounded-lg ">
        <div className="text-center bg-teal-700 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Login</h1>
          <p className="text-sm">Sign in to Continue</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="px-40">
          <InputField
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            error={errors.username}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
          />
          <div className="flex justify-center m-5">
            <Button type="submit" className="mt-4 w-32">
              Login
            </Button>
          </div>

          <p className="text-sm text-center mb-24">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
