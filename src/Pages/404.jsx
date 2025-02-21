const ErrorPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-4 font-inter">
      {/* Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="26"
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
      {/* Logo */}
      <div className="text-center">
        <h1 className="text-8xl font-bold text-slate-800">404</h1>
        <h1 className="font-medium text-slate-900">Page not found.</h1>
        <button
          className="mt-2 rounded-lg bg-slate-700 px-5 py-3 text-sm font-medium text-white"
          onClick={() => (window.location.href = "/")}
        >
          Go to Main Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
