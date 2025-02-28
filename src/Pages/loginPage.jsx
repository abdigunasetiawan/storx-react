import { useState } from "react";
import { login } from "../services/auth.service";

function LoginPage() {
  const [loginFaied, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    login(
      {
        username: e.target.username.value,
        password: e.target.password.value,
      },
      (status, res) => {
        if (status) {
          console.log("login sukses");

          window.localStorage.setItem("token", res);
          window.location.href = "/";
        } else {
          e.target.username.value = "";
          e.target.password.value = "";
          console.log("login gagal");
          setLoginFailed(res.response.data);
        }
      },
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 xl:px-16">
        <div className="mx-auto max-w-xs rounded-md bg-white px-4 py-8 shadow-sm xl:max-w-sm xl:px-8">
          <div className="">
            <svg
              className="mx-auto w-16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 48 26"
            >
              <path
                fill="#000"
                d="M45.8 9.087a5.323 5.323 0 1 1-7.528-7.528A5.323 5.323 0 0 1 45.8 9.087Z"
                opacity=".4"
              />
              <path
                fill="#000"
                d="M45.795 9.086a5.323 5.323 0 0 1-7.528 0l-7.434-7.434a5.323 5.323 0 1 0-7.528 7.528l7.434 7.434a5.323 5.323 0 0 0 7.528 0l7.528-7.528Z"
                opacity=".6"
              />
              <path
                fill="#000"
                d="M38.267 16.615a5.323 5.323 0 0 1-7.528 0L16.311 2.187a7.097 7.097 0 0 0-10.038 0L0 8.46a5.323 5.323 0 0 1 7.528 0L23.21 24.143a5.323 5.323 0 0 0 7.528 0l7.528-7.528Z"
              />
            </svg>
          </div>

          <form
            className="mx-auto flex flex-col gap-2"
            name="login"
            method="post"
            onSubmit={handleLogin}
          >
            <div className="flex flex-col gap-1">
              <label
                className="font-bold text-slate-700"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="h-8 rounded-md border border-slate-600 px-2"
                type="text"
                name="username"
                placeholder="johnd"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="font-bold text-slate-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="h-8 rounded-md border border-slate-600 px-2"
                type="password"
                name="password"
                placeholder="m38rmF$"
              />
            </div>
            <div className="mt-2">
              <button
                id="login-button"
                className="w-full rounded-md bg-black py-2.5 font-medium text-white"
                type="submit"
              >
                Login
              </button>
            </div>
            {loginFaied && (
              <div className="text-center">
                <p
                  id="login-status"
                  className="text-sm font-medium text-red-500"
                >
                  {loginFaied}
                </p>
                <span className="text-sm">
                  Don't have an Accout?
                  <a
                    className="font-medium"
                    href=""
                  >
                    Sign Up
                  </a>
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
