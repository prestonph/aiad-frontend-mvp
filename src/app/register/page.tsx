"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";

export default function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const router = useRouter();

  const handleSignUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "https://api.anyad.app/v1/register",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        toast.success("Account created successfully!");
        setSuccess("Account created successfully! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      }
    } catch (err: any) {
      if (err.response?.status === 400) {
        toast.error("Invalid input. Please try again.");
        setError("Invalid input. Please try again.");
      } else if (err.response?.status === 409) {
        toast.error("Email already exists. Please log in.");
        setError("Email already exists. Please log in.");
      } else {
        toast.error("Something went wrong. Please try again later.");
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-full bg-gray-50 flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div>
          <h2 className="mb-8 text-2xl/9 text-center font-bold tracking-tight text-gray-900">
            Create an Account
          </h2>
        </div>
          <div className="bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12">
            <form onSubmit={handleSignUp} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full border rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-2 -outline-offset-1 outline-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full border rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                >
                  {loading ? "Signing up..." : "Create account"}
                </button>
              </div>
            </form>
          </div>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
