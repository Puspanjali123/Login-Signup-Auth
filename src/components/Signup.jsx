import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import {
  validateName,
  validateUsername,
  validatePassword,
  validateConfirmPassword,
  validateEmail,
  validatePhone,
} from "../Validation.js";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validateAll = () => {
    const newErrors = {
      name: validateName(form.name),
      username: validateUsername(form.username),
      password: validatePassword(form.password, form.username),
      confirmPassword: validateConfirmPassword(
        form.password,
        form.confirmPassword
      ),
      email: validateEmail(form.email),
      phone: validatePhone(form.phone),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((v) => v === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      alert("Signup successful! Redirecting to Login...");
      navigate("/");
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    // Field-level validation on blur
    let msg = "";
    if (name === "name") msg = validateName(form.name);
    if (name === "username") msg = validateUsername(form.username);
    if (name === "password")
      msg = validatePassword(form.password, form.username);
    if (name === "confirmPassword")
      msg = validateConfirmPassword(form.password, form.confirmPassword);
    if (name === "email") msg = validateEmail(form.email);
    if (name === "phone") msg = validatePhone(form.phone);
    setErrors((eObj) => ({ ...eObj, [name]: msg }));
  };

  return (
    <div className="flex items-center justify-center p-14">
      <div className="w-2xl bg-white  ">
        <div className="bg-teal-700 p-6">
          <p className="text-xl font-semibold text-white text-center ">
            Create new Account
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="flex justify-center">
            <div>
              <InputField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
              />
            </div>
            <div>
              <InputField
                label="Username"
                name="username"
                value={form.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.username}
              />
              <InputField
                label="Phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phone}
              />
              <InputField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.confirmPassword}
              />
            </div>
          </div>
          <div className="flex justify-end m-5">
            <Button type="submit" className="text-sm text-center mb-4 ">
              SIGN UP
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
