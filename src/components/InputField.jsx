import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
export default function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  onBlur,
}) {
  const [showPassword, setShowPassword] = useState(false);

  // check if this field is password or confirmPassword
  const isPasswordField = name === "password" || name === "confirmPassword";
  return (
    <div className=" relative m-8 ">
      <input
        id={name}
        name={name}
        type={isPasswordField && showPassword ? "text" : type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder=" " // leave empty, label will act as placeholder
        className={`peer w-full px-3 py-3 rounded-md border-b-2 outline-none transition 
          ${
            error
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-200"
          }
          focus:bg-gray-100
        `}
      />

      {/* Floating label */}
      <label
        htmlFor={name}
        className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs bg-white px-1"
      >
        {label}
      </label>

      {isPasswordField && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-3 text-gray-600 hover:text-gray-800"
        >
          {showPassword ? (
            <IoEyeOutline className="h-5 w-5" />
          ) : (
            <IoEyeOutline className="h-5 w-5" />
          )}
        </button>
      )}

      {/* Error message */}
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}
